import react from 'react'
function StudentList ({ students }){
    return(
   <div>
   {students.map((student) => (
    <div key={student.id}>
        <h3>{student.name}</h3>
        <p>{student.age}</p>
        <p>{student.course}</p>
        <p>{student.city}</p>
    </div>
))}
   </div>
    )
}
export default StudentList