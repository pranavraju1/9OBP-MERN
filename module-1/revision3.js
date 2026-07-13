const employees =[
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "department": "Engineering",
        "subDep":"Mechanical"
    },
    {
        "firstName": "Emily",
        "lastName": "Smith",
        "email": "emily.smith@example.com",
        "department": "Engineering",
        "subDep":"Mechanical"
    },
   {
        "firstName": "Tarun",
        "lastName": "Pandey",
        "email": "john.doe@example.com",
        "department": "Engineering",
        "subDep":"Civil"
    },
    {
        "firstName": "Akshay",
        "lastName": "Smith",
        "email": "emily.smith@example.com",
        "department": "Engineering",
        "subDep":"Civil"
    },
    {
        "firstName": "Michael",
        "lastName": "Johnson",
        "email": "michael.johnson@example.com",
        "department": "Finance",
        "subDep":"derivativeMarket"
    },
    {
        "firstName": "Sophia",
        "lastName": "Williams",
        "email": "sophia.williams@example.com",
        "department": "Finance",
        "subDep":"primaryMarket"
    },
    {
        "firstName": "David",
        "lastName": "Brown",
        "email": "david.brown@example.com",
        "department": "Sales",
        "subDep":"preSales"
        
    }
]



let obj = {} 

for(let employee of employees){
    let emp = employee.department
    // console.log(emp)
    
    if(!obj[emp]){
        obj[emp] = []
    }

    obj[emp].push(employee);
}
console.log(obj);











