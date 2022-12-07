import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RemunerationsComponent } from './pages/remunerations/remunerations.component';
import { TaxesComponent } from './pages/taxes/taxes.component';
import { ManagementComponent } from './pages/management/management.component';
import { BusinessComponent } from './pages/business/business.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './layout/form/form.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

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
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
