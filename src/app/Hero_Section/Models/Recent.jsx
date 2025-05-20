import { Box, Button, CardHeader, Chip, Container, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import img from '../../../../public/5544.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Link2 } from 'lucide-react'

const RecentProject = ({ setRefresh, projects = [] }) => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Box sx={{ bgcolor: '#F5F5DC', color: 'black', mt: 4, mb: 8, pb: 6 }}>
            <Container >
                <Typography sx={{
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: '2.6em',
                    color: 'black',
                    py: 3,
                    mb: 3
                }}>Recent Project</Typography>

                <Box sx={{ p: 4, borderRadius: 4, boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.3)' }}>
                    {projects.length > 0
                        ? projects.map((project, index) => {
                            if (index === 0) {
                                return (
                                    <Grid container spacing={3} key={`${project?._id}/${index}`} sx={{ pb: 4 }}>
                                        <Grid size={{ md: 6, xs: 12 }} sx={{ position: 'relative' }}>
                                            <Box sx={{
                                                float: 'right',
                                            }}>
                                                <Image
                                                    src={project?.image?.url}
                                                    alt='askfjh'
                                                    width={matches ? 400 : 350}
                                                    height={200}
                                                    style={{ objectFit: 'cover', marginRight: { xs: 0, md: 20 } }}
                                                />
                                                <Divider orientation='vertical' sx={{ height: '90%' }} />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ md: 6, xs: 12 }} sx={{ pb: 4 }}>
                                            <Box>
                                                <CardHeader
                                                    title={
                                                        <Typography sx={{ fontWeight: 600, fontSize: '1.1em' }}>{project?.name}</Typography>
                                                    }
                                                    subheader={
                                                        <Typography sx={{ fontSize: '.9em', pt: 1 }}>
                                                            {project?.description}
                                                        </Typography>
                                                    }
                                                />
                                                <Box>
                                                    <Chip tabIndex={12} sx={{ mr: 1.5 }} label={<Typography fontSize={12} fontWeight={600} >{project?.createdAt.split('T')[0]}</Typography>} />
                                                    <Chip tabIndex={12} sx={{ mr: 1.5 }} label={<Typography fontSize={12} fontWeight={600}>{project?.priority}</Typography>} />
                                                    <Chip tabIndex={12} sx={{ mr: 1.5 }} label={<Typography fontSize={12} fontWeight={600}>{project?.status}</Typography>} />
                                                    <Link href={project?.url}>
                                                        <Button LinkComponent={'a'}
                                                            sx={{ fontSize: '.8em', borderRadius: 30 }}
                                                            startIcon={<Link2 />}>Demo</Button>
                                                    </Link>
                                                </Box>

                                            </Box>
                                        </Grid>
                                    </Grid>
                                )
                            }
                        })
                        : null}

                    <Divider />
                    {projects.map((project, index) => {
                        if (index === 1) {
                            return (
                                <Grid container spacing={3} key={`${project?._id}/${index}`} sx={{ pb: 4, pt: 4 }}>
                                    <Grid size={{ md: 6, xs: 12 }} sx={{ pb: 4 }}>
                                        <Box>
                                            <CardHeader
                                                title={
                                                    <Typography sx={{ fontWeight: 600, fontSize: '1.1em' }}>{project?.name}</Typography>
                                                }
                                                subheader={
                                                    <Typography sx={{ fontSize: '.9em', pt: 1 }}>
                                                        {project?.description}
                                                    </Typography>
                                                }
                                            />
                                            <Box>
                                                <Chip tabIndex={12} sx={{ mr: 1.5 }} label={<Typography fontSize={12} fontWeight={600} >{project?.createdAt.split('T')[0]}</Typography>} />
                                                <Chip tabIndex={12} sx={{ mr: 1.5 }} label={<Typography fontSize={12} fontWeight={600}>{project?.priority}</Typography>} />
                                                <Chip tabIndex={12} sx={{ mr: 1.5 }} label={<Typography fontSize={12} fontWeight={600}>{project?.status}</Typography>} />
                                                <Link href={project?.url}>
                                                    <Button LinkComponent={'a'}
                                                        sx={{ fontSize: '.8em', borderRadius: 30 }}
                                                        startIcon={<Link2 />}>Demo</Button>
                                                </Link>
                                            </Box>

                                        </Box>
                                    </Grid>
                                    <Grid size={{ md: 6, xs: 12 }} sx={{ pb: 4 }}>
                                        <Box sx={{
                                            float: 'left',
                                        }}>
                                            <Image
                                                src={project?.image?.url}
                                                alt='askfjh'
                                                width={matches ? 400 : 350}
                                                height={200}
                                                style={{ objectFit: 'cover', marginRight: { md: 20, xs: 0 }, width: { xs: '100%', md: 400 } }}
                                            />
                                            <Divider orientation='vertical' sx={{ height: '90%' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            )
                        }
                    })}
                </Box>

            </Container >
        </Box >
    )
}

export default RecentProject