'use client'

import { CalendarIcon } from "lucide-react";
import { format  } from 'date-fns'
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PropsWithChildren, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

type DatePickerProps = {
    isInsideForm: boolean
} & PropsWithChildren

type DatePickerInputProps = {
    isInsideForm: DatePickerProps['isInsideForm']
    value: Date | undefined
}

function DatePickerInput({ isInsideForm, value }: DatePickerInputProps) {
    if (!isInsideForm) return null

    return (
       <input type="hidden" value={String(value)} /> 
    )
}

export function DatePicker({ isInsideForm = false, children }: DatePickerProps) {
    const [selectedDate, setSelectedDate] = useState<Date>()

    return (
        <Popover>
            <DatePickerInput isInsideForm={isInsideForm} value={selectedDate} />

            <PopoverTrigger asChild>
                <Button 
                    variant="outline" 
                    className={cn(
                        'w-full justify0start text-left font-normal',
                        !selectedDate && 'text-muted-foreground' 
                    )}
                >
                    <CalendarIcon /> 

                    {selectedDate ? format(selectedDate, 'PPP') : <span>{children}</span>}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="center">
                <Calendar 
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </PopoverContent>
        </Popover>
    )
}
