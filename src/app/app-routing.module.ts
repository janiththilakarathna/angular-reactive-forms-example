import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CoreComponent} from './core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent
  }, {
    path: '**',
    component: CoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
