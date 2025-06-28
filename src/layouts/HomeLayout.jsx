import { lazy } from "react"
import { Outlet } from "react-router"
import ThemeProvider from "../contexts/ThemeContext"
const Navbar = lazy(() => import('../components/Navbar'))
const GoTopBtn = lazy(() => import('../components/ui/GoTopBtn'))
const ThemeToggle = lazy(() => import('../components/ui/ThemeToggle'))

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