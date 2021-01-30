import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { SharedComponentsModule } from '../components/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PasswordStrengthBarModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    TranslateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
