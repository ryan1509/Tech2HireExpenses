import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateExpenseComponent} from '../expense/components/create-expense/create-expense.component';
import {ManageExpenseComponent} from '../expense/components/manage-expense/manage-expense.component';

const routes: Routes = [
{ path: 'create-expense', component: CreateExpenseComponent },
{ path: 'manage-expense', component: ManageExpenseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
