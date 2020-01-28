import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/definitions/employee';
import { Item, Country } from '../models/definitions/main';




export const addJobs = createAction('addJobs');

export const addCountries = createAction('addCountries', props<{ countries: Country[] }>());

export const viewUi = createAction('viewUi', props<{ view: string }>());


export const editEmployee = createAction('employee', props<{ employee: Employee }>());


export const saveEmployee = createAction('employee', props<{ employee: Employee }>());

export const addEmployee = createAction('addEmployee');
export const deleteEmployee = createAction('deleteEmployee', props<{ index: number }>());
export const searchEmployee = createAction('searchEmployee', props<{ search: string }>());

