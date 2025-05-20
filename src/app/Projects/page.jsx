'use client';
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ProjectsData from './Project_Models/Projects'
import { useGlobalContext } from '../Context/GlobalContext'
import { AxiosInstance } from '../ClientSideGlobalErrorHandler/GlobalErrorHandler';
import Footer from '../Components/Footer';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState('Board');
    const [showId, setShowId] = useState(null)

    const GetProjectData = async () => {
        try {
            await AxiosInstance.get('/project/getProject')
                .then((res) => {
                    setProjects(res?.data)
                })
                .catch((err) => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetProjectData();
    }, [refresh])
    return (
        <div >
            <Box style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}>
                    <Image
                        src={'/5545.png'}
                        fill
                        alt='Project View'
                        style={{ objectFit: 'cover', zIndex: 1, mixBlendMode: 'multiply', backgroundColor: 'transparent' }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(14, 14, 14, 0.5), transparent)',
                            zIndex: 2,
                        }}
                    />
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2, border: 'none' }}>
                    <Header />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100vh', width: '100%' }}>
                        <Container>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ textAlign: 'start', fontWeight: 800, fontSize: '3.3em' }}>My Development Playground</Typography>
                                    <Box>
                                        <Typography>Playful and personal—great if your projects are experimental or creative.</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }}></Grid>
                            </Grid>
                        </Container>
                    </Box>

                </Box>

            </Box>
            <ProjectsData
                setRefresh={setRefresh} projects={projects}
                page={page} setPage={setPage}
                setShowId={setShowId} showId={showId}
            />
            <Footer />
        </div>
    )
}

export default Projects