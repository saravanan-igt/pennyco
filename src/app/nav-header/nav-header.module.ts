import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { NavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations: [NavHeaderComponent],
  imports: [CommonModule, MaterialModuleModule],
  exports: [NavHeaderComponent],
})
export class NavHeaderModule {}
