let studentsDb = [
    {
        name: "Sule",
        id: 1,
        age: 22,
        gender: "m",
        course: "maths"
    },
    {
        name: "Chidinma",
        id: 2,
        age: 26,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Janet",
        id: 3,
        age: 24,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Ojetola",
        id: 4,
        age: 19,
        gender: "m",
        course: "psychology"
    }
]

let maths = []
let psychology = []
let underAge = []

function alloDept(arrStu){
    for (let student in arrStu){
        if (arrStu[student].course === "maths"){
            maths.push(arrStu[student])
        } else if(arrStu[student].course === "psychology") {
            psychology.push(arrStu[student])
        }
    }
    console.log("Maths Department:", maths);
    console.log("Psychology Department:", psychology);
}
alloDept(studentsDb)  

 function addStudent(name, age, gender, course){
    let studentId = studentsDb.length + 1;
    let student = {
        name: name,
        id: studentId,
        age: age,
        gender: gender,
        course: course,
    }
    studentsDb.push(student)
    console.log(studentsDb)
 }
 console.log(studentsDb)
 addStudent("Dakshak", 20, "m", "engineering")

 function updateStudentData(studentId){
    for( student in studentsDb){
        if(studentsDb[student].id === studentId){
            studentsDb[student].course =  "social studies"
        }
    }
    console.log(studentsDb)
 }
 updateStudentData(5)

 function deleteStudentById(studentId){
    studentsDb.forEach((student)=> {
        if(student.id != studentId){
            console.log(student)
        }
    })
 }
  console.log(studentsDb)
 deleteStudentById(1)

 
