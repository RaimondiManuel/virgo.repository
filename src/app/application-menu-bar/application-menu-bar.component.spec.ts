import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMenuBarComponent } from './application-menu-bar.component';

describe('ApplicationMenuBarComponent', () => {
  let component: ApplicationMenuBarComponent;
  let fixture: ComponentFixture<ApplicationMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
