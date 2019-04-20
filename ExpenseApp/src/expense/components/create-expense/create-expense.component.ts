import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ExpenseServiceService} from '../../expense-service.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css'],
  providers:[ExpenseServiceService]
})
export class CreateExpenseComponent implements OnInit {
  private expenseForm:FormGroup;
  private years;
  private months;
  private expenseTypes;
  private expenses;

  constructor(private fb:FormBuilder,private expenseService:ExpenseServiceService) {

   }

  ngOnInit() {
   this.expenseForm= this.fb.group({
      'expenseyear':['',Validators.required],
      'expensemonth':['',Validators.required],
      'expensetype':['',Validators.required],
      'expensename':['',Validators.required],
      'amount':['',Validators.required],
    })

    
    this.getYear();
    this.getMonth();
    this.getExpenseType();
  


  }

  getYear(){
    //get year
    this.expenseService.getYear().subscribe(year=>{
      this.years=year['response'];
    })
  }

  getMonth(){
    //get month

    this.expenseService.getMonth().subscribe(month=>{
      this.months=month['response'];
    })
  }

  getExpenseType(){
     //get expense types

      this.expenseService.getExpenseTypes().subscribe(exptype=>{
        this.expenseTypes=exptype['response'];
      })
  }

  saveExpense(){
    this.expenseService.saveExpenses(this.expenseForm.value).subscribe(status=>{
      console.log(status);
     this.getExpenses();
    });
  }

  getExpenses(){
    this.expenseService.getUserExpenses().subscribe(expenseObj=>{
      console.log("==expense object==",expenseObj);
      this.expenses=expenseObj;
    });
  }

    

      

}
