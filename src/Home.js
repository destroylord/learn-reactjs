import { useState, useEffect } from 'react';
import BlogList from './BlogList';


/* 
    untuk menjalankan sebuah json ketik diterminal :

    npx json-server --watch data/db.json --port 8000
*/

const Home = () => {


    // let name = 'Dafrin';
    const [name, setName] = useState('Dafrin');
    const [age, setAge] = useState(19);
    const [blogs, setBlogs] = useState(null);

    
    const handleClick = () => {
        setName('FAHMI DAFRIN MAULANA');
        setAge(20);
    }

    // useEffect hook
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json()
        })
        .then((data) => {
            console.log(data);
            setBlogs(data)
        });
    }, []);

    const handleClickAgain = (name) => {
        console.log('hello '+ name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>

            <button onClick={ () => handleClickAgain('dafrin') }>Click me Again</button>

                {blogs && <BlogList blogs={blogs} title="All blogs!!"></BlogList>}
                <button onClick={() => setName('luigi')}>Change name</button>
                <p>{name}</p>
        </div>
     );
}
 
export default Home;