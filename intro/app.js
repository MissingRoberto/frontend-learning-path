import { sum } from './sum.js';
import { useState } from 'react';

export function App() {
    // 2. Deconstructuring
    // Example of destructuring assignment
    const sumInput = {
        a: 2,
        b: 3
    };

    const { a, b } = sumInput;
    // Example of function
    let result = sum(a, b);
    // Example of aliasing destructured variables
    const { a: firstNumber, b: secondNumber } = sumInput;
    result = sum(firstNumber, secondNumber);
    // Example of rest destructuring with rest
    const { a: first, ...rest } = sumInput;
    result = sum(first, rest.b);
    // End of destructuring examples


    // 1. Example of conditional rendering
    if (result < 1) {
        return null;
    }

    const biggerThanOne = result > 1;

    // 3. Spread operator example
    // 3.1 Spread operator with arrays
    const arrayA = [1, 2, 3];
    const arrayB = [4, 5, 6];
    const combinedArray = [...arrayA, ...arrayB];
    console.log('Combined Array:', combinedArray);

    // 3.2 Spread operator with objects
    const person = {
        name: 'John',
        age: 30
    };
    const student = {
        ...person,
        grade: 'A'
    };
    console.log('Student Object:', student);
    // 3.3. Cloning an object using the spread operator
    const clonedStudent = { ...student };
    clonedStudent.grade = 'B'; // Modifying the original object
    console.log('Unmodified Student Object:', student);
    console.log('Cloned Student Object:', clonedStudent);
    // End of spread operator examples

    // 4. Example of rendering a list of objects with map
    const students = [
        { name: 'Alice', grade: 'A' },
        { name: 'Bob', grade: 'B' },
        { name: 'Charlie', grade: 'C' }
    ];

    // 4. Example arrow functions
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(prev => prev + 1);
        console.log('Counter:', counter + 1);
    }

    // 8. Use of reduce
    const totalStudents = students.reduce((acc,current)=> {
        acc = acc + 1
        return acc
    }, 0)

    return (
        <div>
            {biggerThanOne && <p>Sum of 2 and 3 is: {result}</p>}
            {biggerThanOne ? <p>Result is greater than 1</p> : <p>Result is not greater than 1</p>}
            {/* Example rendering a list of object with map */}
            {students.map((student, index) => (
                <div key={index}>
                    <h2>Student {index + 1}</h2>
                    <p>Name: {student.name}</p>
                    <p>Grade: {student.grade}</p>
                </div>
            ))}
            {/* 5 Example of event handling */}
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
            {/* 6 Example of state management */}
            <button onClick={incrementCounter}>Increment Counter</button>
            <p>Counter: {counter}</p>
            {/* 7 Example of filter and map */}
            <h2>Students with grade A</h2>
            {students.filter(student => student.grade === 'A').map((student, index) => (
                <div key={index}>
                    <h2>Student {index + 1}</h2>
                    <p>Name: {student.name}</p>
                    <p>Grade: {student.grade}</p>
                </div>
            ))}
            <p>Total Students: {totalStudents}</p>
        </div>
    );
}