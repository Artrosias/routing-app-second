import { Component, OnInit } from '@angular/core';
import { FoxesService } from '../foxes.service';
import { MessageService } from '../message.service';
import { NumericService } from '../numeric.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private numericService: NumericService,
    private foxService: FoxesService
  ) {
    foxService.foxFetcher();
  }
  getFox() {
    return this.foxService.myImageFox;
  }
  getFoxReady() {
    return this.foxService.imageReady;
  }

  getValueFromMessageService() {
    return this.messageService.myMessage;
  }
  getValueDueFromMessageService() {
    return this.messageService.myMessage2;
  }
  getValueFromNumericService() {
    return this.numericService.myNumbers;
  }

  setValueForNumericService() {
    this.numericService.myNumbers = [20, 30, 40, 50];
  }
  ngOnInit(): void {}
}
