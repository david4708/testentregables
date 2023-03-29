import React from 'react'
import Button from './Button'
import "../styles/ContainerInfo.css"


const ContainerInfo = ({quote,handleNewQuote,bgImage}) => {
    


  return (
    <section className='ContainerInfo' >
    <h1 className='ContainerInfo_title'>INFOGALAX</h1>
    <article className='ContainerInfo_phrase'>
  
      <p>{quote.phrase}</p>
    </article>
   <Button handleNewQuote={handleNewQuote}/>
    <article className='ContainerInfo_author'>
      <h4>Fuente: {quote.author}</h4>
    </article>
    
    <div className={`ContainerPlanet ${bgImage.pl}`}>

    </div>

    </section>
  )
}

export default ContainerInfo