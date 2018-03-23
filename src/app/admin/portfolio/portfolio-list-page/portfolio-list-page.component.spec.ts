import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListPageComponent } from './portfolio-list-page.component';

describe('PortfolioListPageComponent', () => {
  let component: PortfolioListPageComponent;
  let fixture: ComponentFixture<PortfolioListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
