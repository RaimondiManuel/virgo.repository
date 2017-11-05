import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatusBarComponent } from './application-status-bar.component';

describe('ApplicationStatusBarComponent', () => {
  let component: ApplicationStatusBarComponent;
  let fixture: ComponentFixture<ApplicationStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
