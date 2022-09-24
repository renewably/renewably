import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

export const NavBar = (props) => {
  return (
    <ul className="nav-container">
      <li><button className="nav-button">Incentives</button></li>
      <li><button className="nav-button">Trusted Affiliates</button></li>
      <li><button className="nav-button">About Us</button></li>
      <li><button className="nav-button">Blog</button></li>
      <li><button className="nav-button">Login</button></li>
    </ul>
  );
};
