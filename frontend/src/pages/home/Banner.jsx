import React from 'react';
import bannerImg from '../../assets/banner.png'

const Banner=() => {
  return(
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">

      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt=""/>
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5x1 text-2x1 font-medium mb-7">New releases This Week</h1>
        <p className="mb-10">It's time to update your reading list with some of the latest aand greatest releases in the literary world. From heart pumping thrillers to captivating memories, this week's new releases offer something to everyone</p>
        <button className="btn-primary">Subscribe</button>
      </div>
      
    </div>
  )
}

export default Banner;
