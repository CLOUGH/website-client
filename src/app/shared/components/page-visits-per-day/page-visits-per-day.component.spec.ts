import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisitsPerDayComponent } from './page-visits-per-day.component';

describe('PageVisitsPerDayComponent', () => {
  let component: PageVisitsPerDayComponent;
  let fixture: ComponentFixture<PageVisitsPerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVisitsPerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVisitsPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
