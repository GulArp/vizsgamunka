import {Guest} from "./guest"


export interface Event{
    id: number;
    name: string;
    place: string;
    date: Date;
    topic: string;
    guest: Guest[];
}