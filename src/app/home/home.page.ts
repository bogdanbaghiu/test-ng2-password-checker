import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  editUserForm: FormGroup;
  name = '';
  surname = '';
  email = '';
  password = '';
  confirmpassword = '';
  barLabelTitle = 'Password confirmation';
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(
    private formBuilder: FormBuilder,
    private translateConfigService: TranslateConfigService
  ) { }

  ngOnInit() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.confirmpassword = '';
    this.password = '';
    const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^ ]{8,20}$/;
    this.editUserForm = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.minLength(8), Validators.maxLength(20),
      Validators.pattern(passw)]],
      confirmpassword: [null, [Validators.minLength(8), Validators.maxLength(20),
      Validators.pattern(passw)]]
    });

  }

  ionViewWillEnter() {
    this.translateConfigService.language.subscribe(() => {
      this.translateConfigService.translateVariables('PASSWORD_CONFIRMATION').subscribe(res => {
        this.barLabelTitle = res;
      });
    });

  }

  onFormSubmit(form: any) {
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^ ]{8,20}$/;
    let ok = true;
    if (form.password && form.confirmpassword) {
      if (form.password !== form.confirmpassword) {
        ok = false;
      } else if (!form.password.match(passw)) {
        ok = false;
      }
    }
  }

}
