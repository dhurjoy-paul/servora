import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import GoTopBtn from "../components/ui/GoTopBtn"
import Loader from "../components/ui/Loader"
import ThemeToggle from "../components/ui/ThemeToggle"
import ThemeProvider from "../contexts/ThemeContext"
import DelayedSuspense from "../utils/DelayedSuspense"
import RouteChangeLoader from "../utils/RouteChangeLoader"
import ScrollToHashElement from "../utils/ScrollToHashElement"

const HomeLayout = () => {
  return (
    <ThemeProvider>
      {/* <CustomCursor /> */}
      <RouteChangeLoader />
      <ScrollToHashElement />
      <Navbar />
      <DelayedSuspense fallback={<Loader />} delay={1000}>
        <main>
          <Outlet />

          <section className="fixed bottom-4 right-0 -translate-x-1/2 z-500 flex flex-col items-center space-y-2">
            <GoTopBtn />
            <ThemeToggle />
          </section>

          <Footer />
        </main>
      </DelayedSuspense>
    </ThemeProvider>
  )
}
export default HomeLayout