import { UI } from './ui';
import { Employee, Area } from './employee';
import { Guid } from '../../entities/utils';



export interface Country {
    id: Guid;
    name: string;
}

export interface Jobs {
    [Area.kitchen]: Job[],
    [Area.service]: Job[],
}


export interface Job {
    id: Guid;
    area: Area,
    name: string;
}

export interface Item<T> {
    id: Guid;
    value: T;
}

export interface DB {
    ui: UI;
    employee: Employee;
    employees: Employee[];
    countries: Country[];
    jobs: Jobs;
}
