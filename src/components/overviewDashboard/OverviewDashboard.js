import React from 'react'
import data from '../../data.js'
import OverviewCard from '../overviewCard/OverviewCard'
import './OverviewDashboard.css'

const OverviewDashboard = () => {
  return (
    <div className="container-overview">
      <p>Overview - Today</p>
      <div className="inner-container">
        {data[1].overview?.map((item) => {
          return (
            <div key={item.id} className="overview-wrapper">
              <OverviewCard item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OverviewDashboard
