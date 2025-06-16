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
        <Outlet />
        <h1 className="bg-amber-300 dark:bg-cyan-300">ok ok ok</h1>
        <section className="fixed bottom-4 right-0 -translate-x-1/2 z-500 flex flex-col items-center space-y-2">
          <GoTopBtn />
          <ThemeToggle />
        </section>
      </div>
    </ThemeProvider>
  )
}
export default HomeLayout