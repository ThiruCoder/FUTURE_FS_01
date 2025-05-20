import { CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import sideImage from '../../../../public/19197641.jpg'
import Image from 'next/image'
import './hone.css'
// #3f3f3f
const HomeView = () => {
    return (
        <Container sx={{ mt: { xs: 30, md: 0 } }}>
            <Grid container spacing={4}>
                <Grid size={{ md: 6, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2.4em' }}>
                        I Build Fast, Scalable, and Beautiful Web Applications.
                    </Typography>
                    <Typography sx={{ color: '#ffffff', mt: 1 }}>
                        I'm a full-stack developer with a passion for designing intuitive frontends and building robust, scalable backends. From responsive interfaces to secure APIs, I create digital solutions that are both beautiful and efficient.
                    </Typography>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                        component={'img'}
                        image='about_System.jpg'
                        alt='Side Image'
                        sx={{ objectFit: 'cover', borderRadius: 4, mixBlendMode: 'luminosity' }}
                    />

                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeView