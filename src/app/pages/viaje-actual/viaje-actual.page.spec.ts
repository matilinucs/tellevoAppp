import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeActualPage } from './viaje-actual.page';

describe('ViajeActualPage', () => {
  let component: ViajeActualPage;
  let fixture: ComponentFixture<ViajeActualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
