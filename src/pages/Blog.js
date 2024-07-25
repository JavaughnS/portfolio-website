import React from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'

function Blog() {
  return (
    <Cards
      classes='deck blog-deck'
      headerText={<span>Coming Soon!</span>}
    >
      <Card/>
    </Cards>
  )
}

export default Blog
