import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeolocationChartComponent } from './user-geolocation-chart.component';

describe('UserGeolocationChartComponent', () => {
  let component: UserGeolocationChartComponent;
  let fixture: ComponentFixture<UserGeolocationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGeolocationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeolocationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
