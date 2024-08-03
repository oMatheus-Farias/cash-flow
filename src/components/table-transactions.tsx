import axios from "axios"
import { format } from "date-fns"
import { useQuery } from "react-query"

import { DeleteTransaction } from "./delete-transaction"
import { DialogCreateTransaction } from "./dialog-create-transaction"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

interface TableTransactionsProps {
  id: string
  user_id: string
  name: string
  date: string
  amount: string
  type: string
}

const TableTransactions = () => {
  const { data } = useQuery<TableTransactionsProps[]>(
    "transactions",
    async () => {
      return axios
        .get(import.meta.env.VITE_URL_GET_TRANSACTIONS)
        .then((response) => response.data)
        .catch((error) => {
          console.error(error)
        })
    },
  )

  const returnBgColor = (type: string) => {
    switch (type) {
      case "EARNING":
        return "bg-[#00D16C]"
      case "INVESTMENT":
        return "bg-[#589BFF]"
      case "EXPENSE":
        return "bg-[#FD3E3E]"
      default:
        "bg-[#242424]"
    }
  }

  return (
    <Card className="rounded-xl border-none bg-[#242424] p-8 lg:rounded-[20px]">
      <CardHeader className="w-full flex-row items-center justify-between">
        <CardTitle className="text-2xl font-semibold text-white">
          Transações
        </CardTitle>
        <DialogCreateTransaction />
      </CardHeader>
      <CardContent className="mt-10">
        <Table>
          <TableHeader>
            <TableRow className="text-base text-[#C1C1C1]">
              <TableHead className="w-[260px]">Título</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead className="text-right">Excluir</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white md:text-base">
            {data?.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="flex items-center gap-2 font-medium">
                  <div
                    className={`max-h-4 min-h-4 min-w-4 max-w-4 rounded-full ${returnBgColor(transaction.type)}`}
                  ></div>
                  {transaction.name}
                </TableCell>
                <TableCell>
                  {format(new Date(transaction.date), "dd/MM/yyyy")}
                </TableCell>
                <TableCell className="font-semibold">
                  {`R$ ${Number(transaction.amount).toFixed(2)}`}
                </TableCell>
                <TableCell className="flex justify-end">
                  <DeleteTransaction transactionId={transaction.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export { TableTransactions }
