'use client'

import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

const api_key = 'AIzaSyC-cyxiipIcW7_flzM3xjQSfn-0-BSgM7k'

type AddressSearchInputProps = {
    placeholder: string
}

export function AddressSearchInput({ placeholder }: AddressSearchInputProps) {
    return (
        <APIProvider apiKey={api_key}>
            <AddressInput placeholder={placeholder} />
        </APIProvider>
    )
}

function AddressInput({ placeholder }: AddressSearchInputProps) {
    const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null) 
    const inputRef = useRef<HTMLInputElement>(null)
    const places = useMapsLibrary('places')

    useEffect(() => {
        console.log(places, inputRef.current)
        if (!places || !inputRef.current) return

        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, {
            fields: ['geometry', 'name', 'formatted_address']
        }))
    }, [places])

    useEffect(() => {
        if (!placeAutocomplete) return

        placeAutocomplete.addListener('place_changed', () => {
            console.log(placeAutocomplete.getPlace())
        })
    }, [placeAutocomplete])

    return <Input ref={inputRef} placeholder={placeholder} />
}
