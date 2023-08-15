import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButton = ({ text, link, classes }) => {
  return (
        <Link to={link} className={classes}>{text}</Link>
  )
}

export default HeaderButton