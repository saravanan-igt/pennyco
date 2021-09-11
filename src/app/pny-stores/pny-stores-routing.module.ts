import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PnyStoresComponent } from './pny-stores.component';

const routes: Routes = [
  {
    path: '',
    component: PnyStoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PnyStoresRoutingModule {}
