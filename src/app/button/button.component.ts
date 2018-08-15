import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() name: string;
  @Input() text: string;
  @Input() styleClass: string;
  @Input() type = 'button';
  @Input() disabled: string;
  @Output() action = new EventEmitter;

  execAction() {
    this.action.emit(null);
  }
}
