import { Component, Input } from '@angular/core';
import { ButtonType } from 'src/app/core/models';

@Component({
  selector: 'wa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  readonly primaryType = ButtonType.Primary;
  readonly secondaryType = ButtonType.Secondary;
  @Input() type: ButtonType = this.primaryType;
}
