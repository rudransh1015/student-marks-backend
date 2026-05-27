const data = require("./data.json")

// function to see all sunject and marks of a student

function Marks(studentName) {

    let i = null;

    data.studentMarks.forEach(function(student, index) {

        if (studentName === student.name) {
            i = index;
        }

    });

    if (i !== null) {
        console.log(data.studentMarks[i]);
        return data.studentMarks[i];
    }
    else {
        console.log(`student named ${studentName} not found`);
        return null;
    }

}

// function to get totalmarks of the student 
function TotalMarks(studentName) {

    let student = data.studentMarks.find(s => s.name === studentName)

        if (student.name === studentName) {

            let total = 0;

            for (let subject in student) {

                if (subject !== "name") {
                    total += student[subject];
                }

            }

            console.log(`Total Marks: ${total}`);
            return JSON.stringify(total)
            
        }
      
        

    };
    

// function to get the highest and lowest scoring subject
function HighestLowestMarks(studentName) {

    let found = false;
    let result = null;

    let student = data.studentMarks.find(s => s.name === studentName)
   

        if (student.name === studentName) {

            found = true;

            let highest = -Infinity;
            let lowest = Infinity;

            let highestSubject = "";
            let lowestSubject = "";

            for (let subject in student) {

                if (subject !== "name") {

                    if (student[subject] > highest) {
                        highest = student[subject];
                        highestSubject = subject;
                    }

                    if (student[subject] < lowest) {
                        lowest = student[subject];
                        lowestSubject = subject;
                    }

                }

            }

            console.log(
                `${studentName} scored highest in ${highestSubject} scoring ${highest}`
            );

            console.log(
                `${studentName} scored lowest in ${lowestSubject} scoring ${lowest}`
            );

            result = {
                highestMarks: highest,
                highestSubject: highestSubject,
                lowestMarks: lowest,
                lowestSubject: lowestSubject
            };

        }
        
      if (!found) {

         console.log(`student named ${studentName} not found`);

               return null;}

    

    return result; 

    };


// function to get avgMarks of the student 
function AverageMarks(studentName) {

    let found = false;
    console.log(studentName)

    let student = data.studentMarks.find(s => s.name === studentName)
              
        if (student.name === studentName) {

            found = true;

            let total = 0;
            let subjects = 0;

            for (let subject in student) {

                if (subject !== "name") {

                    total += student[subject];
                    subjects++;

                }

            }

            let average = total / subjects;

            console.log(
                `${studentName}'s average marks = ${average}`
            );

 return average;
        }
       
            


    if (!found) {
        console.log(`student named ${studentName} not found`);
        return null;
    }

}

// function to get percent
function Percentage(studentName) {

    let found = false;

    let student = data.studentMarks.find(s => s.name === studentName)
    

        if (student.name === studentName) {

            found = true;

            let total = 0;
            let subjects = 0;

            for (let subject in student) {

                if (subject !== "name") {

                    total += student[subject];
                    subjects++;

                }

            }

            let maximumMarks = subjects * 100;

            let percentage =
                (total / maximumMarks) * 100;

            console.log(
                `${studentName}'s percentage = ${percentage}%`
            );

            return percentage;

        }

     if (!found) {

        console.log(`student named ${studentName} not found`);

        return null;

     }

        
    };

   


module.exports = { 
                    Marks,
                    TotalMarks,
                    HighestLowestMarks,
                    AverageMarks,
                    Percentage
}

console.log(Array.isArray( data.studentMarks))