import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() count = new EventEmitter<number>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  increaseCount() {
    this.count.emit();
  }

  ngOnInit(): void {}
}
