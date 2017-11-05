import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationToolBarComponent } from './application-tool-bar/application-tool-bar.component';
import { ApplicationMenuBarComponent } from './application-menu-bar/application-menu-bar.component';
import { ApplicationStatusBarComponent } from './application-status-bar/application-status-bar.component';
import { ApplicationFrameworkComponent } from './application-framework/application-framework.component';
import { ApplicationImportFromWebModalComponent } from './application-import-from-web-modal/application-import-from-web-modal.component';
import { ApplicationImportFromDiskModalComponent } from './application-import-from-disk-modal/application-import-from-disk-modal.component';
import { ApplicationImportFromExportToDiskModalComponent } from './application-import-from-export-to-disk-modal/application-import-from-export-to-disk-modal.component';
import { ApplicationImportFromExportToWebModalComponent } from './application-import-from-export-to-web-modal/application-import-from-export-to-web-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationToolBarComponent,
    ApplicationMenuBarComponent,
    ApplicationStatusBarComponent,
    ApplicationFrameworkComponent,
    ApplicationImportFromWebModalComponent,
    ApplicationImportFromDiskModalComponent,
    ApplicationImportFromExportToDiskModalComponent,
    ApplicationImportFromExportToWebModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
