import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputfatherComponent } from './outputfather.component';

describe('OutputfatherComponent', () => {
  let component: OutputfatherComponent;
  let fixture: ComponentFixture<OutputfatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputfatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
