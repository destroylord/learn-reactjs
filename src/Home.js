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
    const [blogs, setBlogs] = useState([
        {title : 'My new website', body : 'lorem ipsum..', author : 'dafrin', id : 1},
        {title : 'My website', body : 'lorem ipsum..', author : 'rizal', id : 2},
        {title : 'Welcome to my website', body : 'lorem ipsum..', author : 'didik', id : 3}
    ]);

    
    const handleClick = () => {
        setName('FAHMI DAFRIN MAULANA');
        setAge(20);
    }

    // useEffect hook
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
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

                <BlogList blogs={blogs} title="All blogs!!" handleDelete={handleDelete}></BlogList>
                <button onClick={() => setName('luigi')}>Change name</button>
                <p>{name}</p>
        </div>
     );
}
 
export default Home;