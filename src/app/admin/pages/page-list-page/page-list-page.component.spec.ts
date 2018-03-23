import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPageComponent } from './page-list-page.component';

describe('PageListPageComponent', () => {
  let component: PageListPageComponent;
  let fixture: ComponentFixture<PageListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
