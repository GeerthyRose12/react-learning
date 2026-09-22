import "./App.css";
import { useState } from "react";

import StudentList from "./components/StudentList";
import StudentCreate from "./components/StudentCreate";

function App() {
  const [students, setStudents] = useState([]);
  function handleAddStudents(student) {
    setStudents([...students, student]);
  }

  return (
    <div>
      <StudentCreate onAddStudent={handleAddStudents} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
