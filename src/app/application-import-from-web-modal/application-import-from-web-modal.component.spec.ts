import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationImportFromWebModalComponent } from './application-import-from-web-modal.component';

describe('ApplicationImportFromWebModalComponent', () => {
  let component: ApplicationImportFromWebModalComponent;
  let fixture: ComponentFixture<ApplicationImportFromWebModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationImportFromWebModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationImportFromWebModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
