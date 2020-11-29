import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainedPageRoutingModule } from './obtained-routing.module';

import { ObtainedPage } from './obtained.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainedPageRoutingModule
  ],
  declarations: [ObtainedPage]
})
export class ObtainedPageModule {}
