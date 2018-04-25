const apiai = require('apiai');
const apiAiServiceFulfillment = apiai(process.env.ACCESS_TOKEN, { language: "en" });

const handleFulfillmentRequest = (req, res, fulfillmentRequest) => {
  let handled = true;
  let parameters = fulfillmentRequest.result.parameters;
  if (!fulfillmentRequest.result.actionIncomplete) {
		switch (fulfillmentRequest.result.action) {
			case 'test-platform':
				sendFulfillmentResponse(res, true, {
					speech: 'Fulfillment text 1',
					displayText: 'Fulfillment text 1',
					data: {
						facebook: [{
							text: 'FB Fulfillment text 1'
						}]
					}
				});

				// Simulate 'long running' operation
				setTimeout(function() {
					sendEventToApiAi(apiAiServiceFulfillment,
						'forward_content', {
						content: 'Delayed Fulfillment text'
					}, fulfillmentRequest.sessionId);
				}, 2000);
				break;
			default:
				handled = false
				break;
		}
	} else {
		handled = false;
	}

	if (!handled) {
		res.sendStatus(500);
	}
}

const sendFulfillmentResponse = (res, success, payload) => {
  payload.source = FULFILLMENT_SOURCE;
	res.set('Content-Type', 'application/json');
	res.status(success ? 200 : 500);
	res.send(payload);
}

const sendEventToApiAi = (service, eventName, eventData, sessionId) => {
  let ev = { name: eventName, data: eventData };
	let options = { sessionId: sessionId };
	let apiaiRequest = service.eventRequest(ev, options);
	apiaiRequest.on('response', (response) => console.log(response));
	apiaiRequest.on('error', (error) => console.error(error));
	apiaiRequest.end();
}

module.exprt = {
  handleFulfillmentRequest,
  sendFulfillmentResponse,
  sendEventToApiAi
}
