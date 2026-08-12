// create an array to store the student name in a array
let studentNames: string[]= ["Suresh", "Mahesh", "Naresh"];
// create an array to store marks in an array
let marks: number[]= [75, 80, 82];
//varaible to store the total marks
let totalmarks: number = 0;
//create a new array to store the updated marks 
let updatedmarks: number []= [];
//print heading for updating marks 
console.log("updated marks:");
//loop function for updating the marks
for (let i :number = 0; i<marks.length; i++) {
    updatedmarks[i]=marks[i]! +10 ;
    totalmarks += updatedmarks[i]!;
//print the studentnames with updated marks
    console.log(`${studentNames[i]}: ${updatedmarks[i]}`);
}
   
    //calculate the average marks    
        let average= totalmarks/marks.length;
    //print the rounded to 1 decimal value    
        console.log(`Average Marks: ${average}`);
        











