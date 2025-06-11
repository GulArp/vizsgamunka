import {Guest} from "../models/guest";


export function isGuest(obj: any): obj is Guest {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.id === 'number' &&
        typeof obj.nev === 'string' &&
        typeof obj.email === 'string'
    );
}