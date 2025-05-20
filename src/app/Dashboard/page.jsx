"use client";
import React, { useEffect, useState } from 'react';
import Projects from './Dashboard_Models/Projects';
import Skills from './Dashboard_Models/Skills';
import Resume from './Dashboard_Models/Resume';
import Contact from './Dashboard_Models/Contact';
import Analytics from './Dashboard_Models/Analytics';
import Settings from './Dashboard_Models/Settings';
import MainPage from './Dashboard_Models/MainPage';
import { Box } from '@mui/material';
import DashboardHeader from './Dashboard_Models/Header';
import Footer from '../Components/Footer';
import { AxiosInstance } from '../ClientSideGlobalErrorHandler/GlobalErrorHandler';
// import { ThemeProvider } from './contexts/ThemeContext';
// import Layout from './components/layout/Layout';
const top = 3

const Dashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [open, setOpen] = React.useState(false);
    const [projects, setProjects] = useState([]);
    const [refresh, setRefresh] = useState(false)

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

    const crud = 'visible'

    const renderPage = () => {
        switch (activePage) {
            case 'dashboard':
                return <MainPage
                    top={top}
                    setRefresh={setRefresh}
                />;
            case 'projects':
                return <Projects
                    top={top}
                    projects={projects}
                    setRefresh={setRefresh}
                    open={open}
                    setOpen={setOpen}
                />;
            case 'skills':
                return <Skills top={top} />;
            case 'resume':
                return <Resume
                    top={top}
                    setRefresh={setRefresh}
                    open={open}
                    setOpen={setOpen}
                    projects={projects}
                    crud={crud}
                />;
            case 'contact':
                return <Contact top={top} />;
            // case 'analytics':
            //     return <Analytics top={top} />;
            case 'settings':
                return <Settings top={top} />;
            default:
                return <MainPage top={top} />;
        }
    };

    return (
        <Box>
            <DashboardHeader setActivePage={setActivePage} />
            {renderPage()}
            <Footer />
        </Box>
    );
}

export default Dashboard
