import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { PnyStoresRoutingModule } from './pny-stores-routing.module';
import { PnyStoresComponent } from './pny-stores.component';

@NgModule({
  declarations: [PnyStoresComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModuleModule,
    PnyStoresRoutingModule,
  ],
})
export class PnyStoresModule {}
