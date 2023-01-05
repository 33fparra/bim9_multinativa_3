import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherUsersComponent } from './searcher-users.component';

describe('SearcherUsersComponent', () => {
  let component: SearcherUsersComponent;
  let fixture: ComponentFixture<SearcherUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcherUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
