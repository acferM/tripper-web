'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

const chartConfig = {
  costs: {
    label: 'Custos',
  },
  alimentacao: {
    label: 'Alimentação',
    color: 'hsl(var(--chart-1))'
  },
  passagem: {
    label: 'Passagem',
    color: 'hsl(var(--chart-2))'
  },
  hospedagem: {
    label: 'Hospedagem',
    color: 'hsl(var(--chart-3))'
  },
  roles: {
    label: 'Rolês',
    color: 'hsl(var(--chart-4))'
  }
} satisfies ChartConfig

const chartData = [
  { cost: 'alimentacao', value: 200, fill: "var(--color-alimentacao)" },
  { cost: 'passagem', value: 120, fill: "var(--color-passagem)" },
  { cost: 'hospedagem', value: 700, fill: "var(--color-hospedagem)" },
  { cost: 'roles', value: 300, fill: "var(--color-roles)" },

]

export function CostsChart() {
  return (
    <Card className="mt-4">
      <CardHeader className="p-4">
        <CardTitle>Gráfico de gastos</CardTitle>
      </CardHeader>

      <CardContent className="p-2">
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="cost"
              stroke="0"
            />

            <ChartLegend
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4"
              content={<ChartLegendContent nameKey="cost" />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}  
