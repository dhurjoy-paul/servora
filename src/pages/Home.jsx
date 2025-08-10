import { lazy } from 'react';
import { Helmet } from 'react-helmet';
import NewsletterSection from '../components/NewsletterSection';
const Banner = lazy(() => import('../components/Banner'));
const FaqSection = lazy(() => import('../components/FaqSection'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const PopularServices = lazy(() => import('../components/PopularServices'));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Servora</title>
        <meta name="description" content="Home page of FixMate SPA" />
      </Helmet>
      <main>
        <Banner />
        <PopularServices />
        <HowItWorks />
        <FaqSection />
        <NewsletterSection />
      </main>
    </>
  )
}
export default Home