import React from 'react'
import './FollowersCard.css'
import setColorVote from '../../helpers/setColorVote'

const FollowersCard = ({ item }) => {
  return (
    <div className={`followers-container ${item.socialMediaPlatform}`}>
      <div className="inner-followers-card">
        <p className="user">
          <span>
            <img alt="Social Media" src={item.socialMediaIcon} />{' '}
          </span>
          {item.user}
        </p>
        <p className="numbers">{item.followers}</p>
        {item.socialMediaPlatform === 'youtube' ? (
          <p>SUBSCRIBERS</p>
        ) : (
          <p>FOLLOWERS</p>
        )}

        <p className={setColorVote(item.votesIcon)}>
          <span>
            <img alt="vote" src={item.votesIcon} />
          </span>
          {item.count} Today
        </p>
      </div>
    </div>
  )
}

export default FollowersCard
