import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from '../login-page/login-page.component';
import {Observable} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ArticlePageComponent} from "../article-page/article-page.component";
import {By} from "@angular/platform-browser";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientModule,
      HttpClientTestingModule,
      RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to logon', () => {
    component.loginUser();
    expect(component.loginUser).toBeTruthy();
  });
});
