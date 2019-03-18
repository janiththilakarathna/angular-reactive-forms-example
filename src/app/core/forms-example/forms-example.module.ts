import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsExampleComponent } from './forms-example.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';

@NgModule({
  declarations: [FormsExampleComponent, ReactiveExampleComponent, TemplateExampleComponent],
  imports: [
    CommonModule
  ]
})
export class FormsExampleModule { }
