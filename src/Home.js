import { useState } from 'react';

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

    const handleClickAgain = (name) => {
        console.log('hello '+ name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ () => handleClickAgain('dafrin') }>Click me Again</button>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id} >
                        <h2>{blog.title}</h2>
                        <p>Write by {blog.author}</p>
                    </div>
                ))}
        </div>
     );
}
 
export default Home;