import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeRoutingModule } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    FormComponent,
    NavigationComponent
  ]
})
export class HomeModule { }
