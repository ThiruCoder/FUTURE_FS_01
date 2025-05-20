'use client';
import { Box, CardHeader, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
import AboutPlan from './About_Models/AboutPlan'
import { AxiosInstance } from '../ClientSideGlobalErrorHandler/GlobalErrorHandler';
import { useGlobalContext } from '../Context/GlobalContext';
import ContactForm from './About_Models/ContactForm';
//rgb(46, 116, 227)
const About = () => {
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const { resumeData, setResumeData, refresh, setRefresh } = useGlobalContext()

    const GetProjectData = async () => {
        try {
            await AxiosInstance.get('/project/getProject')
                .then((res) => {
                    setProjects(res?.data)
                    // setRefresh((prev) => !prev)
                })
                .catch((err) => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    const handleResumeData = async () => {
        try {
            await AxiosInstance.get('/resume/getResume')
                .then((response) => {
                    setResumeData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching resume data:', error);
                });
        } catch (error) {
            console.error('Error fetching resume data:', error);
        }
    }

    useEffect(() => {
        GetProjectData();
        handleResumeData();
    }, [refresh])


    const crud = 'noVisible';
    return (
        <Box sx={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <Header />
            <Container>
                <Grid container spacing={2} sx={{ mt: 6 }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardHeader
                                title={
                                    <Box >
                                        <Typography sx={{ color: 'black', fontWeight: 700, fontSize: '2em', textDecoration: 29 }}>Building Digital Experiences From Frontend to Backend — and Everything Between</Typography>
                                    </Box>
                                }
                                subheader={
                                    <Typography sx={{ color: 'black' }}>Hi, I'm Charipalli Thirumalesh. I architect seamless, scalable web applications by merging elegant interfaces with bulletproof backend logic. Think of me as your Swiss Army knife for turning ideas into functional, high-performance products.</Typography>
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box >
                            <Image
                                src={'/1998.jpg'}
                                width={500}
                                height={500}
                                alt='Project View'
                                style={{ objectFit: 'cover', mixBlendMode: 'multiply', backgroundColor: 'transparent', borderRadius: 40 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <ContactForm />
            <AboutPlan
                setRefresh={setRefresh}
                open={open}
                setOpen={setOpen}
                projects={projects}
                crud={crud}
                resumeData={resumeData}
            />
            <Footer />
        </Box>
    )
}

export default About