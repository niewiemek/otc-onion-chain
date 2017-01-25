import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { TraderComponent }   from './trader/trader.component';
import { TradeViewComponent }   from './trade-view/trade-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/trader/NodeA', pathMatch: 'full' },
  { path: 'trader/:node',  component: TraderComponent },
  { path: 'riskManager/:node', component: TradeViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}