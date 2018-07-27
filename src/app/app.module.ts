import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrintGoComponent } from './print-go/print-go.component';
import { QzTrayService } from './qz-tray.service';

@NgModule({
  declarations: [
    AppComponent,
    PrintGoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    QzTrayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
