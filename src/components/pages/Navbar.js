import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Styles from "../style/Navbar.module.css"
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import shopIcon from '../../assets/icons/shop.png'
import { itemCount } from '../../helper/functions';
import { CartContext } from '../../context/CartContextProvider';


const Navbar = () =>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 const {state}=React.useContext(CartContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                  <Link className={Styles.productLink} to="/products">
              Products
            </Link>
          </Typography>


   

        {/*Pozitionare icon meniu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>


            {/*Deschidere meniu cu items in el */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {/*Items from menu */}
                <MenuItem onClick={handleCloseNavMenu}>
                <div className={Styles.listContainer} >
                  <ul>
                    <li>
                      <Link 
                        className={Styles.listContainerLink2}
                        to="/products/men's clothing">
                        men's
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={Styles.listContainerLink2}
                        to="/products/women's clothing">
                        women's
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={Styles.listContainerLink2}
                        to="/products/jewelery">
                        jewelery
                      </Link>
                    </li>

                    <li>
                      <Link
                      
                      className={Styles.listContainerLink2}

                        to="/products/electronics">
                        electronics
                      </Link>
                    </li>
                  </ul>
                </div>
              </MenuItem>
            </Menu>
          </Box>


            {/*Scris mijloc */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/product"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >  <Link className={Styles.productLink} to="/products">
          Poducts
        </Link>
          </Typography>
          




            {/*Afisare items pt meniu larg */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <div className={Styles.listContainer}>
              <ul>
                <li>
                  <Link
                    className={Styles.listContainerLink}
                    to="/products/men's clothing">
                    men's
                  </Link>
                </li>
                <li>
                  <Link
                                    className={Styles.listContainerLink}
    
                    to="/products/women's clothing">
                    women's
                  </Link>
                </li>
                <li>
                  <Link
                                      className={Styles.listContainerLink}

                    to="/products/jewelery">
                    jewelery
                  </Link>
                </li>
                <li>
                  <Link
                                        className={Styles.listContainerLink}

                    to="/products/electronics">
                    electronics
                  </Link>
                </li>
              </ul>
              </div>
          </Box>



        {/*Afisare logo cu cos */}
          <Box sx={{ flexGrow: 0 }}>
          <div className={Styles.iconContainer}>
              <Link  to="/cart">
                <img src={shopIcon} alt="shop" />
              </Link>
               <span>{state.itemsCounter}</span>
            </div>
          </Box>





        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
