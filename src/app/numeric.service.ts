import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumericService {
  myNumber: number;
  myNumbers: number[];

  constructor() {
    this.myNumber = 15;
    this.myNumbers = [10, 11, 12, 13];
  }
}
