import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationviewPage } from './applicationview.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationviewPageRoutingModule {}
