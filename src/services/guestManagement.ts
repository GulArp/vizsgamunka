import {Guest} from "../models/guest";
import {isGuest} from "../utils/typeguard"

export class GuestManagement{
    private guests: Guest[] = [];
    private newId: number =1;
    addGuest(nev: string, email: string): Guest {
        if (!nev || !email) {
        throw new Error('Név és email megadása kötelező.');
    }
        const guest: Guest = {
            id: this.newId++,
            nev,
            email
        };

        this.guests.push(guest);
        return guest;
    }
    getGuestById(id: number): Guest | undefined {
        return this.guests.find(g => g.id === id);
    }


        getAllGuests(): Guest[] {
        return [...this.guests];
    }

}