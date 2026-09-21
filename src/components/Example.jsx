import {useState} from 'react';

function Example () {
    const [students, setStudents] = useState({
        name: "",
        age: "",
        city: "",
        Course: "",
        status: true
    })
    function handleSubmit(e) {
        e.preventDefault();
        console.log(students);
    }

    return(
          <form onSubmit ={handleSubmit}>
            <h1>Student Form</h1>
            <input 
            type = "text"
            placeholder='Name'
            value = {students.name}
            onChange = {(e) => setStudents({...students,
                name: e.target.value})}
            /><br></br>
            <input type = "number"
            placeholder='Age'
            value = {students.age}
            onChange = {(e) => setStudents({...students,
                age: e.target.value})}
            /><br></br>
            <input type = "text"
            placeholder='city'
            value = {students.city}
            onChange = {(e) => setStudents({...students,
                city: e.target.value})}
                
            /><br></br>
            <input
            type = "text"
            placeholder='Course'
            value = {students.Course}
            onChange = {(e) => setStudents({...students,
                Course: e.target.value})}
            /><br></br>
            <input type = "checkbox"
            value = {students.status}
            onChange = {(e) => setStudents({...students,
                status: e.target.checked})}/>
            
            <button type='submit'>Submit</button>
          </form>
    )
}

export default Example 