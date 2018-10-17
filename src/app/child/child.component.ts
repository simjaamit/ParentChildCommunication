import { Component, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div class="notification">
            <h3>Child</h3>
             {{message}}
<button (click)="sendMessage()"class="button">Send Message</button>
            </div>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

message : string = "Hai Simja";
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  sendMessage()
  {
    this.messageEvent.emit(this.message)
  }

  

}