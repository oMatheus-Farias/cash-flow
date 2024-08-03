import { Plus } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import MaskedInput from "react-text-mask"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"

const DialogCreateTransaction = () => {
  const form = useForm()
  const dateMask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data)
    form.reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex h-12 w-32 gap-2 rounded-[10px] bg-[#424242] transition-all duration-200 ease-linear hover:bg-[#383838]">
          <Plus color="#FFF" />
          <span className="text-white">Adicionar</span>
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
          <div>
            <label>
              <input type="checkbox" name="type" id="earning" value="EARNING" />
              Ganho
            </label>
            <label>
              <input type="checkbox" name="type" id="expense" value="EXPENSE" />
              Despesa
            </label>
            <label>
              <input
                type="checkbox"
                name="type"
                id="investment"
                value="INVESTMENT"
              />
              Investimento
            </label>
          </div>
          <Button
            type="submit"
            className="h-12 w-full rounded-[5px] bg-emerald-700 text-white transition-all duration-200 ease-linear hover:bg-emerald-600"
          >
            Adicionar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export { DialogCreateTransaction }
