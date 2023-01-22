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
