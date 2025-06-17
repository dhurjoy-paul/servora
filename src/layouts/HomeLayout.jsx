import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import GoTopBtn from "../components/ui/GoTopBtn"
import ThemeToggle from "../components/ui/ThemeToggle"
import ThemeProvider from "../contexts/ThemeContext"

const HomeLayout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-[300vh] bg-background">
        <Navbar />
        <main>
          <Outlet />
          <section className="fixed bottom-4 right-0 -translate-x-1/2 z-500 flex flex-col items-center space-y-2">
            <GoTopBtn />
            <ThemeToggle />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}
export default HomeLayout