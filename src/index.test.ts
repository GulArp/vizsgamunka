import { GuestManagement } from './services/guestManagement';
import { Guest } from './models/guest';

describe('GuestManager', () => {
  let management: GuestManagement;

  beforeEach(() => {
    management = new GuestManagement();
  });

  test('Vendég hozzáadása a listához', () => {
    const nev = 'Béla';
    const email = 'bela666@barmi.com';

    const addedGuest = management.addGuest(nev, email);

    expect(addedGuest).toBeDefined();
    expect(addedGuest.id).toBe(1);
    expect(addedGuest.nev).toBe(nev);
    expect(addedGuest.email).toBe(email);
 
    const allGuests = management.getAllGuests();
    expect(allGuests).toContainEqual(addedGuest);
  });

  test('Vendégek visszaadása', () => {
    const guest1 = management.addGuest('Béla', 'bela666@barmi.com');
    const guest2 = management.addGuest('Józsika', 'joci@valami.hu');

    const allGuests = management.getAllGuests();

    expect(allGuests.length).toBe(2);
    expect(allGuests).toContainEqual(guest1);
    expect(allGuests).toContainEqual(guest2);
  });
});