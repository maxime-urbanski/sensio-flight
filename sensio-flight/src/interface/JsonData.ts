export interface Flight {
  id: string
  flightNumber: string
  takeoff: string
  landing: string
  duration: number
  price: number
  currencyCode: string
  departureAirport:  string
  arrivalAirport: string
}

export interface IncludedType {
  [key: string]: {
    city?: string
    name: string
  }
}

export interface JSON {
  data: Flight[]
  included: IncludedType
}
