import { useState, useEffect } from 'react'
import './StudentCreate.css'

function StudentCreate({ onAddStudent, onEdit, editStudent }) {
    const [formData, setformData] = useState({ name: '', age: '', course: '', city: '' })

    useEffect(() => {
        if (editStudent) setformData(editStudent)
        else setformData({ name: '', age: '', course: '', city: '' })
    }, [editStudent])

    function handleChange(e) {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (editStudent) {
            onEdit(formData)
        } else {
            onAddStudent({ ...formData, id: Date.now() })
        }
        setformData({ name: '', age: '', course: '', city: '' })
    }

    return (
        <div className="form-container">
            <h4>{editStudent ? 'Edit Student' : 'Create Student'}</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input name="age" value={formData.age} onChange={handleChange} placeholder="Enter age" />
                </div>
                <div className="form-group">
                    <label>Course</label>
                    <input name="course" value={formData.course} onChange={handleChange} placeholder="Enter course" />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
                </div>
                <button type="submit">{editStudent ? 'Update' : 'Submit'}</button>
            </form>
        </div>
    )
}

export default StudentCreate
