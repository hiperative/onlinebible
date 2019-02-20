import React from 'react'

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: 22,
    marginBottom: 20
  },
  verse: {
    margin: 0,
    lineHeight: '1.27em',
  },
  info: {
    textAlign: 'right',
  },
});

const Passage = ({passage}) => (
  <div className={styles.root}>
    <p className={styles.verse}>{passage.verse.text}</p>
    <div className={styles.info}>
      <a href="#LINK">{passage.book.name} {passage.verse.chapterNumber}:{passage.verse.number}</a>
    </div>
  </div>
)

export default Passage
