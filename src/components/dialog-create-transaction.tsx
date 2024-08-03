import axios from "axios"
import { format, parse } from "date-fns"
import { LoaderCircle, Plus } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import MaskedInput from "react-text-mask"
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"

interface DataProps {
  date: string
  name: string
  value: string
}

interface CreateTransactionProps {
  data: DataProps
  typeTransaction: string
  utcDate: string
}

const DialogCreateTransaction = () => {
  const useClient = useQueryClient()

  const [earningChecked, setEarningChecked] = useState(true)
  const [expenseChecked, setExpenseChecked] = useState(false)
  const [investChecked, setInvestChecked] = useState(false)

  const form = useForm()
  const dateMask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]

  const mutate = useMutation({
    mutationFn: async ({
      data,
      typeTransaction,
      utcDate,
    }: CreateTransactionProps) => {
      return await axios.post(import.meta.env.VITE_URL_CREATE_TRANSACTION, {
        user_id: import.meta.env.VITE_USER_ID,
        name: data.name,
        date: utcDate,
        amount: Number(data.value),
        type: typeTransaction,
      })
    },
    onSuccess: () => {
      toast.success("Registro adicionado com sucesso!")
      useClient.invalidateQueries("transactions")
      useClient.invalidateQueries("balance")
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error(error)
      toast.error("Erro ao adicionar o registro!")
    },
  })
  const loading = mutate.isLoading

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const date = parse(data.date, "dd/MM/yyyy", new Date())
    const utcDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")

    let typeTransaction: string = ""

    if (earningChecked) {
      typeTransaction = "EARNING"
    }

    if (expenseChecked) {
      typeTransaction = "EXPENSE"
    }

    if (investChecked) {
      typeTransaction = "INVESTMENT"
    }

    mutate.mutate({ data, typeTransaction, utcDate })
    form.reset()
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    switch (value) {
      case "EARNING":
        setEarningChecked(true)
        setExpenseChecked(false)
        setInvestChecked(false)
        break
      case "EXPENSE":
        setExpenseChecked(true)
        setEarningChecked(false)
        setInvestChecked(false)
        break
      case "INVESTMENT":
        setInvestChecked(true)
        setEarningChecked(false)
        setExpenseChecked(false)
        break
      default: {
        setEarningChecked(false)
        setExpenseChecked(false)
        setInvestChecked(false)
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex h-10 w-24 gap-2 rounded-[10px] bg-[#424242] transition-all duration-200 ease-linear hover:bg-[#383838] lg:h-12 lg:w-32">
          <Plus color="#FFF" className="hidden lg:block" />
          <span className="text-xs text-white lg:text-base">Adicionar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[96%] rounded-[10px] border-none bg-[#242424] text-white sm:max-w-[512px]">
        <DialogHeader>
          <DialogTitle>Adicionar transação</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={form.control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Nome"
                className="h-12 rounded-[5px] border-none bg-[#424242] p-4 text-white"
              />
            )}
          />
          <Controller
            name="value"
            control={form.control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Valor"
                value={field.value || ""}
                onChange={field.onChange}
                className="h-12 rounded-[5px] border-none bg-[#424242] p-4 text-white"
              />
            )}
          />
          <Controller
            name="date"
            control={form.control}
            defaultValue=""
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={dateMask}
                placeholder="Data"
                className="h-12 rounded-[5px] border-none bg-[#424242] p-4 text-white"
                type="text"
                value={field.value || ""}
                onChange={field.onChange}
              />
            )}
          />
          <div className="flex gap-2">
            <label
              className={`flex flex-1 items-center justify-center rounded-[10px] border py-4 ${earningChecked ? "border-[#55D462]" : "border-[#7A7A7A]"}`}
            >
              <input
                checked={earningChecked}
                onChange={handleCheckbox}
                type="checkbox"
                value="EARNING"
                className="hidden"
              />
              <span
                className={`${earningChecked ? "text-[#55D462]" : "text-[#7A7A7A]"}`}
              >
                Ganho
              </span>
            </label>

            <label
              className={`flex flex-1 items-center justify-center rounded-[10px] border py-4 ${expenseChecked ? "border-[#55D462]" : "border-[#7A7A7A]"}`}
            >
              <input
                type="checkbox"
                value="EXPENSE"
                checked={expenseChecked}
                onChange={handleCheckbox}
                className="hidden"
              />
              <span
                className={`${expenseChecked ? "text-[#55D462]" : "text-[#7A7A7A]"}`}
              >
                Despesa
              </span>
            </label>

            <label
              className={`flex flex-1 items-center justify-center rounded-[10px] border py-4 ${investChecked ? "border-[#55D462]" : "border-[#7A7A7A]"}`}
            >
              <input
                type="checkbox"
                value="INVESTMENT"
                checked={investChecked}
                onChange={handleCheckbox}
                className="hidden"
              />
              <span
                className={`${investChecked ? "text-[#55D462]" : "text-[#7A7A7A]"}`}
              >
                Invest.
              </span>
            </label>
          </div>
          <Button
            type="submit"
            className="h-12 w-full rounded-[5px] bg-emerald-700 text-white transition-all duration-200 ease-linear hover:bg-emerald-600"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Adicionar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export { DialogCreateTransaction }
