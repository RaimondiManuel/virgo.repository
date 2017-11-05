import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationImportFromDiskModalComponent } from './application-import-from-disk-modal.component';

describe('ApplicationImportFromDiskModalComponent', () => {
  let component: ApplicationImportFromDiskModalComponent;
  let fixture: ComponentFixture<ApplicationImportFromDiskModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationImportFromDiskModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationImportFromDiskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
