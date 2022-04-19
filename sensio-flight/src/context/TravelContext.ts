import React, {createContext} from "react";

interface Trip {
  departure: string;
  arrival: string;
  date: string;
}

interface TripContext {
  trip: Trip;
  updateTrip: (trip: Trip) => void;
}
const defaultValue = {
  trip: {
    departure: '',
    arrival: '',
    date: ''
  },
  updateTrip: (_trip: Trip) => {}
}

export const TripContext = createContext<TripContext>(defaultValue);
