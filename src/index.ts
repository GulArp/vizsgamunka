import {GuestManagement} from "./services/guestManagement";
import {EventManagement} from "./services/eventManagement";


const guestManager = new GuestManagement();
const eventManager = new EventManagement();

const guest1 = guestManager.addGuest('Teszt Elek', 'teszt.elek@valami.hu');
const guest2 = guestManager.addGuest('Teszt Elena', 'elena.teszt@akarmi.com');


const event1 = eventManager.createEvent('Metallica', 'Budapest', new Date('2026-06-11T20:00:00'), 'koncert');
const event2 = eventManager.createEvent('Sziget Piknik', 'Budapest', new Date('2025-06-12T18:00:00'), 'Piknik');

eventManager.addGuestToEvent(event1.id, guest1);
eventManager.addGuestToEvent(event1.id, guest2);

console.log(eventManager.listEvents());
console.log(eventManager.findEventsByTopic('koncert'));