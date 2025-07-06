import { lazy } from 'react';
const Banner = lazy(() => import('../components/Banner'));
const FaqSection = lazy(() => import('../components/FaqSection'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));

const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />
      <FaqSection />
    </main>
  )
}
export default Home