import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, CardComponent, IconButtonComponent]
})
export class SharedModule { }
