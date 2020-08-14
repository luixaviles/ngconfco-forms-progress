import { Injectable } from '@angular/core';
import { WorkshopEntry } from '../model/model';

const DATA: WorkshopEntry[] = [
  {id: 1, user: 'Luis Aviles', workshop: 'Mastering Angular Forms', ticketPrice: 9.99, url: 'ngconf.co/forms'},
  {id: 2, user: 'Juan Perez', workshop: 'Learn Schematics', ticketPrice: 9.99, url: 'ngconf.co/schematics'},
  {id: 3, user: 'Maria Fernandez', workshop: 'Performant Angular Apps', ticketPrice: 19.99, url: 'ngconf.co/performance'},
  {id: 4, user: 'John Doe', workshop: 'Angular Forms', ticketPrice: 9.99, url: 'ngconf.co/forms'},
  {id: 5, user: 'Felicidad Garcia', workshop: 'Learn Schematics', ticketPrice: 29.99, url: 'ngconf.co/schematics'},
  {id: 6, user: 'Adriana Lopez', workshop: 'Performant Angular Apps', ticketPrice: 9.99, url: 'ngconf.co/performance'},
];

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  constructor() { }

  getWorkshopEntries(): WorkshopEntry[] {
    return DATA;
  }

  addWorkshopEntry(entry: WorkshopEntry): void {
    entry.id = this.getRandomId();
    DATA.push(entry);
  }

  getWorkshopEntry(id: number): WorkshopEntry {
    return DATA.find(entry => entry.id === id);
  }

  editWorkshopEntry(entry: WorkshopEntry) {
    const index = DATA.findIndex(e => entry.id === e.id);
    DATA[index] = entry;
  }

  getRandomId() {
    return Math.floor(Math.random()*10000);
  }
}
