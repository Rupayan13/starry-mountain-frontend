import React from 'react'
import Carousel from '../components/Carousel'
import Destinations from '../components/Destination'
import Feedbacks from '../components/Feedbacks'

const Home = () => {
  return (
    <div>
      <Carousel />
      {/* <Places /> */}
      <Destinations />
      <Feedbacks />
    </div>
  )
}

export default Home
