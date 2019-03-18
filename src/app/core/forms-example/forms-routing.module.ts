import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsExampleComponent} from './forms-example.component';
import {ReactiveExampleComponent} from './reactive-example/reactive-example.component';
import {TemplateExampleComponent} from './template-example/template-example.component';

const formsRoutes: Routes = [
  {
    path: '',
    component: FormsExampleComponent,
    children: [
      {
        path: '/reactive',
        component: ReactiveExampleComponent
      },
      {
        path: '/template',
        component: TemplateExampleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
