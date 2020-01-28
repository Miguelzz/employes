import { createReducer, on } from '@ngrx/store';

import { db } from '../models/implementations/main';

import * as states from './main.actions';
import { Guid } from '../entities/utils';


export function jobsReducer(state, action) {
    return createReducer(
        db.jobs,
        on(states.addJobs, s => s)
    )(state, action);
}

export function countriesReducer(state, action) {
    return createReducer(
        db.countries,
        on(states.addCountries, (s, { countries }) => countries)
    )(state, action);
}


export function employeeReducer(state, action) {
    return createReducer(
        db.employee,
        on(states.editEmployee, (s, { employee }) => employee)
    )(state, action);
}

export function viewReducer(state, action) {
    return createReducer(
        db.ui.view,
        on(states.viewUi, (x, { view }) => view)
    )(state, action);
}


export function searchReducer(state, action) {
    return createReducer(
        db.ui.search,
        on(states.searchEmployee, (_, { search }) => search)
    )(state, action);
}

export function employeesReducer(state, action) {
    return createReducer(
        db.employees,
        on(states.saveEmployee, (s, { employee }) => {
            const index = s.findIndex(e => e.id === employee.id);
            s[index] = employee;
            return s;
        }),
        on(states.deleteEmployee, (s, { index }) => {
            const array = [...s];
            array.splice(index, 1);
            return array;
        }),
        on(states.addEmployee, x => [{
            id: Guid.NewGuid(), name: 'NUEVO', age: 18,
            country: null, dob: '', hireDate: '',
            job: null, area: null, status: false, toRate: 0,
            userName: 'nuevo', gender: null
        }].concat(state))
    )(state, action);
}

