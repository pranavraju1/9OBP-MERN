let students =[
    {
       name:"Nilay",
       marks:5
    },
    {
        name:"Atharva",
        marks:9
    },{
        name:"Prathmesh",
        marks:8
    },{
        name:"Gagan",
        marks:10
    }
]

let marks=0;
let name;

const getTopper=()=>{
    for(let student of students){
         if(student.marks>marks){
            marks=student.marks;
            name=student.name;
         }
    }

    return {marks,name};
}


export {students};

export default getTopper;

