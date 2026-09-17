
import './App.css'
import {StudentCard, AnuCard, NumberCard, BoolCard, ArrayCard, ObjectCard, ObjectCard1} from './components/StudentCard'
 
function App() {
  const students = {
    name :"Sneha",
    course : "BSc",
    age : 22,
  
  }
  const students1 = [
    {
        id: 1,
        name: "Geerthy",
        age: 23,
        course: "BCA"
    },
    {
        id: 2,
        name: "Anu",
        age: 22,
        course: "BSc CS"
    },
    {
        id: 3,
        name: "Rahul",
        age: 24,
        course: "MCA"
    }
];

  return(
    <div>
     <StudentCard name ="Geerthy" course = "BCA"  />

     <AnuCard name ="Anu" course = "BSc"  />
     <NumberCard age = {23} />
     <BoolCard isActive = {false} />
     <ArrayCard items = {['item1','item2','item3']}/>
     <ObjectCard students = {students} />
     {students1.map((student1) =>(
      <ObjectCard1 key={student1.id} students1 ={student1} />
     ))}
    </div>
  )
}

export default App
