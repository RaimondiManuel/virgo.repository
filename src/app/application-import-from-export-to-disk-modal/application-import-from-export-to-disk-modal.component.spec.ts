import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationImportFromExportToDiskModalComponent } from './application-import-from-export-to-disk-modal.component';

describe('ApplicationImportFromExportToDiskModalComponent', () => {
  let component: ApplicationImportFromExportToDiskModalComponent;
  let fixture: ComponentFixture<ApplicationImportFromExportToDiskModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationImportFromExportToDiskModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationImportFromExportToDiskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
