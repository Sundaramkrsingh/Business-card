import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <ReusableCard name={"Sundaram"} description={"second year student"} interests={['coding', 'singing', 'swimming']} socials={[{name: 'twitter', link: 'https://www.twitter.com/sundaram_011'}, {name: 'instagram', link: 'https://www.instagram.com/sundaram_011'}]}/> 
    </>
  )
}

function ReusableCard({name, description, interests, socials}) {

  return <div className='m-10 w-2/5 h-64 text-gray-700 text-sm border-gray-300 border shadow-md rounded-md p-6'>
    <h2 className='text-black text-2xl font-bold'>{name}</h2>
    {description}
    <h3 className='text-black text-xl font-bold mt-3'>Interests</h3>
    {interests.map((interest, index) => {
      return <div key={index}> {interest} </div> 
    })}

    {socials.map((social, index) => {
      return <a href={social.link} target='_blank'> 
        <button key={index} className='text-white border h-10 w-20 my-4 mr-2 bg-blue-500 rounded-md'>
          {social.name}
        </button>
      </a>
    })}
  </div>
}

export default App