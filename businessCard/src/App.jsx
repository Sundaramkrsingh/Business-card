import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <ReusableCard name={"Sundaram"} description={"second year student"} interests={['coding', 'singing', 'swimming']} socials={[{name: 'twitter', link: 'https://www.twitter.com/in/sundaram_04'}]}/> 
    </>
  )
}

function ReusableCard({name, description, interests, socials}) {

  return <div style={{
      'border': '2px solid black', 
      'height': '270px',
      'width': '300px',
      'padding': '15px'
    }}>

    <h2>{name}</h2>
    {description}
    <h3>Interests</h3>
    {interests.map((interest, index) => {
      return <div key={index}> {interest} </div> 
    })}

    {socials.map((social, index) => {
      return <a href={social.link} target='_blank'> 
        <button key={index}>
          {social.name}
        </button>
      </a>
    })}
  </div>
}

export default App
