const person: string = 'hola'

//Type Alias

type HeroId = `${string}-${string}-${string}-${string}`

type Hero = { //Los tipos que nosotros creamos deben ser escritos con pascalCase
    id?: HeroId
    name:string
    age: number
    isActive?: boolean // el ? define que es opcional
}


let hero: Hero = {
    name : 'thor',
    age: 1500
}

function createHero(hero: Hero): Hero{
    const {name, age} = hero //extraemos name y age de hero
    return{
        id: '123-123-123-123',
        name,
        age,
        isActive: true
    }
}

const thor = createHero({name: 'thor', age: 1500})//Le paso un objeto y le defino sus propiedades

console.log(thor.isActive)


thor.id?.toString() // Si tiene una id se ejecuta, sino no

// template union tyes

type HexaDecimalColor = `#${string}`

const color: HexaDecimalColor = `#0033ff` //Tiene que tener el hash si o si

