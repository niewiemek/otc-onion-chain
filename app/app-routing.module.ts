import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TraderComponent }   from './trader/trader.component';

const routes: Routes = [
  { path: '', redirectTo: '/tradingA', pathMatch: 'full' },
  { path: 'tradingA',  component: TraderComponent },
  { path: 'tradingB',  component: TraderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}