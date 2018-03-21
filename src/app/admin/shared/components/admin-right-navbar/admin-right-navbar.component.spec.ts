import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRightNavbarComponent } from './admin-right-navbar.component';

describe('AdminRightNavbarComponent', () => {
  let component: AdminRightNavbarComponent;
  let fixture: ComponentFixture<AdminRightNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRightNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRightNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
