
function StudentCard(props) {
    console.log(props);
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.course}</p>
        </div>
    )
}

// # destructing props
function AnuCard({name,course}) {
    console.log({name,course});
    return (
        <div>
            <h3>{name}</h3>
            <p>{course}</p>
        </div>
    )
}

// number access

function NumberCard ({age}) {
    return(
        <div>
            <p>{age}</p>
        </div>
    )
}

// Boolean access

function BoolCard({isActive}) {
    return (
        <div>
            <p>status : {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    )
}

// Arraycard

function ArrayCard({items}){
    return(
        <div>
            <h3>
                {items.map((item)=>(
                    <li key={item}>{item}</li>
                )

                )}
            </h3>
        </div>
    )
}

// ObjectCard

function ObjectCard({ students }){
    return(
        <div>
            <h3>{students.name}</h3>
            <p>{students.course}</p>
            <p>{students.age}</p> 
        </div>
    )
}

function ObjectCard1({students1}){
    return(
        <div>
            <h3>{students1.name}</h3>
            <p>{students1.course}</p>
            <p>{students1.age}</p>
            
        </div>
    )
}

export { StudentCard, AnuCard, NumberCard, BoolCard, ArrayCard, ObjectCard, ObjectCard1}