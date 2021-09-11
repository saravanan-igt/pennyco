import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnyStoresComponent } from './pny-stores.component';

describe('PnyStoresComponent', () => {
  let component: PnyStoresComponent;
  let fixture: ComponentFixture<PnyStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnyStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnyStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
