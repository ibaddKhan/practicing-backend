import { useState, useRef, useEffect } from "react";
import axios from 'axios'

const Home = () => {

    let value = useRef()
    let [todo, setTodo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/')
        console.log("working get in frontend");
    }, [todo])
    function addtask(e) {
        e.preventDefault()
        if (value.current.value === "") {
            alert("Please enter a task")
            return
        }
        axios.post('http://localhost:3000/', { task: value.current.value }).then(res => console.log(res)).catch((err) => {
            console.log(err);
        }).then(() => {

            setTodo([value.current.value, ...todo])
        }).catch(
            () => {
                console.log("error making request");
            }
        )
    }

    return (

        <div>
            <h1>Simple Todo App</h1>
            <form onSubmit={e => addtask(e)}>
                <input ref={value} type="text" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    todo.length === 0 ?
                        <h1>No todos found</h1> :
                        todo.map((item, index) => (
                            <li key={index}>{item}</li>

                        )
                        )
                }
            </ul>
        </div>
    );
};

export default Home;
