import { Employee, User } from '../definitions/employee';
import { createArray, randomItemList, randomNum, randomUser, randomJob } from '../functions/main';
import { Guid } from '../../entities/utils';
import { Job } from '../definitions/main';


const createDate = () => {
    let year = randomNum(2000, 2020),
        month: any = randomNum(0, 11),
        day: any = randomNum(1, 31);

    day = day < 9 ? '0' + day : day;
    month = month < 9 ? '0' + month : month;

    return `${year}-${month}-${day}`;
}

// create list employees
const example = createArray(10).map<Employee>(() => {
    const user: User = randomUser();
    const job: Job = randomJob();
    return {
        id: Guid.NewGuid(),
        name: user.name,
        age: randomNum(18, 80),
        country: null,
        dob: createDate(),
        hireDate: createDate(),
        job: job.name,
        area: job.area,
        status: false,
        toRate: randomNum(0, 100),
        userName: user.userName,
        gender: user.gender
    };
});

// example console.log(JSON.stringify(example, null, '\t'));





export const employees: Employee[] = [
    {
        id: "5e2e51b45383f873ff8e597c",
        name: "teresa carmen ramirez gonzalez",
        age: 42,
        country: null,
        dob: "2010-02-15",
        hireDate: "2017-02-08",
        job: "Sous Chef",
        area: 1,
        status: false,
        toRate: 14,
        userName: "teresa493",
        gender: 0
    },
    {
        id: "5e2e51b4792038a6a7bb25e3",
        name: "andrea leticia torres moreno",
        age: 51,
        country: null,
        dob: "2009-10-22",
        hireDate: "2009-05-12",
        job: "Sous Chef",
        area: 1,
        status: false,
        toRate: 26,
        userName: "andrea746",
        gender: 0
    },
    {
        id: "5e2e51b40c81cfee01bb0c38",
        name: "alejandra martha ramirez garcia",
        age: 73,
        country: null,
        dob: "2000-04-10",
        hireDate: "2003-08-14",
        job: "Chef",
        area: 1,
        status: false,
        toRate: 1,
        userName: "alejandra979",
        gender: 0
    },
    {
        id: "5e2e51b47574682f813fc341",
        name: "margarita rosa sanchez sanchez",
        age: 37,
        country: null,
        dob: "2019-00-23",
        hireDate: "2002-07-19",
        job: "Chef",
        area: 1,
        status: false,
        toRate: 90,
        userName: "margarita478",
        gender: 0
    },
    {
        id: "5e2e51b420aff6947d3dc584",
        name: "margarita irma martinez gonzalez",
        age: 55,
        country: null,
        dob: "2006-07-14",
        hireDate: "2005-03-19",
        job: "Dishwasher",
        area: 1,
        status: false,
        toRate: 73,
        userName: "margarita55",
        gender: 0
    },
    {
        id: "5e2e51b41f99ae101df90648",
        name: "francisca alicia martinez gonzalez",
        age: 62,
        country: null,
        dob: "2008-03-20",
        hireDate: "2013-00-15",
        job: "Chef",
        area: 1,
        status: false,
        toRate: 71,
        userName: "francisca246",
        gender: 0
    },
    {
        id: "5e2e51b40973fa59e4975c9a",
        name: "lucia alicia diaz moreno",
        age: 53,
        country: null,
        dob: "2019-10-23",
        hireDate: "2014-00-23",
        job: "Chef",
        area: 1,
        status: false,
        toRate: 15,
        userName: "lucia253",
        gender: 0
    },
    {
        id: "5e2e51b4a1e6be5600352710",
        name: "francisca andrea ochoa garcia",
        age: 73,
        country: null,
        dob: "2012-08-24",
        hireDate: "2010-06-07",
        job: "Dishwasher",
        area: 1,
        status: false,
        toRate: 69,
        userName: "francisca0",
        gender: 0
    },
    {
        id: "5e2e51b4ceb9ab84420308c5",
        name: "rosa alejandra rojas rojas",
        age: 27,
        country: null,
        dob: "2017-02-20",
        hireDate: "2001-9-29",
        job: "Chef",
        area: 1,
        status: false,
        toRate: 12,
        userName: "rosa471",
        gender: 0
    },
    {
        id: "5e2e51b41504234d8b8231d5",
        name: "patricia gloria moreno hernandez",
        age: 27,
        country: null,
        dob: "2017-10-30",
        hireDate: "2018-01-28",
        job: "Chef",
        area: 1,
        status: false,
        toRate: 53,
        userName: "patricia120",
        gender: 0
    }
];