'use client';
import Resume from '@/app/Dashboard/Dashboard_Models/Resume';
import { Box, Button, CardHeader, Container, Divider, Grid, styled, Typography } from '@mui/material'
import { Braces, Eclipse, SquareCode } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const SkillContainer = styled(Box)({
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '#282828',
    padding: '10px 20px',
    borderRadius: '7px',
    margin: '0 auto',
});

const SkillBox = styled(Box)({
    width: '100%',
    margin: '25px 0',
});

const SkillTitle = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgb(226, 226, 226)',
});

const SkillBar = styled(Box)({
    height: '8px',
    width: '100%',
    borderRadius: '6px',
    marginTop: '6px',
    backgroundColor: 'rgba(236, 236, 236, 0.1)',
    position: 'relative',
    overflow: 'hidden',
});

const SkillProgress = styled(Box)(({ level, delay }) => ({
    position: 'relative',
    height: '100%',
    width: `${level}%`,
    borderRadius: '6px',
    backgroundColor: 'rgb(226, 226, 226)',
    animation: 'progress 0.4s ease-in-out forwards',
    animationDelay: delay,
    opacity: 0,
    '@keyframes progress': {
        '0%': {
            width: 0,
            opacity: 1,
        },
        '100%': {
            opacity: 1,
        },
    },
}));

const Tooltip = styled(Typography)({
    position: 'absolute',
    right: '-14px',
    top: '-28px',
    fontSize: '9px',
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    padding: '2px 6px',
    borderRadius: '3px',
    backgroundColor: 'rgb(226, 226, 226)',
    zIndex: 1,
    '&::before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: '-2px',
        height: '10px',
        width: '10px',
        zIndex: -1,
        backgroundColor: 'rgb(226, 226, 226)',
        transform: 'translateX(-50%) rotate(45deg)',
    },
});

const AboutPlan = ({ open, setOpen, projects, setRefresh, crud, resumeData }) => {
    const [activeComponent, setActiveComponent] = useState('skills')

    const resumeSkills = resumeData?.map((item) => item?.skills).flat();

    const handleClick = () => {
        switch (activeComponent) {
            case 'skills':
                return (
                    <Box sx={{ bgcolor: 'antiquewhite', py: 5 }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 800, fontSize: '2.3em', color: 'black', pb: 4 }}>Technical Skills</Typography>

                        <Grid container spacing={2}>

                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>
                                <SkillContainer>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Frontend
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Frontend') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                            </Grid>
                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>
                                <SkillContainer>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Backend
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Backend') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                            </Grid>
                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>
                                <SkillContainer>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Database
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Database') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                                <SkillContainer sx={{ mt: 5 }}>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Other
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Other') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                            </Grid>
                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>

                            </Grid>
                        </Grid>
                    </Box>
                )
            case 'resume':
                return (
                    <Box sx={{ bgcolor: 'antiquewhite', py: 5 }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 800, fontSize: '2.3em', color: 'black', pb: 4 }}>Resume</Typography>
                        <Resume
                            setRefresh={setRefresh}
                            open={open}
                            setOpen={setOpen}
                            projects={projects}
                            crud={crud}
                        />
                    </Box>
                )

            default:
                return (
                    <Box sx={{ bgcolor: 'antiquewhite', py: 5 }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 800, fontSize: '2.3em', color: 'black', pb: 4 }}>Technical Skills</Typography>

                        <Grid container spacing={2}>

                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>
                                <SkillContainer>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Frontend
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Frontend') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                            </Grid>
                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>
                                <SkillContainer>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Backend
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Backend') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                            </Grid>
                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>
                                <SkillContainer>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Database
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Database') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                                <SkillContainer sx={{ mt: 5 }}>
                                    <Typography sx={{ fontSize: '1.8em', fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                        Other
                                    </Typography>
                                    {resumeSkills.map((skill) => {
                                        if (skill.category === 'Other') {
                                            return (
                                                <SkillBox key={skill.name}>
                                                    <SkillTitle>
                                                        {/* {skill.icon} */}
                                                        {skill.name}
                                                    </SkillTitle>
                                                    <SkillBar>
                                                        <SkillProgress level={skill.proficiency * 10} delay={skill.proficiency > 5 ? '0.1s' : '0.2s'}>
                                                            <Tooltip>{skill.proficiency}%</Tooltip>
                                                        </SkillProgress>
                                                    </SkillBar>
                                                </SkillBox>
                                            )
                                        }
                                    })}
                                </SkillContainer>
                            </Grid>
                            <Grid size={{ md: 4, xs: 12 }} sx={{ p: 1.6 }}>

                            </Grid>
                        </Grid>
                    </Box>
                )
        }
    }
    // rgb(133, 208, 246)
    return (
        <Box >

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 50, bgcolor: 'floralwhite', mt: 4 }}>
                <Button variant="contained" sx={{ bgcolor: 'floralwhite', color: 'black', fontSize: '1.2em', fontWeight: 800, width: '100%', height: 50, borderRadius: 0 }} onClick={() => setActiveComponent('skills')}>Skills</Button>
                <Button variant="contained" sx={{ bgcolor: 'floralwhite', color: 'black', fontSize: '1.2em', fontWeight: 800, width: '100%', height: 50, borderRadius: 0 }} onClick={() => setActiveComponent('resume')}>Resume</Button>
            </Box>
            {handleClick()}

        </Box >
    )
}

export default AboutPlan