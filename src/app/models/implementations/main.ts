import { ui } from './ui';
import { jobKitchen, jobServices } from './lists';
import { employees } from './employees';

import { DB } from '../definitions/main';
import { Area } from '../definitions/employee';






export const db: DB = {
    ui,
    employee: null,
    employees,
    countries: null,
    jobs: {
        [Area.kitchen]: jobKitchen,
        [Area.service]: jobServices,
    },

};
