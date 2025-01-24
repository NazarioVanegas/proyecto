import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvironmentsPage } from './environments.page';

describe('EnvironmentsPage', () => {
  let component: EnvironmentsPage;
  let fixture: ComponentFixture<EnvironmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
