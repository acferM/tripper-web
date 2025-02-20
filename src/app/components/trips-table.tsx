import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight } from "lucide-react";

const Item = () => (
  <TableRow>
    <TableCell className="pl-0 text-lg">Jampa trip</TableCell>
    <TableCell className="text-lg">João Pessoa</TableCell>
    <TableCell className="text-lg">R$ 1000,00</TableCell>
    <TableCell className="text-lg">24/01/2025</TableCell>
    <TableCell className="text-lg">5 pessoas</TableCell>
    <TableCell>
      <Button variant="secondary">
        Detalhes

        <ArrowRight />
      </Button>
    </TableCell>
  </TableRow>
)

export function TripsTable() {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="pl-0 font-bold text-lg">Título</TableHead>
          <TableHead className="pl-0 font-bold text-lg">Destino</TableHead>
          <TableHead className="font-bold text-lg">Custo</TableHead>
          <TableHead className="font-bold text-lg">Início</TableHead>
          <TableHead className="font-bold text-lg">Participantes</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </TableBody>
    </Table>
  )
}
