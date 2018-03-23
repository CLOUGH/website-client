import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEditPageComponent } from './portfolio-edit-page.component';

describe('PortfolioEditPageComponent', () => {
  let component: PortfolioEditPageComponent;
  let fixture: ComponentFixture<PortfolioEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
