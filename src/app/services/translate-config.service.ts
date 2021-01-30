import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  private _language = null;
  private _language$ = new BehaviorSubject(this._language);
  private _popover: HTMLIonPopoverElement;

  private _languages: Language[] = [
    {
      iso: 'en',
      name: 'English',
      icon: 'assets/languages/english.svg'
    },
    {
      iso: 'es',
      name: 'Español',
      icon: 'assets/languages/spanish.svg'
    }
  ];

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
    this.language = setLang;
  }

  set language(value) {
    this._language = value;
    this._language$.next(this._language);
  }
  get language() {
    return this._language$.asObservable();
  }

  translateVariables(translation: string, params?: any) {
    if (params != undefined) {
      return this.translate.get(translation, params);
    }
    return this.translate.get(translation);
  }

  getAllLanguages(): Language[] {
    return this._languages;
  }

  setPopover(popover: HTMLIonPopoverElement) {
    this._popover = popover;
  }

  dismissPopover() {
    this._popover.dismiss();
  }

}
