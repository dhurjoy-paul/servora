import { FcGoogle } from "react-icons/fc"

const GoogleLogin = () => {
  return (
    <button className="w-full flex justify-center items-center-safe gap-2 bg-zinc-100 dark:bg-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-100 border border-gray-500 rounded-xl py-3 text-black font-medium font-funnel-display">
      <FcGoogle size={22} /> Login with Google
    </button>
  )
}
export default GoogleLogin