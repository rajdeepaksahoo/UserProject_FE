import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchUserComponent } from './show-search-user.component';

describe('ShowSearchUserComponent', () => {
  let component: ShowSearchUserComponent;
  let fixture: ComponentFixture<ShowSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSearchUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
