import React from 'react'
import './OverviewCard.css'
import setColorVote from '../../helpers/setColorVote'

const OverviewCard = ({ item }) => {
  console.log(item)

  function setTitleOverviewCard(socialMediaPlatform) {
    if (socialMediaPlatform === 'facebook') {
      return 'Page Views'
    } else if (socialMediaPlatform === 'instagram') {
      return 'Profile Views'
    } else if (socialMediaPlatform === 'twitter') {
      return 'Retweets'
    } else {
      return 'Total Views'
    }
  }

  return (
    <div className="overview-container">
      <section className="left">
        <p>{setTitleOverviewCard(item.socialMediaPlatform)}</p>
        <p className="numbers">{item.count}</p>
      </section>
      <section className="right">
        <img alt="Social Media" className="icon" src={item.socialMediaIcon} />

        <p className={`${setColorVote(item.votesIcon)} vote`}>
          <span>
            <img alt="vote" src={item.votesIcon} />
          </span>
          {item.percentage} %
        </p>
      </section>
    </div>
  )
}

export default OverviewCard
