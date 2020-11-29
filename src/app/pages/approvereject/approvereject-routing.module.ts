import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproverejectPage } from './approvereject.page';

const routes: Routes = [
  {
    path: '',
    component: ApproverejectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproverejectPageRoutingModule {}
