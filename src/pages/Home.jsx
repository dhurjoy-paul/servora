import { lazy } from 'react';
const Banner = lazy(() => import('../components/Banner'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));

const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />

    </main>
  )
}
export default Home