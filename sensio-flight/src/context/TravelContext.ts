import React, {createContext, SetStateAction} from "react";

interface Trip {
  departure: string;
  arrival: string;
  date: string;
}

interface UpdateTrip {
  updateTrip: (c: Trip) => void
}

interface TripContext {
  trip: Trip;
  updateTrip: UpdateTrip;
}
const defaultValue = {
  trip: {
    departure: '',
    arrival: '',
    date: ''
  },
  updateTrip: () => {}
}

export const TripContext = createContext<TripContext>(defaultValue);
