export interface Employee {
    name: string;
    value?: number;     // Con ? es opcional
    checked?: boolean;  // Con ? es opcional
}

// employee1: Employee = { name: 'Jhon' };
// employee2: Employee = { value: 10, name: 'Jhon' };  // indiferente al orden
// employee3: Employee = { name: 'JBB', checked: true };
