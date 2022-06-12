import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { SingUpPageComponent } from '../sing-up-page/sing-up-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {LoginPageComponent} from "../login-page/login-page.component";

describe('SingUpPageComponent', () => {
  let component: SingUpPageComponent;
  let fixture: ComponentFixture<SingUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientModule,
      HttpClientTestingModule,
      RouterTestingModule
      ],
      declarations: [ SingUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should able to sign in', () => {
    component.singUp();
    expect(component.singUp).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
