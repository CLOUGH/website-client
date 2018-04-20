import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisitsComponent } from './page-visits.component';

describe('PageVisitsComponent', () => {
  let component: PageVisitsComponent;
  let fixture: ComponentFixture<PageVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
