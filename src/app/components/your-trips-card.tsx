import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TripsTable } from "./trips-table";

export function YourTripsCard() {
  return (
    <Card className="col-[1/3] row-span-full rounded-xl p-4">
      <CardHeader>
        <CardTitle>Suas viagens</CardTitle>
      </CardHeader>

      <CardContent className="h-trips-table-container overflow-y-scroll">
        <TripsTable />
      </CardContent>
    </Card>
  )
}
