import { AddressSearchInput } from "@/components/address-search-input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plane } from "lucide-react";

export default function TripDetails() {
    return (
        <form className="p-6">
            <Card>
                <CardHeader className="flex flex-row gap-4 ">
                    <span className="bg-slate-800 p-3 rounded">
                       <Plane /> 
                    </span>

                    <aside className="mt-0">
                        <strong>Informações da viagem</strong>
                        <p className="text-sm text-secondary-foreground">Adicione informações básicas sobre a viagem</p>
                    </aside> 
                </CardHeader>

                <CardContent>
                    <Input placeholder="Título da viagem" />
                    <Input placeholder="Destino" />
                    <AddressSearchInput placeholder="Endereço da hospedagem" />
                </CardContent>
            </Card>
        </form> 
    )
}
