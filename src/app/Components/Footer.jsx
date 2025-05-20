import { Box, CardHeader, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { LocalRoute } from './LocalRoutes'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1C1C1C', py: 8 }}>
            <Container>
                <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

                    <Grid size={{ md: 4, xs: 12 }}>
                        <Box>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '1.2em',
                                            color: 'white'
                                        }}>DevSite</Typography>
                                }
                                subheader={
                                    <Typography sx={{
                                        color: 'white',
                                        opacity: 0.9
                                    }}>
                                        I'm a Full Stack Developer with a passion for building scalable, efficient, and user-friendly web applications. With experience in both frontend and backend technologies, I specialize in JavaScript, React, Node.js, and MongoDB.
                                    </Typography>
                                }
                            />
                        </Box>
                    </Grid>

                    <Grid size={{ md: 4, xs: 12 }} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontWeight: 700,
                            fontSize: '1.2em',
                            color: 'white',
                            textAlign: 'center'
                        }}>Services</Typography>

                        <Stack
                            gap={0.6}
                            sx={{
                                p: 2,
                                borderRadius: 2,
                            }}
                        >
                            {LocalRoute.map((item, ins) => (
                                <Link href={item?.link} passHref key={`${item?.title}-${ins}`}>
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            transform: 'translateX(0px)',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                color: 'primary.main',
                                                transform: 'translateX(10px)'
                                            },
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {item?.title}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid size={{ md: 4, xs: 12 }} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        <Box sx={{ position: { xs: 'relative', md: 'absolute' } }}>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: '1.2em',
                                color: 'white',
                                pb: 2.5,
                                textAlign: 'center'
                            }}>Connections</Typography>
                            <Box sx={{ pb: 12 }}>
                                <Link href={'https://github.com/ThiruCoder'}>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Github color='white' opacity={0.8} />
                                    </IconButton>
                                </Link>
                                <Link href={'https://www.linkedin.com/in/charipalli-thirumalesh-a7a127350/'}>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Linkedin color='white' opacity={0.8} />
                                    </IconButton>
                                </Link>
                                <Link href={'tel:7569583293'}>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Phone color='white' opacity={0.8} />
                                    </IconButton>
                                </Link>
                                <Link href={'thiruthedeveloper@gmail.com'}>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Mail color='white' opacity={0.8} />
                                    </IconButton>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box textAlign="center" py={3} bgcolor="grey.200">
                <Typography variant="body2" color="text.secondary">
                    &copy; {new Date().getFullYear()} Charipalli Thirumalesh. All rights reserved.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer