import { Component, OnInit } from '@angular/core';
import * as actions from '../../controllers/main.actions';
import { Store, } from '@ngrx/store';
import { Employee, Area } from '../../models/definitions/employee';
import { Country, Jobs } from '../../models/definitions/main';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  kitchen: Area;
  service: Area;


  employee: Employee;
  countries: Country[];
  jobs: Jobs;

  constructor(private store: Store<{ jobs: Jobs, countries: Country[], view: string, employees: Employee[], employee: Employee }>) {
    this.store.dispatch(actions.viewUi({ view: 'show' }));
  }


  saveEmployee() {
    this.store.dispatch(actions.saveEmployee({ employee: this.employee }));
  }


  async ngOnInit() {

    this.kitchen = Area.kitchen;
    this.service = Area.service;

    this.store.select('countries').subscribe(x => this.countries = x);
    this.store.select('jobs').subscribe(x => this.jobs = x);


    const id = window.location.pathname.match(/\w+$/)[0];

    this.store.select('employees').subscribe(x => {
      const employee = x.find(e => e.id === id);
      this.employee = { ...employee };
    })

    console.info(id);
    //
  }

}
