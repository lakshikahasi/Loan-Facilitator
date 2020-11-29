import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObtainedPage } from './obtained.page';

const routes: Routes = [
  {
    path: '',
    component: ObtainedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObtainedPageRoutingModule {}
