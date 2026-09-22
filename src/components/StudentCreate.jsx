import { useState } from 'react'

function StudentCreate ({ onAddStudent }){
    const [formData,setformData]=useState({
        name:'',
        age:'',
        course:'',
        city:''
    })

    function handleChange(e){
        const {name,value} = e.target
        setformData({
            ...formData,[name]:value
        }
        );
    }
    function handleSubmit(e) {
        e.preventDefault()
        onAddStudent({ ...formData, id: Date.now() })
        setformData({ name: '', age: '', course: '', city: '' })
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <h4>Create Student</h4>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br/>
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" /><br/>
        <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" /><br/>
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" /><br/>
        <button type='submit'>Submit</button>
        </form>
      </div>
    );
}
export default StudentCreate