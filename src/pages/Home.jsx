import { lazy } from 'react';
const Banner = lazy(() => import('../components/Banner'));

const Home = () => {
  return (
    <main>
      <Banner />
      
    </main>
  )
}
export default Home