import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-languages-toast',
  templateUrl: './languages-toast.component.html',
  styleUrls: ['./languages-toast.component.scss'],
})
export class LanguagesToastComponent implements OnInit {
  languages: Language[] = [];
  selectedLanguage: string;

  constructor(
    private translateConfigService: TranslateConfigService) {
    this.languages = this.translateConfigService.getAllLanguages();
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() { }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.translateConfigService.setLanguage(this.selectedLanguage);
    this.translateConfigService.dismissPopover();
  }
}