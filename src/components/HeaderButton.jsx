import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButton = ({ text, link, classes }) => {
    /* Returns a Link. Where the link leads, the text in the Link and the classes can all be changed. */
  return (
        <Link to={link} className={classes}>{text}</Link>
  )
}

export default HeaderButton