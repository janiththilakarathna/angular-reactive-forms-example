import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsExampleComponent} from './forms-example.component';
import {ReactiveExampleComponent} from './reactive-example/reactive-example.component';
import {TemplateExampleComponent} from './template-example/template-example.component';
import {FormsRoutingModule} from './forms-routing.module';

@NgModule({
  declarations: [FormsExampleComponent, ReactiveExampleComponent, TemplateExampleComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsExampleModule {
}
