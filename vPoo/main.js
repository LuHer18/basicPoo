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
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
        'Curso de Responsive Design'
    ],
})

const dSciences = new LearningPaths( {
    name: 'Escuela de Data Science',
    courses: [
        'Curso DataBusiness',
        'Curso DataViz',
        'Curso de Tableau',
    ],
})

const vGames = new LearningPaths( {
    name: 'Escuela de Video Juegos',
    courses:[
        'Curso de introducción a la Produccion de videojuegos',
        'Curso de Unreal Engine',
        'Curso de Unity 3D',
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
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }
}

const luis2 = new Student( {
    name: 'Luis Herrera',
    userName: 'luher',
    email: 'luis1818.lh@gmail.com',
    twitter: 'luisherrerac',
    learningPaths: [vGames, dSciences],

})

