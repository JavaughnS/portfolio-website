import React from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'

function Home() {
  return (
    <div id='home-page'>
      <div id='home-upper-content'>
        <div  class='pfp-container'>
          <img
            src='images/temp-profile-pic.JPG'
            alt='Javaughn Smith'
            className='pfp'
          />
        </div>
        <Cards
          classes='cards projects-preview'
          headerText={<h4>Latest Project Activity</h4>}
        >
          <Card></Card>
        </Cards>
      </div>
      <div id='home-lower-content'>
        <Cards
          classes='blog-preview'
          headerText={<h4>Latest Blog Posts</h4>}
        ></Cards>
      </div>
    </div>
  )
}

export default Home
