import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdocheckComponent } from './ngdocheck.component';

describe('NgdocheckComponent', () => {
  let component: NgdocheckComponent;
  let fixture: ComponentFixture<NgdocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdocheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
