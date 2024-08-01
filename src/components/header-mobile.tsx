import logo from "/logo.svg"

const HeaderMobile = () => {
  return (
    <header className="flex h-28 w-full items-center gap-2 bg-[#101010] px-4">
      <img src={logo} alt="logo" className="h-8 w-8" />
      <p className="text-lg font-semibold text-white">Cash Flow</p>
    </header>
  )
}

export { HeaderMobile }
