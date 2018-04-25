import React, { Component } from 'react';
import Head from 'next/head'

const App = ({ children }) => (
  <div>
    <Head>
      <title>GetBots</title>
    </Head>
    {children}
  </div>
)

export default App
