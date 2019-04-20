import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import {CreateExpenseComponent} from './components/create-expense/create-expense.component';
import {ManageExpenseComponent} from './components/manage-expense/manage-expense.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CreateExpenseComponent,ManageExpenseComponent]
})
export class ExpenseModule { }
