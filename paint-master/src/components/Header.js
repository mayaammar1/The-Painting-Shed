import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Link from "@material-ui/core/Link";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import IconButton from "@material-ui/core/IconButton";
import { IconContext } from 'react-icons';
import { SidebarData } from './sideBar';
import './sideBar.css';
import { useStyles } from './HeaderStyles.js';

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Shop All", href: "#shop" },
  { name: "Brushes", href: "#brushes" },
  { name: "Mixing Dishes", href: "#dishes" },
];

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    setChecked(true);
  }, []);
  
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0} position="absolute">
        <Toolbar className={classes.appbarWrapper}>
          <IconContext.Provider value={{ color: '#ffec3d' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>

          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>The Painting Shed.</span>
          </h1>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            The<span className={classes.colorText}>Painting Shed.</span>
          </h1>
          <Scroll to="equipment" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
