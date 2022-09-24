import { useState, useEffect } from 'react';

export const NavBar = (props) => {
  return (
    <ul>
      <li><button>Incentives</button></li>
      <li><button>Trusted Affiliates</button></li>
      <li><button>About Us</button></li>
      <li><button>Blog</button></li>
      <li><button>Login</button></li>
    </ul>
  );
};
