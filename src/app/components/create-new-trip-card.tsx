import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CreateNewTripCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comece a planejar seu novo destino!</CardTitle>
      </CardHeader>

      <form>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Destino" />
          <Input placeholder="Início" />
          <Input placeholder="Participantes" type="number" />
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">Criar nova viagem</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
