import axios from "axios"
import { Trash2 } from "lucide-react"
import { useMutation, useQueryClient } from "react-query"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface DeleteTransactionProps {
  transactionId: string
}

const DeleteTransaction = ({ transactionId }: DeleteTransactionProps) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (transactionId: string) => {
      return await axios
        .delete(
          `${import.meta.env.VITE_URL_DELETE_TRANSACTION}/${transactionId}`,
        )
        .then((response) => response.data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries("transactions")
      toast.success("Registro excluído com sucesso!")
    },
    onError: (error) => {
      console.error(error)
      toast.error("Erro ao excluir o registro!")
    },
  })

  const handleDeleteTransactionClick = (transactionId: string) => {
    mutation.mutate(transactionId)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Trash2
            size={20}
            className="transition-all duration-200 ease-linear hover:text-red-600"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[96%] rounded-[10px] border-none bg-[#242424] text-white sm:max-w-[512px]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja excluir esse registro?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente esse
            registro.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none bg-transparent">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteTransactionClick(transactionId)}
            className="bg-emerald-700 transition-all duration-200 ease-linear hover:bg-emerald-600"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { DeleteTransaction }
