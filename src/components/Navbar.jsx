import react from 'react';

function Navbar () {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#333', padding: '10px'}}>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
        </div>
    )
}

export default Navbar