interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));


export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


export class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


  workOnHomework(): string {
    return "Currently working";
  }


  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass("Amaal", "Otaibi");
console.log(student.displayName()); 
console.log(student.workOnHomework());

