import dollarSign from "/dollar-sign.svg"
import wallet from "/empty-wallet.svg"

import { HeaderMobile } from "./components/header-mobile"
import { Sidebar } from "./components/sidebar"
import { Card, CardContent } from "./components/ui/card"

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

            <div className="mt-8 flex w-full flex-col gap-4">
              <Card className="h-28 w-full rounded-xl border-none bg-[#242424]">
                <CardContent className="flex h-full items-center justify-between rounded-xl bg-radial-gradient-gray px-8 py-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-[#C1C1C1]">Saldo</span>
                    <p className="text-2xl font-semibold text-white">
                      R$ 2.000
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A8A8A8] bg-opacity-20">
                    <img src={wallet} alt="Carteira" className="h-7 w-7" />
                  </div>
                </CardContent>
              </Card>

              <Card className="h-28 w-full rounded-xl border-none bg-[#242424]">
                <CardContent className="flex h-full items-center justify-between rounded-xl bg-radial-gradient-green px-8 py-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-[#C1C1C1]">Ganhos</span>
                    <p className="text-2xl font-semibold text-white">
                      R$ 5.000
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#55D462] bg-opacity-20">
                    <img src={dollarSign} alt="Carteira" className="h-7 w-7" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default App
