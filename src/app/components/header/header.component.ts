import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Language } from 'src/app/models/language';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { LanguagesToastComponent } from '../languages-toast/languages-toast.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  languages: Language[];
  language: any;
  popover: HTMLIonPopoverElement;

  constructor(
    private popoverController: PopoverController,
    private translateConfigService: TranslateConfigService
  ) { }

  ngOnInit() {
    this.languages = this.translateConfigService.getAllLanguages();
    this.language = this.languages.find(lang => lang.iso === this.translateConfigService.getDefaultLanguage());
    this.translateConfigService.language.subscribe(res => {
      if (res && res != null) {
        this.language = this.languages.find(lang => lang.iso === res);
      }
    });
  }

  async showLanguage(ev) {
    this.popover = await this.popoverController.create({
      component: LanguagesToastComponent,
      backdropDismiss: true,
      showBackdrop: true,
      event: ev,
      componentProps: {
        onClick: () => {
          this.popover.dismiss();
        },
      },
    });
    this.translateConfigService.setPopover(this.popover);
    return await this.popover.present();

  }


}
