import { Guid } from '../../entities/utils';

export interface User {
    name: string;
    gender: Gender;
    userName: string;
}



export const enum Gender { female, male }
export const enum Area { service, kitchen }

export interface Employee {
    id: Guid;
    name: string;
    age: number;
    userName: string;
    hireDate: string;
    dob: string;
    country: string;
    status: boolean;
    job: string;
    area: Area;
    toRate: number;
    gender: Gender;
}
