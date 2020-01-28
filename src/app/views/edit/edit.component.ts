import { Component, OnInit } from '@angular/core';
import * as actions from '../../controllers/main.actions';
import { Store, } from '@ngrx/store';
import { Employee, Area } from '../../models/definitions/employee';
import { Country, Jobs } from '../../models/definitions/main';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  kitchen: Area;
  service: Area;


  employee: Employee;
  countries: Country[];
  jobs: Jobs;


  employeeForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(50)]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(80)]),
    userName: new FormControl(null, [Validators.required]),
    hireDate: new FormControl(null, [Validators.required]),
    dob: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    job: new FormControl(null, [Validators.required]),
    area: new FormControl(null, [Validators.required]),
    toRate: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  });


  constructor(private router: Router, private store: Store<{ jobs: Jobs, countries: Country[], view: string, employees: Employee[], employee: Employee }>) {
    this.store.dispatch(actions.viewUi({ view: 'edit' }));
  }

  saveEmployee() {
    console.warn(this.employeeForm.value);
    this.store.dispatch(actions.saveEmployee({ employee: this.employeeForm.value }));

    this.router.navigateByUrl('').then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }




  async ngOnInit() {

    this.kitchen = Area.kitchen;
    this.service = Area.service;

    this.store.select('countries').subscribe(x => this.countries = x);
    this.store.select('jobs').subscribe(x => this.jobs = x);


    const id = window.location.pathname.match(/\w+$/)[0];

    this.store.select('employees').subscribe(x => {
      const employee = x.find(e => e.id === id);

      //this.employeeForm.setValue({ name: employee.name });
      this.employee = { ...employee };

      this.employeeForm.patchValue({ ...employee });
    })

    console.info(id);
    //
  }

}
