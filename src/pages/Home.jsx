// import React from "react"
// // import Navbar from "../components/Navbar"


// const Home = () =>{
//     return (
//         <div>
//             {/* <Navbar /> */}
//             <h1>Home</h1>
//         </div>
//     )
// };

// export default Home;

import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    function goToAbout() {

        navigate("/about");

    }

    return (
        <div>

            <h1>Home Page</h1>

            <button onClick={goToAbout}>
                Go to About
            </button>

        </div>
    );
}

export default Home;