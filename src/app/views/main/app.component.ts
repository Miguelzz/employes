import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../controllers/main.actions';
import { Employee } from '../../models/definitions/employee';

import { HttpClient } from '@angular/common/http';
import { Item, Country } from '../../models/definitions/main';
import { Guid } from '../../entities/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  view: string;
  search$: Observable<string>;

  constructor(private http: HttpClient, private store: Store<{
    view: string,
    search: string,
    employees: Employee[],
    employee: Employee
  }>) {
    this.store.pipe(select('view')).subscribe(x => this.view = x);
  }

  searchEmployee(search: string) {
    this.store.dispatch(actions.searchEmployee({ search }));
  }


  deleteEmployee(index: number) { this.store.dispatch(actions.deleteEmployee({ index })); }

  ngOnInit(): void {
    this.search$ = this.store.pipe(select('search'));
    this.search$.subscribe(x => console.log(x));


    this.http.get<Country[]>('https://restcountries.eu/rest/v2/all')
      .subscribe(countries =>
        this.store.dispatch(actions.addCountries({
          countries: countries.map<Country>(x => ({ id: Guid.NewGuid(), name: x.name }))
        })
        )
      );
  }
}
