'use client';
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Image from 'next/image'
import img1 from '../../../public/5544.jpg'
import HomeView from './Models/HomeView'
import { Box } from '@mui/material'
import Projects from './Models/Projects'
import Footer from '../Components/Footer'
import RecentProject from './Models/Recent'
import { useGlobalContext } from '../Context/GlobalContext'
import { AxiosInstance } from '../ClientSideGlobalErrorHandler/GlobalErrorHandler';

const Hero_Section = () => {
    const [resumeData, setResumeData] = useState([]);
    const [projects, setProjects] = useState([]);
    const [refresh, setRefresh] = useState(false);

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
        <div>
            <Box style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <Image
                    src={img1}
                    fill
                    alt='Background_Image'
                    style={{ objectFit: 'cover', zIndex: 1 }}
                />
                <div style={{ position: 'relative', zIndex: 2, border: 'none' }}>
                    <Header />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100vh', width: '100%' }}>
                        <HomeView />
                    </Box>
                </div>
            </Box>
            <Projects setRefresh={setRefresh} projects={projects} />
            <RecentProject setRefresh={setRefresh} projects={projects} />
            <Footer />
        </div>

    )
}

export default Hero_Section