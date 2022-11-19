import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemunerationsComponent } from './pages/remunerations/remunerations.component';
import { TaxesComponent } from './pages/taxes/taxes.component';
import { ManagementComponent } from './pages/management/management.component';
import { BusinessComponent } from './pages/business/business.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RemunerationsComponent,
    TaxesComponent,
    ManagementComponent,
    BusinessComponent,
    AccountingComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
