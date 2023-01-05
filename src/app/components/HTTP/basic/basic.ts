let sayHi   : string  = 'Hi!'
let isHuman : boolean = false
let age     : number  = 25

/*-----------------------------------------------------------*/
let numbers : number[]               = [1,2,3,4,5]
let letters : Array<string>          = ['a','b','c']
let all     : Array<string | number> = ['a','b','c',1,2]
let multi   : [[any]]                = [[all]]

/*-----------------------------------------------------------*/
function sayMyName(name: string){
    console.log('Your name is: ' + name)
}
sayMyName(42)
sayMyName('Nicolas')

function getNumber(): number{
    return 12
}

function getName(){
    return 'Hola'
}

/*-----------------------------------------------------------*/
const names = ["Amaterasu", "Athena", "Artio"]

names.forEach( function (n){
    console.log(n.toLowerCase())
})

names.forEach( (n) =>{
    console.log(n.toLowerCase())
})

/*-----------------------------------------------------------*/
function map(gps : {x:number, y:number, z?:number}){
    console.log('Coords: X: ' + gps.x + ' - Y: ' + gps.y)
}

function unionTypes(id: number | string){
    console.log(id)
}

/*-----------------------------------------------------------*/
type gps = {
    x: number,
    y: number
}

function printGPS(g: gps){
    console.log('Coords: X: ' + g.x + ' - Y: ' + g.y)
}

/*-----------------------------------------------------------*/
interface test{
    id: number,
    loc: string,
    user: number | string,
    status: boolean
    desc: string
}

/*-----------------------------------------------------------*/
function yeah(x: string | null){
    if(x !== null){
        console.log('Ola k ase ' + x)
    }
}

function nonNull(x?: number | null){
    console.log(x!.toFixed())
}

export class user{
    
    constructor(){}
}