//Clase: ventaja de programación orientada a objetos

//Objetos literales u opcion menos viable, toca reescribir mucho código. 

/* const luis1 = {
    name: 'Luis Herrera',
    userName: 'LuHer',
    points: 100,
    socialMedia: {
        twitter: 'luisherrerac',
        instagram: 'luisherrerac',
        facebook: undefined,
        
    },
    aprovedCourses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS'
    ],

    learningPhats: [
        {
            name: 'Escuela de Desarrollo Web',
            courses:[
                'Curso Definitivo de HTML y CSS',
                'Curso Práctico de HTML y CSS',
                'Curso de Responsive Design'
            ],
        },
        {
            name: 'Escuela de Video Juegos',
            courses:[
                'Curso de introducción a la Produccion de videojuegos',
                'Curso de Unreal Engine',
                'Curso de Unity 3D',
            ],
        },
    ],


}

const miguelit01 = {
    name: 'Miguelito',
    userName: 'miguelitofeliz',
    points: 100,
    socialMedia: {
        twitter: 'miguelitofeliz',
        instagram: 'miguelitofeliz',
        facebook: undefined,
        
    },
    aprovedCourses: [
        'Curso DataBusiness',
        'Curso DataViz'
    ],

    learningPhats: [
        {
            name: 'Escuela de Desarrollo Web',
            courses:[
                'Curso Definitivo de HTML y CSS',
                'Curso Práctico de HTML y CSS',
                'Curso de Responsive Design'
            ],
        },
        {
            name: 'Escuela de Data Science',
            courses:[
                'Curso DataBusiness',
                'Curso DataViz',
                'Curso de Tableau',
            ],
        },
    ],


} */

// objetos usando Prototipos con la sintaxis de Class

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }
    get name() {
        return this._name;
    }
    set name(nuevoNombresito) {
        if (nuevoNombresito === "Curso Malito de programación básica") {
            console.error('Web... no');
        } else {
            this._name =nuevoNombresito;      
        }
        
    }
}

const cursoProgBasica = new Course ({
    name: "Curso gratis de programación básica",

})
const cursoDefHtml = new Course ({
    name: "Curso definitivo de HTML y CSS",

})

const cursoPracHtml = new Course ({
    name: "Curso practico de HTML y CSS",

})
const cursoDtBusiness = new Course ({
    name: "Curso DataBusiness",

})
const cursoDtViz = new Course ({
    name: "Curso DataViz",

})
const cursoTableau = new Course ({
    name: "Curso de Tableau",

})

const cursoIntroVg = new Course ({
    name: "Curso de introducción a la Produccion de videojuegos",

})

const cursoUnreal = new Course ({
    name: "Curso de Unreal Engine",

})
const cursoUnity = new Course ({
    name: "Curso de Unity 3D",

})

class LearningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const dWeb = new LearningPaths( {
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDefHtml,
        cursoPracHtml,
    ],
})

const dSciences = new LearningPaths( {
    name: 'Escuela de Data Science',
    courses: [
        cursoDtBusiness,
        cursoDtViz,
        cursoTableau,
    ],
})

const vGames = new LearningPaths( {
    name: 'Escuela de Video Juegos',
    courses:[
        cursoIntroVg,
        cursoUnreal,
        cursoUnity,
    ],
})

class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningPaths = [],

    }) {
        this._name = name;
        this._email = email;
        this._userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }

    //metodo getter and setter, el gion bajo en el atribujo es para diferenciarlo del método. este ultimo devuelve el valor de los atributos
    get name(){
        return this._name;
    }
    set name (nuevoNombre){
        this._name = nuevoNombre;
    }
    get email(){
        return this._email;
    }
    set email (nuevoEmail){
        this._email = nuevoEmail;
    }
    get userName(){
        return this._userName;
    }
    set userName (nuevoUserName){
        this._userName = nuevoUserName;
    }
}

const luis2 = new Student( {
    name: 'Luis Herrera',
    userName: 'luher',
    email: 'luis1818.lh@gmail.com',
    twitter: 'luisherrerac',
    learningPaths: [
        dWeb, 
        dSciences
    ],

})

