import React from 'react';
import { Link } from 'react-router-dom';

// The primary buttons that are present in the header. These are also used elsewhere as well (may or may not be a good idea). Accepts the button's text, link and classes as parameters.
const HeaderButton = ({ text, link, classes }) => {
  return (
        <Link to={link} className={classes}>{text}</Link>
  )
}

export default HeaderButton