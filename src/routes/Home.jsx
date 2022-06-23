import React, { lazy, Suspense } from 'react';
import FullLoader from '../components/loader/FullLoader';
//code-splitting
const Hero = lazy(() => import('../components/section/Hero'));
const CountDown = lazy(() => import('../components/section/CountDown'));

function Home() {
  return (
    <Suspense fallback={<FullLoader />}>
      <Hero />
      <CountDown />
    </Suspense>
  );
}

export default Home;
