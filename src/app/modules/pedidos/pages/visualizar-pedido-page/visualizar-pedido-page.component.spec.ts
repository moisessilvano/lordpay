import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPedidoPageComponent } from './visualizar-pedido-page.component';

describe('VisualizarPedidoPageComponent', () => {
  let component: VisualizarPedidoPageComponent;
  let fixture: ComponentFixture<VisualizarPedidoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarPedidoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPedidoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
