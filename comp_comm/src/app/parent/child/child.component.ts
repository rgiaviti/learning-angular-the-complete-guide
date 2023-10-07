import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() messageFromParent: string = ""
  @Output() messageEvent = new EventEmitter<string>();
  message:string = ''

  sendMessage() {
    console.log(this.message)
    this.messageEvent.emit(this.message);
  }
}
