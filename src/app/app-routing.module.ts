import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IncomeComponent} from './tab2/screens/income/income.component';
import {ConsumptionComponent} from './tab2/screens/consumption/consumption.component';
import {BalanceComponent} from './tab2/screens/balance/balance.component';
import {PaymentsComponent} from './tab2/screens/payments/payments.component';
import {ScheduledComponent} from './tab2/screens/scheduled/scheduled.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyHeaderComponent} from './components/my-header/my-header.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'income', component: IncomeComponent},
    { path: 'consumption', component: ConsumptionComponent},
    { path: 'balance', component: BalanceComponent},
    { path: 'payments', component: PaymentsComponent},
    { path: 'scheduled', component: ScheduledComponent},  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' },
  { path: 'developer', loadChildren: './pages/developer/developer.module#DeveloperPageModule' },

];
@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
    declarations: [
        IncomeComponent,
        ConsumptionComponent,
        BalanceComponent,
        PaymentsComponent,
        ScheduledComponent,
        MyHeaderComponent,
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
