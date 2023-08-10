function setColorVote(icon) {
  if (icon.includes('icon-down')) {
    return 'vote-down'
  } else {
    return 'vote-up'
  }
}

export default setColorVote
