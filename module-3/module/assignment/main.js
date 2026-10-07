import {students} from './student.js'
import getTopper from './student.js';

console.log(students);

let {name,marks}=getTopper();

console.log(name+"->"+marks);