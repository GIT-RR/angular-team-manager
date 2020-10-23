import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateAllFormFields } from 'src/app/core/utils/form-functions';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    password: [null, Validators.required],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      validateAllFormFields(this.loginForm);
      return;
    }

    try {
      const loginData = await this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      // update central data
      console.log(loginData);
      this.router.navigate(['members']);
    } catch (ex) {
      alert(ex.message);
    }
  }
}
