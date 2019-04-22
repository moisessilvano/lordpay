import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosPageComponent } from './listar-pedidos-page.component';

describe('ListarPedidosPageComponent', () => {
  let component: ListarPedidosPageComponent;
  let fixture: ComponentFixture<ListarPedidosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPedidosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedidosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
