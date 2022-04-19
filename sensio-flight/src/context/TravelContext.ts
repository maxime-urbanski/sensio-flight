import {createContext} from "react";

export interface Place {
  airport: string;
  city: string;
}

export interface Trip {
  departure: Place;
  arrival: Place;
  date: string;
}

interface TripContext {
  trip: Trip;
  updateTrip: (trip: Trip) => void;
  result: boolean;
  showResult: (result: boolean) => void;
}
const defaultValue = {
  trip: {
    departure: {
      airport: '',
      city: '',
    },
    arrival: {
      airport: '',
      city: '',
    },
    date: ''
  },
  updateTrip: (_trip: Trip) => {},
  result: false,
  showResult: (result: boolean) => {}
}

export const TripContext = createContext<TripContext>(defaultValue);
