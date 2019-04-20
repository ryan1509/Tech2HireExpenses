import { Injectable } from '@angular/core';
import {APP} from '../constants';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpenseServiceService {

  constructor(private http:HttpClient) { 

  }

  getYear(){
    return this.http.get(APP.REST_URL + '/Expensemsts/getYear');
  }

  getMonth(){
    return this.http.get(APP.REST_URL + '/Expensemsts/getMonth');
  }

  getExpenseTypes(){
    return this.http.get(APP.REST_URL + '/Expensemsts/getExpenseTypes');
  }

  saveExpenses(formObject){
    let postObject={
      yearid:formObject['expenseyear'],
      monthid:formObject['expensemonth'],
      expensetypeid:formObject['expensetypeid'],
      expensename:formObject['expensename']
    }
    return this.http.post(APP.REST_URL + '/UserExpenses/saveExpenses',formObject);
  }

  getUserExpenses(){
    return this.http.get(APP.REST_URL + '/UserExpenses/getUserExpenses');
  }

}
