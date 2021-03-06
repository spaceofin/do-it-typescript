// import * as U from './utils/makeRandomNumber'

// export interface IPerson {
//     name: string
//     age: number
// }

// class Person implements IPerson {
//     constructor(public name: string, public age: number) {}
// }

// export const makePerson = (name: string,
//     age:number = U.makeRandomNumber()) => ({name, age})

import {makeRandomNumber} from './utils/makeRandomNumber'
import IPerson from './IPerson'

export default class Person implements IPerson {
    constructor(public name: string, public age: number = makeRandomNumber()) {}
}

export const makePerson = (name: string,
    age:number = makeRandomNumber()): IPerson => ({name, age})