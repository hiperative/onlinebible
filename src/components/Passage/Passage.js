import React from 'react'
import { withStyles } from '@material-ui/core/styles';

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

const Passage = ({classes, passage}) => (
  <div className={classes.root}>
    <p className={classes.verse}>{passage.verse.text}</p>
    <div className={classes.info}>
      <a href="#">{passage.book.name} {passage.verse.chapterNumber}:{passage.verse.number}</a>
    </div>
  </div>
)

export default withStyles(styles)(Passage);
