import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CostsChart } from "./costs-chart";

export function NextTripCard() {
  return (
    <Card className="col-[3] row-[1/3] rounded-xl">
      <CardHeader>
        <CardTitle>Próxima viagem</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-1">
          <p className="text-lg"><strong>Destino:</strong> Florianópolis</p>
          <p className="text-lg"><strong>Início:</strong> 28/12/2024</p>
          <p className="text-lg"><strong>Participantes:</strong> 2</p>
          <p className="text-lg"><strong>Passagem aérea:</strong> Sem passagem</p>
        </div>

        <CostsChart />
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant="outline">
          Ver detalhes

          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>

  )
}
