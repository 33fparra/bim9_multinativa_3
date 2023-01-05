import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCLIComponent } from './test-cli.component';

describe('TestCLIComponent', () => {
  let component: TestCLIComponent;
  let fixture: ComponentFixture<TestCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCLIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
