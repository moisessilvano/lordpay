import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPedidoPageComponent } from './criar-pedido-page.component';

describe('CriarPedidoPageComponent', () => {
  let component: CriarPedidoPageComponent;
  let fixture: ComponentFixture<CriarPedidoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPedidoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPedidoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
