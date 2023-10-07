import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage! : string
  messageFromChild!: string;

  receiveMessage(message: string) {
    console.log(message)
    this.messageFromChild = message;
  }
}
