import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from 'src/app/core/services/auth.service';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  const authServiceSpy: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'AuthService',
    ['login']
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });
  }));

  beforeEach(() => {
    authServiceSpy.login.and.returnValue(Promise.resolve({ email: 'rui' }));
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should not call login with empty form', () => {
    authServiceSpy.login.and.returnValue(Promise.resolve({ email: 'rui' }));
    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.nativeElement.click();
    expect(authServiceSpy.login).not.toHaveBeenCalled();
  });

  it('should not call login with invalid email', async () => {
    authServiceSpy.login.and.returnValue(Promise.resolve({ email: 'rui' }));
    const email = fixture.debugElement.query(
      By.css('input[formControlName="email"]')
    ).nativeElement;

    email.value = 'invalid email';
    email.dispatchEvent(new Event('input'));
    const password = fixture.debugElement.query(
      By.css('input[formControlName="password"]')
    ).nativeElement;
    password.value = 'testpassword';
    password.dispatchEvent(new Event('input'));

    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.nativeElement.click();
    expect(authServiceSpy.login).not.toHaveBeenCalled();
  });

  it('should call login with valid form', () => {
    authServiceSpy.login.and.returnValue(Promise.resolve({ email: 'rui' }));
    const email = fixture.debugElement.query(
      By.css('input[formControlName="email"]')
    ).nativeElement;

    email.value = 'rui@mail.com';
    email.dispatchEvent(new Event('input'));
    const password = fixture.debugElement.query(
      By.css('input[formControlName="password"]')
    ).nativeElement;
    password.value = 'testpassword';
    password.dispatchEvent(new Event('input'));

    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.nativeElement.click();
    expect(authServiceSpy.login).toHaveBeenCalled();
  });
});
