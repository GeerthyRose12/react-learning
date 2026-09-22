import "./App.css";
import { useState } from "react";

import StudentList from "./components/StudentList";
import StudentCreate from "./components/StudentCreate";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null)

  function handleAddStudents(student) {
    setStudents([...students, student]);
  }

  function handleDelete(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  function handleEdit(updatedStudent) {
    setStudents(students.map((s) => s.id === updatedStudent.id ? updatedStudent : s));
    setEditStudent(null)
  }

  return (
    <div>
      <StudentCreate onAddStudent={handleAddStudents} onEdit={handleEdit} editStudent={editStudent} />
      <StudentList students={students} onDelete={handleDelete} onEditClick={setEditStudent} />
    </div>
  );
}

export default App;
