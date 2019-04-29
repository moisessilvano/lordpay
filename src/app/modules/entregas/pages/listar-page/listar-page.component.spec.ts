import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPageComponent } from './listar-page.component';

describe('ListarPageComponent', () => {
  let component: ListarPageComponent;
  let fixture: ComponentFixture<ListarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
