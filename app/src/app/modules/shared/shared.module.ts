import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [MenuComponent]
})
export class SharedModule { }
