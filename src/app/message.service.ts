import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  myMessage: string;
  myMessage2: string;
  constructor() {
    this.myMessage = 'Ciao a tutti';
    this.myMessage2 = 'seconda stringa da message service';
  }
}
