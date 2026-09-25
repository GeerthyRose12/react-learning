import "./App.css";
import { useState } from "react";
import axios from 'axios';
import ProductAxiosApi from "./services/ProductAxiosApi"

import StudentList from "./components/StudentList";
import StudentCreate from "./components/StudentCreate";
import Product from "./components/Product"
import './App.css'
import {StudentCard, AnuCard, NumberCard, BoolCard, ArrayCard, ObjectCard, ObjectCard1} from './components/StudentCard'


// props learning 



// function App() {
//   const students = {
//     name :"Sneha",
//     course : "BSc",
//     age : 22,
  
//   }
//   const students1 = [
//     {
//         id: 1,
//         name: "Geerthy",
//         age: 23,
//         course: "BCA"
//     },
//     {
//         id: 2,
//         name: "Anu",
//         age: 22,
//         course: "BSc CS"
//     },
//     {
//         id: 3,
//         name: "Rahul",
//         age: 24,
//         course: "MCA"
//     }
// ];

//   return(
//     <div>
//      <StudentCard name ="Geerthy" course = "BCA"  />

//      <AnuCard name ="Anu" course = "BSc"  />
//      <NumberCard age = {23} />
//      <BoolCard isActive = {false} />
//      <ArrayCard items = {['item1','item2','item3']}/>
//      <ObjectCard students = {students} />
//      {students1.map((student1) =>(
//       <ObjectCard1 key={student1.id} students1 ={student1} />
//      ))}


// State-events-forms
// function App() {
//   const [students, setStudents] = useState([]);
//   const [editStudent, setEditStudent] = useState(null)

//   function handleAddStudents(student) {
//     setStudents([...students, student]);
//   }

//   function handleDelete(id) {
//     setStudents(students.filter((s) => s.id !== id));
//   }

//   function handleEdit(updatedStudent) {
//     setStudents(students.map((s) => s.id === updatedStudent.id ? updatedStudent : s));
//     setEditStudent(null)
//   }

//   return (
//     <div>
//       <StudentCreate onAddStudent={handleAddStudents} onEdit={handleEdit} editStudent={editStudent} />
//       <StudentList students={students} onDelete={handleDelete} onEditClick={setEditStudent} />
//     </div>
//   );
// }

// useFeect learning

// function App() {

//   // const [count, setCount] = useState(0);

//   return (
//     // <div className="App">
//     //   <h1>React Learning</h1>
//     //   <p>Count: {count}</p>
//     //   <button onClick={() => setCount(count + 1)}>Increment</button>
//     // </div>
//     <div>
//       <Product />
//     </div>
//   );
// }


function App() {
  const [products,setProducts] = useState([])
  function getProducts(){
    // axios.get('https://dummyjson.com/products')  ----->without service

    // with service file
    ProductAxiosApi.get('/products')     
    .then((response) => {
      console.log(response.data);
      setProducts(response.data.products)
    })
  }
  return (
    <div>
      <h1>Axios Learning</h1> 
      {products.map((product)=>(
        <li key={product.id}>{product.title}</li>
      )

      )}
      <button onClick={getProducts}>Get Products</button>
    </div>
  )
}

export default App;