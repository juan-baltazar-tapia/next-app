import React from 'react'

interface Prop {
    params: {id: number, photoId: number}
}
const PhotosNumber = ( {params: {id, photoId}}: Prop) => {
  return (
    <div>PhotosNumber {id} {photoId}</div>
  )
}

export default PhotosNumber