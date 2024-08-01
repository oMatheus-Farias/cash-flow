import { LayoutDashboard } from "lucide-react"

import logo from "/logo.svg"

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-60 flex-col items-center gap-20 bg-[#101010] pt-14">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8 w-8" />
        <p className="text-lg font-semibold text-white">Cash Flow</p>
      </div>

      <div className="flex items-center gap-2">
        <LayoutDashboard size={30} color="#55D462" />
        <p className="text-lg font-semibold text-white">Dashboard</p>
      </div>
    </aside>
  )
}

export { Sidebar }
