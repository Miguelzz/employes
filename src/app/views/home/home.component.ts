import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../controllers/main.actions';
import { Employee } from '../../models/definitions/employee';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search$: Observable<string>;
  employees$: Observable<Employee[]>;
  employees: Employee[] = [];

  filterEmployees: Employee[] = [];

  constructor(private store: Store<{ view: string, search: string, employees: Employee[], employee: Employee }>) {
    this.store.dispatch(actions.viewUi({ view: 'home' }));
  }





  addEmployee() { this.store.dispatch(actions.addEmployee()); }

  deleteEmployee(index: number) {
    this.store.dispatch(actions.deleteEmployee({ index }));
  }








  orderColum(colum: string) {
    this.filterEmployees = this.orderList(this.filterEmployees, colum);
  }


  editRow(employee: Employee) {

  }

  showRow(employee: Employee) {
    console.log('tag', this.filterEmployees.findIndex(x => employee.id === x.id));
  }

  deleteRow(employee: Employee) {
    const index = this.filterEmployees.findIndex(x => employee.id === x.id);
    this.filterEmployees.splice(index, 1);

    // const index2 = this.employees.findIndex(x => employee.id === x.id);
    // this.employees.splice(index2, 1);
  }


  orderList(list: Employee[], colum: string): Employee[] {

    switch (colum) {
      case 'name':
        return list.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
      case 'age':
        return list.sort((a, b) => a.age - b.age);
      case 'user':
        return list.sort((a, b) => {
          if (a.userName < b.userName) { return -1; }
          if (a.userName > b.userName) { return 1; }
          return 0;
        });
      case 'date':
        return list.sort((a, b) => {
          if (a.hireDate < b.hireDate) { return -1; }
          if (a.hireDate > b.hireDate) { return 1; }
          return 0;
        });
    }

  }


  ngOnInit() {

    this.employees$ = this.store.pipe(select('employees'));
    this.employees$.subscribe(x => this.filterEmployees = this.employees = x);

    this.search$ = this.store.pipe(select('search'));
    this.search$.subscribe(s => this.filterEmployees = this.employees.filter(x => new RegExp(`${s}`, 'i').test(x.name)));

  }


}
