
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  const handleSubmit = (event) =>{
    event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const allForm = {name, email}
      console.log(allForm)
  }

  return (
    <>
       <div className='container'>
          <div className='main-div'>
          <form action="" onSubmit={ handleSubmit }>
              <input type="text" name='name' className='form-control' placeholder='enter your name' />
              <input type="email" name='email' className='form-control' placeholder='enter your email' />
              <div className='btn'>
                 <button className='btn-dash'>submit</button>
              </div>
          </form>
          </div>
           <h3>{user.length}</h3>
          {
            user.map(load => <p key={load.id}>{load.name}: {load.email}</p>)
          }
       </div>
    </>
  )
}

export default App;
