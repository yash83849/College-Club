import { useParams } from 'next/navigation';
import React from 'react'

const Announcement = () => {

    const {id} = useParams();

  return (
    <div>Announcement</div>
  )
}

export default Announcement;