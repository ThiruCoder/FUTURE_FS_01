"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { LogIn, LogOut, MenuIcon, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import { LocalRoute } from './LocalRoutes';
import { AxiosInstance } from '../ClientSideGlobalErrorHandler/GlobalErrorHandler';

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [fresh, setFresh] = React.useState(false)
    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    // console.log(JSON.parse(localStorage.getItem('role')));

    const VerifyToken = async () => {
        const token = localStorage.getItem('token');

        try {
            if (!token) return console.log('Token is not present');
            await AxiosInstance.post('/auth/VerifyToken', { token: token })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    localStorage.clear()
                });
        } catch (error) {
            localStorage.clear();
        }
    }
    React.useEffect(() => {
        VerifyToken();
    }, [fresh])

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const matches = useMediaQuery('(min-width:900px)')

    const handleLogOut = () => {
        localStorage.clear()
        setFresh((prev) => !prev)
        handleCloseUserMenu()
        handleCloseNavMenu()
    }


    return (
        <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', position: 'fixed', top: 3, zIndex: 2 }}>
            {/* <LocalRoute/> */}
            <Container maxWidth="xl">
                <Toolbar disableGutters
                    sx={{
                        bgcolor: 'rgb(6, 0, 32)',
                        px: { md: 3, xs: 1 },
                        backdropFilter: 'blur(50px)',
                        borderRadius: 30
                    }}>
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
                        DevSite
                    </Typography>

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
                            sx={{ display: { xs: 'block', md: 'none' }, color: 'black' }}
                        >
                            {LocalRoute.map((page, index) => (
                                <MenuItem href={page?.link} key={`${page?.title}-${index}`} color='black' onClick={handleCloseNavMenu}>
                                    <Link href={page?.link} style={{ textAlign: 'center' }} color='black'>
                                        <Typography>{page?.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
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
                    >
                        DevSite
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {LocalRoute.map((page, index) => (
                            <Button
                                key={`${page?.title}-${index}`}
                                onClick={handleCloseNavMenu}
                                href={page?.link}
                                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 600 }}
                            >
                                {page?.title}
                            </Button>
                        ))}
                    </Box>
                    {token ? (
                        <Box sx={{ flexGrow: 0, display: 'flex', gap: 3, alignItems: 'center' }}>
                            <Tooltip title="LogOut">
                                {matches ? (
                                    <Link href={'/Auth'} onClick={handleLogOut}>
                                        <Typography sx={{ backgroundColor: 'ThreeDFace', px: 2, py: 1, borderRadius: 10, }}>LogOut</Typography>
                                    </Link>
                                ) : (
                                    <Link href={'/Auth'} onClick={handleLogOut}>
                                        <LogOut width={20} />
                                    </Link>
                                )}
                            </Tooltip>
                        </Box>
                    ) : (
                        <Box sx={{ flexGrow: 0, display: 'flex', gap: 3, alignItems: 'center' }}>
                            <Tooltip title="SignIn">
                                {matches ? (
                                    <Link href={'/Auth'} onClick={handleOpenUserMenu}>
                                        <Typography sx={{ backgroundColor: 'ThreeDFace', px: 2, py: 1, borderRadius: 10, }}>SignIn</Typography>
                                    </Link>
                                ) : (
                                    <Link href={'/Auth'} onClick={handleOpenUserMenu}>
                                        <LogIn width={20} />
                                    </Link>
                                )}
                            </Tooltip>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
