import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@myworkspace1/ionic';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
