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
import { LogIn, MenuIcon } from 'lucide-react';
import { LocalRoute } from '@/app/Components/LocalRoutes';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

const settings = ['projects', 'skills', 'resume', 'contact', 'analytics', 'settings'];


export const DashboardHeader = ({ setActivePage }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    {/*'analytics'*/ }
    const pages = ['projects', 'skills', 'resume', 'contact', 'settings'];
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const matches = useMediaQuery('(min-width:1200px)')
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/Dashboard"
                        sx={{
                            mr: 2,
                            display: { sm: 'none', lg: 'flex', xs: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DevSite
                    </Typography>
                    {/* { sm: 'none', lg: 'flex' } */}
                    <Box sx={{ flexGrow: 1, display: { sm: 'flex', lg: 'none' } }}>
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => setActivePage(page)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
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
                        href="/Dashboard"
                        sx={{
                            mr: 2,
                            display: { sm: 'flex', lg: 'none' },
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
                    <Box sx={{ flexGrow: 1, display: { sm: 'none', lg: 'flex', xs: 'none' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => setActivePage(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
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
                    <Box sx={{ flexGrow: 0 }}>
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
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default DashboardHeader;
