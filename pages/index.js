// pages/index.js

import Head from 'next/head';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Initialize Claude integration here
    const initializeClaude = () => {
      // Your Claude initialization code here
    };

    initializeClaude();
  }, []);

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Main page with Claude integration" />
      </Head>
      <main>
        <h1>Welcome to the Illuminate App!</h1>
        <p>This is the main page integrated with Claude.</p>
      </main>
    </div>
  );
};

export default Home;
