import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'> Organize your <br /> Lists & Notes.</h1>
            <p className='text-center'> Organize your tasks effortlessly with our intuitive To-Do app—add,<br /> edit, and track your daily goals all in one place!"</p>
            <button className='home-btn p-2'>Make ToDo List</button>
      

        </div>
    </div>
  )
}

export default Home
