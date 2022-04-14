import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // typado assetion
  //Basic Types
  let id: number = 5;
  // id = '5'
  let idu: string = "i5";
  // idu=4
  let isActive: boolean = true;
  let house: any = 5;

  let ids: number[] = [1, 2, 3, 4, 5];
  let nombres: string[] = ["Carlos", "Ulises", "Diego"];
  let anyArray: any[] = [2, 3, 4];

  //Tuple
  let persona: [number, string, boolean] = [1, "Carlos", true];
  // Tuple Array
  let personas: [number, string, boolean][] = [
    [1, "carlos", true],
    [2, "Ulises", false],
  ];
  //Union
  let pid: number | string;
  pid = "22";
  pid = 22;

  // Enum

  enum Direction {
    Up, // 0
    Down, //1
    Left, // 2
    Right, // 3
  }
  enum Select {
    Verdaro = "true", // 0
    Falso = "false", //1
  }

  // Objects
  // const user: { id: number; name: string } = { id: 1, name: "Carlos" };
  // Types 
  type User = {
    id: number,
    name: string
  }
  const user: User = { id: 1, name: "Carlos" };
  // funtions 
  function add(x: number, y: number): number {
    return x + y
  }
  const add2 = (x: number, y: number): number => { return x + y }

  add(2, 3)

  const sayHello = (message: string, name: string, age: string | number): void => {
    return console.log(`${message}  ${name} tengo ${age}`)
  }
  sayHello('Hola soy', 'Carlos', 26)
  sayHello('Hola soy', 'Carlos', '26')

  // Interfaces  
  interface UserInterface {
    id: string
    name: string;
    apellido?: string;
    age: number;
  }
  interface UserObjectArray {
    Users: UserInterface[]
  }

  const user2: UserInterface = {
    id: '23',
    age: 20,
    name: 'Carlos'
  }

  const Userss: UserObjectArray = {
    Users:[{id: '23',
    age: 20,
    name: 'Carlos'}]
  }
  const Userss2: UserInterface[] = [
    {id: '23',
    age: 20,
    name: 'Carlos'},
    {id: '23',
    age: 20,
    name: 'Diego'},
    {id: '23',
    age: 20,
    name: 'Ulises'},
  ]
const userCon = Userss2.map((item)=>console.log(item.name))

console.log(userCon)
interface MathFunction {
  (x:number,y:number):number
}

const add3:MathFunction = (x, y) => { return x + y }

interface ObjectFun {
  ejecutable:'false'|'true',
  functiod:(x:number,y:number)=>number
}

const nuevo:ObjectFun ={
  ejecutable:'true',
  functiod:add3
}

//Genericos 
// plceholder de typo que se va a definir en la ejucion 
// Componentes reutikizables 
// const getArray = <T>(items: T[]): T[] => {
//   return new Array().concat(items);
// };

// let numArray = getArray<number>([1,2,3,4])
// let numArray = StringArray<string>([1,2,3,4])

return (
  <span>test</span>
)
}
export default App;
