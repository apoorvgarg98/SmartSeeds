import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { OfficerComponent } from './officer/officer.component';
import { LedgerComponent } from './farmer/ledger/ledger.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    OfficerComponent,
    LedgerComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
