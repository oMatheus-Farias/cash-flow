import dollarSign from "/dollar-sign.svg"
import dollarSignCut from "/dollar-sign-cut.svg"
import wallet from "/empty-wallet.svg"
import moneySafe from "/money-safe.svg"

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
          <div className="mt-8 w-full max-w-[1430px] px-4 lg:mt-16 lg:px-14 xl:mx-auto">
            <h1 className="text-base text-white lg:text-xl">
              Tecnologia e inovação
            </h1>

            <div className="mt-8 flex w-full flex-col gap-4 md:flex-row md:flex-wrap xl:gap-14">
              <div className="flex flex-col gap-4 md:flex-1 md:flex-nowrap xl:gap-14">
                <Card className="h-28 w-full rounded-xl border-none bg-[#242424] lg:h-36 lg:rounded-[20px] xl:h-40">
                  <CardContent className="flex h-full items-center justify-between rounded-xl bg-radial-gradient-gray px-8 py-0 lg:rounded-[20px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-[#C1C1C1] lg:text-lg">
                        Saldo
                      </span>
                      <p className="text-2xl font-semibold text-white lg:text-3xl">
                        R$ 2.000
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A8A8A8] bg-opacity-20 lg:h-20 lg:w-20">
                      <img
                        src={wallet}
                        alt="Carteira"
                        className="h-7 w-7 xl:h-10 xl:w-10"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-28 w-full rounded-xl border-none bg-[#242424] lg:h-36 lg:rounded-[20px] xl:h-40">
                  <CardContent className="flex h-full items-center justify-between rounded-xl bg-radial-gradient-green px-8 py-0 lg:rounded-[20px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-[#C1C1C1] lg:text-lg">
                        Ganhos
                      </span>
                      <p className="text-2xl font-semibold text-white lg:text-3xl">
                        R$ 5.000
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#55D462] bg-opacity-20 lg:h-20 lg:w-20">
                      <img
                        src={dollarSign}
                        alt="Carteira"
                        className="h-7 w-7 xl:h-10 xl:w-10"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col gap-4 md:flex-1 md:flex-nowrap xl:gap-14">
                <Card className="h-28 w-full rounded-xl border-none bg-[#242424] lg:h-36 lg:rounded-[20px] xl:h-40">
                  <CardContent className="flex h-full items-center justify-between rounded-xl bg-radial-gradient-red px-8 py-0 lg:rounded-[20px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-[#C1C1C1] lg:text-lg">
                        Gastos
                      </span>
                      <p className="text-2xl font-semibold text-white lg:text-3xl">
                        R$ 2.000
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FD3E3E] bg-opacity-20 lg:h-20 lg:w-20">
                      <img
                        src={dollarSignCut}
                        alt="Carteira"
                        className="h-7 w-7 xl:h-10 xl:w-10"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-28 w-full rounded-xl border-none bg-[#242424] lg:h-36 lg:rounded-[20px] xl:h-40">
                  <CardContent className="flex h-full items-center justify-between rounded-xl bg-radial-gradient-blue px-8 py-0 lg:rounded-[20px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-[#C1C1C1] lg:text-lg">
                        Gastos
                      </span>
                      <p className="text-2xl font-semibold text-white lg:text-3xl">
                        R$ 2.000
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#589BFF] bg-opacity-20 lg:h-20 lg:w-20">
                      <img
                        src={moneySafe}
                        alt="Carteira"
                        className="h-7 w-7 xl:h-10 xl:w-10"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default App
