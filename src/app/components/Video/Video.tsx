import React from 'react'

const Video = () => {
  return (
    <div className='flex justify-center items-center'>
          <video autoPlay loop muted controls src="/video/video.mp4"></video>
    </div>
  )
}

export default Video