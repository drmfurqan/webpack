require("./main.scss");
require("./second.scss");

import "bulma";
import Hello from "./components/Hello";

let greeting = new Hello();

let numbers = [1, 3, 7, 9].map(x => x * 3);
console.log(numbers);
greeting.sayHello("Hammad");
