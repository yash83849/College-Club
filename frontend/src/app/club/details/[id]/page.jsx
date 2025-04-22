'use client';
import { useParams } from 'next/navigation';
import React from 'react'

const Details = () => {

    const { id } = useParams();

  return (
    <div>Details</div>
  )
}

export default Details;