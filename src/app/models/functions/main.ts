import { User, Gender, Area } from '../definitions/employee';
import { jobKitchen, jobServices } from '../implementations/lists';
import { Job } from '../definitions/main';

export const createArray = (length: number) => {
    const slave = [];
    for (let i = 0; i < length; i++) {
        slave.push(i);
    }
    return slave;
};


export const randomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const randomItemList = (list: string[]): string => {
    return list[randomNum(0, list.length)];
};


export const randomUser = (): User => {
    // tslint:disable-next-line:max-line-length
    const listFemales: string[] = ['maria', 'juana', 'margarita', 'josefina', 'veronica', 'leticia', 'rosa', 'francisca', 'teresa', 'alicia', 'alejandra', 'martha', 'yolanda', 'patricia', 'elizabeth', 'gloria', 'gabriela', 'salvador', 'silvia', 'antonia', 'araceli', 'andrea', 'isabel', 'irma', 'carmen', 'lucia', 'adriana'];

    // tslint:disable-next-line:max-line-length
    const listMales: string[] = ['juan', 'jose', 'francisco', 'guadalupe', 'antonio', 'jesus', 'pedro', 'alejandro', 'manuel', 'roberto', 'fernando', 'daniel', 'carlos', 'jorge', 'ricardo', 'miguel', 'eduardo', 'javier', 'rafael', 'martin', 'raul', 'david', 'arturo', 'enrique', 'gerardo', 'mario', 'alfredo', 'sergio', 'alberto', 'luis', 'armando', 'santiago', 'angel', 'gabriel', 'andres', 'oscar', 'guillermo', 'ramon', 'pablo', 'ruben', 'felipe', 'jaime', 'diego', 'agustín', 'gustavo'];

    // tslint:disable-next-line:max-line-length
    const listLastNames: string[] = ['rodriguez', 'martinez', 'gonzalez', 'perez', 'garcia', 'lopez', 'hernandez', 'gomez', 'sanchez', 'diaz', 'torres', 'ramirez', 'rojas', 'jimenez', 'moreno', 'ochoa'];

    const lastNames = `${listLastNames[randomNum(0, listLastNames.length)]} ${listLastNames[randomNum(0, listLastNames.length)]}`;

    if (!randomNum(0, 1)) {
        const name1 = listFemales[randomNum(0, listFemales.length)];
        const name2 = listFemales[randomNum(0, listFemales.length)];
        return {
            gender: Gender.female,
            name: `${name1} ${name2} ${lastNames}`,
            userName: `${name}${randomNum(0, 999)}`
        };
    } else {
        const name1 = listMales[randomNum(0, listMales.length)];
        const name2 = listMales[randomNum(0, listMales.length)];
        return {
            gender: Gender.female,
            name: `${name1} ${name2} ${lastNames}`,
            userName: `${name}${randomNum(0, 999)}`
        };
    }
};

export const randomJob = (): Job => {

    if (!randomNum(0, 1)) {
        return jobKitchen[randomNum(0, jobKitchen.length)];
    } else {
        return jobServices[randomNum(0, jobServices.length)];;
    }
};

