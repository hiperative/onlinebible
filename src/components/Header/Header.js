import React from 'react'
import { Link } from 'gatsby'

const styles = {
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing.unit,
    //   width: 'auto',
    // },
  },
  searchIcon: {
    // width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    // paddingTop: theme.spacing.unit,
    // paddingRight: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
    // paddingLeft: theme.spacing.unit * 10,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: 120,
    //   '&:focus': {
    //     width: 200,
    //   },
    // },
  },
};

const Header = ({ siteTitle }) => (
  <header position="static" className={styles.root}>
    <div>
      <div className={styles.menuButton} color="inherit" aria-label="Open drawer">
        <div />
      </div>
      <div className={styles.title} variant="h6" color="inherit">
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className={styles.grow} />
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <div />
        </div>
        <input
          placeholder="Search…"
          styles={{
            root: styles.inputRoot,
            input: styles.inputInput,
          }}
        />
      </div>
    </div>
  </header>
)

// export default Header
export default Header
