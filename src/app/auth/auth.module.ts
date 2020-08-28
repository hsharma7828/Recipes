import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild([
  { path: '', component: AuthComponent }
    ]),
    FormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {}
