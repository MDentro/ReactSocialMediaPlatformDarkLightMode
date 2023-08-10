import React from 'react'
import data from '../../data.js'
import FollowersCard from '../followersCard/FollowersCard.js'
import './FollowersDashboard.css'

const FollowersDashboard = () => {
  return (
    <div className="container">
      {data[0].topDashboard?.map((item) => {
        return (
          <div key={item.id} className="followers-wrapper">
            <FollowersCard item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default FollowersDashboard
