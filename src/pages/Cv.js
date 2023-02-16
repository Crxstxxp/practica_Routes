import React from 'react'
import BarraSuperior from '../components/BarraSuperior'
import CV from '../img/CV.png'

function Cv() {
  return (
    <>
        <BarraSuperior/>
        <center> <img src={CV} height='700px' /> </center>
    </>
  )
}

export default Cv
