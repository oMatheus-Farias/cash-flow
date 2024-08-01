import axios from "axios"
import { format } from "date-fns"
import { Plus } from "lucide-react"
import { useQuery } from "react-query"

import { Button } from "./ui/button"
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

        <Button className="flex h-12 w-32 gap-2 rounded-[10px] bg-[#424242] transition-all duration-200 ease-linear hover:bg-[#383838]">
          <Plus color="#FFF" />
          <span className="text-white">Adicionar</span>
        </Button>
      </CardHeader>
      <CardContent className="mt-10">
        <Table>
          <TableHeader>
            <TableRow className="text-base text-[#C1C1C1]">
              <TableHead className="w-[300px]">Título</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
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
                <TableCell className="text-right font-semibold">
                  {`R$ ${Number(transaction.amount).toFixed(2)}`}
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
