"use client";
import { Box, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import img from '../../../../public/5544.jpg'
import Image from 'next/image';
import { Info } from 'lucide-react';
const imgs = [img, img, img, img, img, img]
const Projects = ({ setRefresh, projects }) => {
    console.log('projects', projects)
    return (
        <Box sx={{ mt: { xs: 15, md: 0 } }}>
            <Box sx={{ pt: 10, pb: 6 }}>
                <Container sx={{ p: 4, borderRadius: 4, boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.3)' }}>
                    <Box sx={{ pb: 4 }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 800, fontSize: '2.6em', color: 'black' }}>PROJECTS</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {projects?.map((project, index) => (
                            <Grid size={{ md: 3, xs: 12 }} key={`${project?._id}-${index}`}>
                                <Box sx={{ position: 'relative', width: '100%', height: 300, overflow: 'hidden', borderRadius: 2 }}>
                                    <Image
                                        src={project?.image?.url}
                                        alt="Project Image"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />

                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            width: '100%',
                                            color: '#fff',
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                                            px: 2,
                                            py: 1.5,
                                        }}
                                    >
                                        <CardHeader
                                            sx={{ p: 0 }}
                                            title={
                                                <Typography variant="subtitle1" fontWeight={600}>
                                                    {project?.name}
                                                </Typography>
                                            }
                                            subheader={
                                                <Typography variant="body2">
                                                    {project?.description}
                                                </Typography>
                                            }
                                            action={
                                                <IconButton>
                                                    <Info color='white' />
                                                </IconButton>
                                            }
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Projects