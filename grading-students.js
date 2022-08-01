// Every student receives a grade in the inclusive range from 0 to 100. Any grade less than 40 is a failing grade.
// Rules to round each student's grade: If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5. If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
    const roundedGrades = grades.map((grade => {
        let roundedGrade = grade
        
        if(grade>=38){
            while (roundedGrade%5!==0){
                roundedGrade++
            }
            if (roundedGrade-grade<3) {
                return roundedGrade
            }
        }
        return grade
    }))
    
    return roundedGrades
}

console.log(gradingStudents([73, 67, 38, 33]))