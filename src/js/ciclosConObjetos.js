console.groupCollapsed("ForEach With Object")

const teamLeader = {
    id: "115551",
    identificationNumber: "1026155751",
    name: "Camilo",
    lastName: "Perez",
    birthDate: new Date("1998-04-23 14:42:30"),
    phoneNumber: "(+57)3015468063",
    email: "javier@gmail.com"
}

for (const key in teamLeader) {
    console.log(key);
}

console.log(Object.keys(teamLeader)); //Me forma una lista con todas las claves

Object.keys(teamLeader).forEach(key => {
    console.info(teamLeader[key])
});

Object.values(teamLeader).forEach(value => {
    console.info(value);
});

const listNumbers = [];
for (let i = 0; i <= 100; i++) {
    listNumbers.push(i)
}

console.log(listNumbers);

const listParNumbers1 = [];
for (let number of listNumbers) {
    if (number % 2 === 0) {
        console.info(number);
        listParNumbers1.push(number)
    }
}
console.log(listParNumbers1);

const numerosPares = listNumbers.filter(key => key % 2 == 0)
console.log(numerosPares);

const listParNumbers = listNumbers.filter(number => {
    if (number % 2 === 0) {
        console.info(number)
        return number
    }
})
console.log(listParNumbers);

console.groupEnd();

console.groupCollapsed("Ejemplo de lista empleados")

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

listaEmpleados.forEach(empleado => {
    console.log(`El empleado ${empleado.nombre} trabaja como ${empleado.puesto} y gana ${empleado.salario.toLocaleString('en-US', { 
        style: "currency", 
        currency: "USD" 
    })}`);
});

listaEmpleados.forEach(function (listaEmpleado) {
    console.info(`${listaEmpleado.nombre} tiene ${listaEmpleado.edad} años y  es ${listaEmpleado.puesto}`.toLowerCase())
});

listaEmpleados.forEach(function (listaEmpleado) {
    console.info(`${listaEmpleado.nombre} tiene ${listaEmpleado.edad} años y es ${listaEmpleado.puesto}`.toUpperCase())
});

console.groupEnd();