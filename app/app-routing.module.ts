import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { TraderComponent }   from './trader/trader.component';

const routes: Routes = [
  { path: '', redirectTo: '/trader/NodeA', pathMatch: 'full' },
  { path: 'trader/:node',  component: TraderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}