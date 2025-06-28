import { lazy } from 'react';
const Banner = lazy(() => import('../components/Banner'));

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  )
}
export default Home