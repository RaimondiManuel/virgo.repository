import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFrameworkComponent } from './application-framework.component';

describe('ApplicationFrameworkComponent', () => {
  let component: ApplicationFrameworkComponent;
  let fixture: ComponentFixture<ApplicationFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
