import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsItemComponent } from '../goods-item/goods-item.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('GoodsItemComponent', () => {
  let component: GoodsItemComponent;
  let fixture: ComponentFixture<GoodsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [
        HttpClientModule,
        HttpClientTestingModule,
         RouterTestingModule],
      declarations: [ GoodsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
