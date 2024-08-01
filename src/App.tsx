import { HeaderMobile } from "./components/header-mobile"
import { Sidebar } from "./components/sidebar"

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="lg:hidden">
        <HeaderMobile />
      </div>

      <section className="flex">
        <div className="fixed z-10 hidden lg:block">
          <Sidebar />
        </div>

        <main className="w-full lg:ml-60">
          <div className="mt-8 w-full px-4 lg:mt-16 lg:px-14">
            <h1 className="text-base text-white lg:text-xl">
              Tecnologia e inovação
            </h1>
          </div>
        </main>
      </section>
    </div>
  )
}

export default App
