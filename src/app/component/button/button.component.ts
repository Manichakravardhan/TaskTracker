import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Click';
  @Input() color: string = 'blue';
  @Output() btnClick = new EventEmitter()


   onClick(){
    console.log('Add')
    this.btnClick.emit()
   }
}
