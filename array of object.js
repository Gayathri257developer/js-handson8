let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }]
 
 
//Q1. We are interested in retrieving only the name of the students and all the names should be in caps.
//Output : ['JOHN', 'BABA', 'YAGA', 'WICK'];

let newName = [];
let S = studentRecords.length;
for (let i = 0; i < S; i++)
{
    newName.push(studentRecords[i].name.toUpperCase());
}
console.log(newName);


//Q2.Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let studentScore = studentRecords.filter(item => item.marks > 50);
console.log(studentScore);


//Q3. Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let studentScoreId = studentRecords.filter(item => item.marks > 50 && item.id > 120);
console.log(studentScoreId);

//Q4. Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalSumMarks = studentRecords.reduce( ((acc,curr) => acc+curr.marks),0)
console.log(totalSumMarks);

//Q5. This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentNames = studentRecords.filter(item => item.marks > 50).map(item => item.name);
console.log(studentNames);


//Q6. This time we are required to print the sum of marks of the students with id > 120.

let sumMarks = studentRecords.filter(item => item.id > 120).reduce( ((acc,curr) => acc+curr.marks),0);
console.log(sumMarks);


//Q7. This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let studentMarks = studentRecords.map(function(item){ 
    if(item.marks < 50)
    {
        item.marks += 15;
    }
    return item;}).filter(item => item.marks > 50).reduce((acc,curr) => acc+curr.marks,0);

console.log(studentMarks);


//Q8. Create 6 objects,each object will have name, class, roll no as properties. Store these objects in an array of objects.

function Student(studentName, studentClass, studentRollno)
{
    this.studentName = studentName,
    this.studentClass = studentClass,
    this.studentRollno = studentRollno
}

const student1 = new Student('Gayathri',11,23);
console.log(student1);

const student2 = new Student('Iswarya',12,21);
console.log(student2);

const student3 = new Student('Sindhu',10,20);
console.log(student3);

const student4 = new Student('Arshiya',12,22);
console.log(student4);

const student5 = new Student('Ellen',11,22);
console.log(student5);

const student6 = new Student('Abhishek',11,20);
console.log(student6);
