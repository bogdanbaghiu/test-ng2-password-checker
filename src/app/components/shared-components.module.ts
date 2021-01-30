import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguagesToastModule } from './languages-toast/languages-toast.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        LanguagesToastModule,
        CommonModule,
        TranslateModule,
        IonicModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [HeaderComponent]
})
export class SharedComponentsModule { }
