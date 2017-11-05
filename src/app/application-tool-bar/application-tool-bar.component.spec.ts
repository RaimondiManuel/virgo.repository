import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationToolBarComponent } from './application-tool-bar.component';

describe('ApplicationToolBarComponent', () => {
  let component: ApplicationToolBarComponent;
  let fixture: ComponentFixture<ApplicationToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
