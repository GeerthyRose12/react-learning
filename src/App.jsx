
import './App.css'
 
function App() {
  const students = {
    name : 'John Doe',
    age : 20,
    major : 'Computer Science',
    active: false
  }
  return(
    <div style={{color:'blue'}}>
      <h1 style={{color:'blue'}}>{students.name}</h1>
      <p>Age: {students.age}</p>
      <p>Major: {students.major}</p>
      {students.active ? (<p>student is active</p>) : (<p>student is inactive</p>)}
    </div>
  )
}

export default App
