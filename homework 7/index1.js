/*
Написать две функции:

    первая выведет список студентов и средний бал каждого
    вторая выведен средний бал по всем студентам*/

const students = [
    {
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
    },
    {
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
    },
    {
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
    }
]	

function getAverageStudentMark(student) {
    return student.marks.reduce((accum, current) => accum + current,0) / student.marks.length;
}

function getAverageMarkGroup() {
	const sumOfAverageMarks = students.reduce((accum, current) => {
        return accum + getAverageStudentMark(current);
    },0);
	const averageMark = (sumOfAverageMarks / students.length).toFixed(0);
    return averageMark;
}

function showResults(students) {
	for (const student of students) {
		const resultMessageAvgMark = (`${student.name} average mark:${getAverageStudentMark(student).toFixed(0)}`);
            console.log (resultMessageAvgMark);
            console.log(`Average group mark: ${getAverageMarkGroup()}`);
	}	
}

showResults(students);
