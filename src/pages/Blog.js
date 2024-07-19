import React from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'

function Blog() {
  return (
    <Cards
      classes='cards blog-cards'
      headerText={<span>Coming Soon!</span>}
    >
      <Card></Card>
    </Cards>
  )
}

export default Blog
