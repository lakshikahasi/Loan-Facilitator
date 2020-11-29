import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproverejectPageRoutingModule } from './approvereject-routing.module';

import { ApproverejectPage } from './approvereject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproverejectPageRoutingModule
  ],
  declarations: [ApproverejectPage]
})
export class ApproverejectPageModule {}
