import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'base', loadChildren: () => import('./base/base.module').then(m => m.BaseModule) },
  { path: 'new', loadChildren: () => import('./new/new.module').then(m => m.NewModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
