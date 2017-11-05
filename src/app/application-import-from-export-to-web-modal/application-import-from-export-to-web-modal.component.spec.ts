import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationImportFromExportToWebModalComponent } from './application-import-from-export-to-web-modal.component';

describe('ApplicationImportFromExportToWebModalComponent', () => {
  let component: ApplicationImportFromExportToWebModalComponent;
  let fixture: ComponentFixture<ApplicationImportFromExportToWebModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationImportFromExportToWebModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationImportFromExportToWebModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
