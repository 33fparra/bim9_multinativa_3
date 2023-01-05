import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputsonComponent } from './outputson.component';

describe('OutputsonComponent', () => {
  let component: OutputsonComponent;
  let fixture: ComponentFixture<OutputsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
