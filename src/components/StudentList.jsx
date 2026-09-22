import './StudentList.css'

function StudentList({ students, onDelete, onEditClick }) {
    return (
        <div className="table-container">
            <h4>Student List</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.course}</td>
                            <td>{student.city}</td>
                            <td>
                                <button className="edit-btn" onClick={() => onEditClick(student)}>Edit</button>
                                <button className="delete-btn" onClick={() => onDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList
