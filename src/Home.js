import { useState } from 'react';

const Home = () => {


    // let name = 'Dafrin';
    const [name, setName] = useState('Dafrin');
    const [age, setAge] = useState(19);

    const handleClick = () => {
        setName('FAHMI DAFRIN MAULANA');
        setAge(20);
    }

    const handleClickAgain = (name) => {
        console.log('hello '+ name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ () => handleClickAgain('dafrin') }>Click me Again</button>
        </div>
     );
}
 
export default Home;