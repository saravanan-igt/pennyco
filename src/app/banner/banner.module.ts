import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, MaterialModuleModule],
  exports: [BannerComponent],
})
export class BannerModule {}
