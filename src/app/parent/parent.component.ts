import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
           <div class="par"> <h1>Parent</h1>
            Message : {{message}}
   <app-child (messageEvent)="receiveMessage($event)"></app-child>
   </div>
            `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  constructor() { }
  message= "hello everyone";

  ngOnInit(){}
  receiveMessage($event)
  {
    this.message = $event
  }

}