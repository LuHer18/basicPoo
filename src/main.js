const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: ['Curso Definitivo de Html y Css', 'Curso practico de Html y Css'],

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)

    }
};

// Hacer que natalia apruebe otro curso

/* natalia.cursosAprobados.push('Curso de Responsive Desing') */
function Student (name, age, cursosAProbados){
    this.name = name;
    this.age = age;
    this.cursosAProbados = cursosAProbados;
}

Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAProbados.push(nuevoCursito);
};

const juanita = new Student (
    'Juanita Alejandra',
    15,
    [
        'Curso de intruducción a los videojuegos', 'Creación de personajes'
    ],
)

// Prototipos con la sintaxis de clases

class Student2 {
    constructor ({
        name, 
        age, 
        cursosAProbados,
    })   {
        this.name = name;
        this.age = age;
        this.cursosAProbados = cursosAProbados;
    }
    aprobarCurso (nuevoCursito) {
        this.cursosAProbados.push(nuevoCursito); 
    }
}

const miguelito = new Student2({
    name:'Miguel',
    age: 28,
    cursosAProbados: [
        'Curso de Ánalisis de Negocios para ciencia de Datos',
        'Curso de principios de visualización de Datos para BI'
    ]
}
);
