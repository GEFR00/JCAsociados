import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { RemunerationsComponent } from './pages/remunerations/remunerations.component';
import { BusinessComponent } from './pages/business/business.component';
import { TaxesComponent } from './pages/taxes/taxes.component';
import { ManagementComponent } from './pages/management/management.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contabilidad-pymes',
    component: AccountingComponent
  },
  {
    path: 'remuneraciones',
    component: RemunerationsComponent
  },
  {
    path: 'creacion-empresas',
    component: BusinessComponent
  },
  {
    path: 'impuestos',
    component: TaxesComponent
  },
  {
    path: 'control-gestion',
    component: ManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
