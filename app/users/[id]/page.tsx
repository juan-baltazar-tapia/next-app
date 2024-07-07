import React from 'react'

interface Prop {
    params: { id: number}
}

const UserDetailPage = ( {params: {id} }: Prop) => {
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage