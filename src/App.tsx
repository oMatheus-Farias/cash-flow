import { HeaderMobile } from "./components/header-mobile"

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="lg:hidden">
        <HeaderMobile />
      </div>

      <div className="hidden lg:block"></div>
    </div>
  )
}

export default App
