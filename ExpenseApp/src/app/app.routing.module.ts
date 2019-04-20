import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ExpenseRoutingModule} from '../expense/expense-routing.module';


const routes:Routes=[{
    path:'tech2hireexpense',loadChildren:'../expense/expense.module#ExpenseModule'
}]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
