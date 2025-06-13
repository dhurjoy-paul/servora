import { Outlet } from "react-router"
import GoTopBtn from "../components/ui/GoTopBtn"
import ThemeToggle from "../components/ui/ThemeToggle"

const HomeLayout = () => {
  return (
    <div className="bg-background min-h-[300vh] dark:font-bold">
      <div className="">
        <p className="text-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit.</p>
      </div>
      <Outlet />
      <section className="fixed bottom-4 right-0 -translate-x-1/2 z-500 flex flex-col items-center space-y-2">
        <GoTopBtn />
        <ThemeToggle />
      </section>
    </div>
  )
}
export default HomeLayout