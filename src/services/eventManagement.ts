import {Guest} from "../models/guest"
import {Event} from "../models/event"

export class EventManagement{

    private events: Map<number, Event> = new Map ();
    private newId: number = 1;

    createEvent(
        name: string,
        place: string,
        date: Date,
        topic: string)
        :Event{
            const newEvent: Event = {
                id: this.newId++,
                name,
                place,
                date,
                topic,
                guest: [],
            };
           this.events.set(newEvent.id, newEvent);
        return newEvent; 
        }

         addGuestToEvent(eventId: number, guest: Guest): boolean {
        const event = this.events.get(eventId);
        if (event) {
            event.guest.push(guest);
            return true;
        }
        return false;
    }

      removeGuestFromEvent(eventId: number, guestId: number): boolean {
        const event = this.events.get(eventId);
        if (event) {
            const index = event.guest.findIndex(g => g.id === guestId);
            if (index !== -1) {
                event.guest.splice(index, 1);
                return true;
            }
        }
        return false;
    }
    deleteEvent(eventId: number): boolean {
        return this.events.delete(eventId);
    }
    listEvents(): Event[] {
        return Array.from(this.events.values());
    }
    findEventsByTopic(topic: string): Event[] {
        return this.listEvents().filter(e => e.topic === topic);
    }
}