// pages/resume.js
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox, Divider, Chip, Stack, Tooltip } from '@mui/material';
import { Edit, Download, FileText } from 'lucide-react';
import Card from '../UI/Card';
import ResumeForm from '../UI/ResumeForm';
import { AxiosInstance } from '@/app/ClientSideGlobalErrorHandler/GlobalErrorHandler';
import { useGlobalContext } from '@/app/Context/GlobalContext';
import { fontOptions } from '../UI/skillTags';

// const projects = [
//     {
//         id: 'p1',
//         title: 'E-Commerce Dashboard',
//         description: 'A complete admin dashboard for online store management with sales analytics and inventory tracking.',
//         thumbnail: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
//         status: 'completed',
//         github: 'https://github.com/user/ecommerce-dashboard',
//         demo: 'https://ecommerce-dashboard.example.com',
//         created: '2023-05-15',
//         updated: '2023-09-20'
//     },
//     {
//         id: 'p2',
//         title: 'Personal Finance Tracker',
//         description: 'Mobile-first web app to track personal expenses, set budgets, and visualize spending habits.',
//         thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         techStack: ['Vue.js', 'Firebase', 'Chart.js', 'Sass'],
//         status: 'in-progress',
//         github: 'https://github.com/user/finance-tracker',
//         created: '2023-07-10',
//         updated: '2023-10-05'
//     },
//     {
//         id: 'p3',
//         title: 'AI Image Generator',
//         description: 'Web application that leverages machine learning to create unique images from text descriptions.',
//         thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         techStack: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
//         status: 'completed',
//         github: 'https://github.com/user/ai-image-generator',
//         demo: 'https://ai-image-gen.example.com',
//         created: '2023-02-20',
//         updated: '2023-06-18'
//     },
//     {
//         id: 'p4',
//         title: 'Task Management System',
//         description: 'Collaborative task manager with real-time updates, team assignments, and progress tracking.',
//         thumbnail: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         techStack: ['Angular', 'Express', 'PostgreSQL', 'Socket.io'],
//         status: 'in-progress',
//         github: 'https://github.com/user/task-management',
//         created: '2023-08-05',
//         updated: '2023-10-12'
//     },
//     {
//         id: 'p5',
//         title: 'Weather Dashboard',
//         description: 'Interactive weather forecast application with location-based data and historical trends.',
//         thumbnail: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         techStack: ['React', 'Redux', 'OpenWeather API', 'Styled Components'],
//         status: 'completed',
//         github: 'https://github.com/user/weather-app',
//         demo: 'https://weather-app.example.com',
//         created: '2023-04-12',
//         updated: '2023-08-30'
//     },
//     {
//         id: 'p6',
//         title: 'Social Media Analytics',
//         description: 'Dashboard to track and analyze social media performance across multiple platforms.',
//         thumbnail: 'https://images.pexels.com/photos/4125670/pexels-photo-4125670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         techStack: ['Next.js', 'GraphQL', 'MongoDB', 'D3.js'],
//         status: 'planned',
//         github: 'https://github.com/user/social-analytics',
//         created: '2023-09-28',
//         updated: '2023-10-01'
//     }
// ];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Resume = ({ top, open, setOpen, projects, crud }) => {
    const [updatedId, setUpdatedId] = useState(null);
    // const [resumeData, setResumeData] = useState([]);
    const [colors, setColors] = useState(null);
    const [fontFamily, setFontFamily] = useState(null);
    const [personalInfo, setPersonalInfo] = useState(true);
    const [summer, setSummery] = useState(true);
    const [educate, setEducate] = useState(true);
    const [experience, setExperience] = useState(true);
    const [skill, setSkill] = useState(true);
    const [project, setProject] = useState(true);
    const { resumeData, setResumeData, refresh, setRefresh } = useGlobalContext();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
        handleResumeData();
    }, [refresh])
    const skiller = resumeData?.map((data) => data?.skills).flat()

    const generatePDF = () => {
        if (typeof window !== 'undefined') {
            const element = document.getElementById('pdf-content');
            if (element) {
                import('html2pdf.js').then((html2pdf) => {
                    html2pdf()
                        .set({
                            margin: 0.5,
                            filename: 'resume.pdf',
                            html2canvas: { scale: 2 },
                            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                        })
                        .from(element)
                        .save();
                });
            }
        }
    };


    // const generateDocx = async () => {
    //   const doc = new Document({
    //     sections: [{
    //       children: [
    //         new Paragraph({
    //           children: [new TextRun("Fullstack Developer Resume")],
    //         }),
    //       ],
    //     }],
    //   });

    //   const blob = await Packer.toBlob(doc);
    //   saveAs(blob, "resume.docx");
    // };

    // const downloadHTML = () => {
    //   const htmlContent = `
    //     <html>
    //       <head><title>Resume</title></head>
    //       <body><h1>Fullstack Developer Resume</h1></body>
    //     </html>
    //   `;
    //   const blob = new Blob([htmlContent], { type: 'text/html' });
    //   const url = URL.createObjectURL(blob);

    //   const a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'resume.html';
    //   a.click();
    //   URL.revokeObjectURL(url);
    // };

    return (
        <Box sx={{ px: 2, py: 3 }}>
            <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                gap={2}
                mb={4}
            >
                <Typography variant="h5" fontWeight={600} color='black'>Resume Builder</Typography>
                <Stack direction="row" spacing={2}>
                    {crud === 'visible' ? <Button variant="outlined" onClick={() => {
                        setUpdatedId(resumeData[0]?._id)
                        handleOpen();
                    }} startIcon={<Edit size={18} />}>Edit</Button> : null}
                    {crud === 'visible' ? <Button variant="outlined" onClick={handleOpen} startIcon={<Edit size={18} />}>Create</Button> : null}
                    <Button variant="contained" onClick={generatePDF} startIcon={<Download size={18} />}>Download</Button>
                </Stack>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 4 }} sx={{ color: 'black' }}>
                    <Card>
                        <Box p={3}>
                            <Typography variant="h6" fontWeight={600} mb={2}>Resume Settings</Typography>

                            {['Template', 'Primary Color', 'Font'].map((label, idx) => (
                                <FormControl fullWidth margin="normal" key={`${label}-${idx}`}>
                                    <InputLabel>{label}</InputLabel>
                                    <Select defaultValue="" label={label}>
                                        {label === 'Template' && ['Modern', 'Classic', 'Minimal', 'Creative'].map(option => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                        {label === 'Primary Color' && ['blue', 'teal', 'green', 'purple', 'black'].map(option => (
                                            <MenuItem key={option} onClick={() => setColors(option)} value={option}>{option}</MenuItem>
                                        ))}
                                        {label === 'Font' &&
                                            Object.keys(fontOptions).map((option) => (
                                                <MenuItem
                                                    key={option}
                                                    value={fontOptions[option]}
                                                    onClick={() => setFontFamily(fontOptions[option])}
                                                    style={{ fontFamily: fontOptions[option] }} // Optional preview
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}

                                    </Select>
                                </FormControl>
                            ))}

                            <Box mt={2}>
                                <Typography variant="subtitle1" fontWeight={500}>Sections to Include</Typography>
                                {['Personal Information', 'Professional Summary', 'Work Experience', 'Education', 'Skills', 'Projects'].map((section, idx) => (
                                    <FormControlLabel
                                        key={idx}
                                        control={<Checkbox defaultChecked color="primary" />}
                                        label={section}
                                        checked={section === 'Personal Information' ? personalInfo : section === 'Professional Summary' ? summer : section === 'Work Experience' ? experience : section === 'Education' ? educate : section === 'Skills' ? skill : project}
                                        onClick={() => {
                                            if (section === 'Personal Information') {
                                                setPersonalInfo(!personalInfo);
                                            }
                                            if (section === 'Professional Summary') {
                                                setSummery(!summer);
                                            }
                                            if (section === 'Work Experience') {
                                                setExperience(!experience);
                                            }
                                            if (section === 'Education') {
                                                setEducate(!educate);
                                            }
                                            if (section === 'Skills') {
                                                setSkill(!skill);
                                            }
                                            if (section === 'Projects') {
                                                setProject(!project);
                                            }
                                        }}
                                    />
                                ))}
                            </Box>

                            <Divider sx={{ my: 3 }} />

                            <Typography variant="subtitle1" fontWeight={500} mb={1}>Export Options</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {['PDF'].map((type, i) => (
                                    <Button key={`${type}-${i}`} onClick={() => {
                                        if (type === 'PDF') {
                                            generatePDF();
                                        }
                                    }} variant="outlined" size="small" startIcon={<FileText size={16} />}>{type}</Button>
                                ))}
                            </Stack>
                        </Box>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, lg: 8 }} sx={{ color: 'black' }}>
                    <div id="pdf-content">
                        <Card>
                            <Box p={4}>
                                {resumeData?.map(({ personalData }, index) => (
                                    <Box borderBottom={1} key={`${personalData?.lname}-${index}`} display={personalInfo ? 'block' : 'none'} borderColor="divider" pb={3} mb={4}>
                                        <Typography variant="h5" fontFamily={fontFamily || 'inherit'} color={colors || 'primary'} fontWeight={700}>{`${personalData?.fname} ${personalData?.lname}`}</Typography>
                                        <Typography variant="subtitle1" fontFamily={fontFamily || 'inherit'} color={colors || 'black'} >{personalData?.role}</Typography>
                                        <Stack direction="column" mt={1}>
                                            <Typography variant="body2" fontFamily={fontFamily || 'inherit'} color={'black'} >Email: {personalData?.email}</Typography>
                                            <Typography variant="body2" fontFamily={fontFamily || 'inherit'} color={'black'} >Mobile: {personalData?.number}</Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.6 }}>
                                                <Typography color={'black'} fontSize={14}>Address: </Typography>
                                                <Typography variant="body2" fontFamily={fontFamily || 'inherit'} color={'black'}  >{personalData?.address?.city}</Typography>
                                                <Typography variant="body2" fontFamily={fontFamily || 'inherit'} color={'black'}  >{personalData?.address?.state}</Typography>
                                                <Typography variant="body2" fontFamily={fontFamily || 'inherit'} color={'black'}  >{personalData?.address?.country}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                ))}
                                {/* Summery */}
                                {resumeData?.map(({ summary }, index) => (
                                    <Box display={summer ? 'block' : 'none'} mb={4} key={`summery-${index}`}  >
                                        <Typography variant="h6" color={colors || 'primary'} fontFamily={fontFamily || 'inherit'} fontWeight={600} mb={1}>Professional Summary</Typography>
                                        <Typography variant="body2" fontFamily={fontFamily || 'inherit'} color={'black'}  >
                                            {summary}
                                        </Typography>
                                    </Box>
                                ))}
                                {/* Experience */}
                                <Box display={experience ? 'block' : 'none'} mb={4}>
                                    <Typography variant="h6" fontFamily={fontFamily || 'inherit'} color={colors || 'primary'} fontWeight={600} mb={1}>Work Experience</Typography>
                                    {resumeData.map(({ experience }, idx) => (
                                        <Box key={`${experience?.jobType}-${idx}`} mb={3}>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Typography fontFamily={fontFamily || 'inherit'} color={'black'} fontWeight={600}>{experience?.jobType}</Typography>
                                                <Typography fontFamily={fontFamily || 'inherit'} variant="body2" color="text.secondary">{experience?.joinDate.split('T')[0].split('-')[0]} - {experience?.lastDate.split('T')[0].split('-')[0]}</Typography>
                                            </Stack>
                                            <Typography fontFamily={fontFamily || 'inherit'} color={'black'} fontWeight={500}>{experience?.company}</Typography>
                                            <>
                                                {experience?.performance.map((point, i) => (
                                                    <Typography fontFamily={fontFamily || 'inherit'} variant="body2" key={`${point}-${i}`} color="text.secondary">• {point}</Typography>
                                                ))}
                                            </>
                                            {/* <ul>
                                            {job.duties.map((duty, i) => (
                                                <li key={`${duty}-${i}`}><Typography variant="body2">{duty}</Typography></li>
                                            ))}
                                        </ul> */}
                                        </Box>
                                    ))}
                                </Box>
                                {/* Education */}
                                {resumeData?.map(({ education }, index) => (
                                    <Box mb={4} key={`${education?.ug?.course}-${index}`} display={educate ? 'block' : 'none'} >
                                        <Typography fontFamily={fontFamily || 'inherit'} variant="h6" color={colors || 'primary'} fontWeight={600} mb={1}>{education?.ug?.college}</Typography>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography fontFamily={fontFamily || 'inherit'} color={'black'} fontWeight={600}>{education?.ug?.university}</Typography>
                                            <Typography fontFamily={fontFamily || 'inherit'} variant="body2" color="text.secondary">{`${education?.ug?.start.split('T')[0].split('-')[0]} - ${education?.ug?.end.split('T')[0].split('-')[0]}`}</Typography>
                                        </Stack>
                                        <Typography fontFamily={fontFamily || 'inherit'} color={'black'} variant="body2">{education?.ug?.course}</Typography>
                                    </Box>
                                ))}
                                <Box mb={4} display={skill ? 'block' : 'none'} >
                                    <Typography fontFamily={fontFamily || 'inherit'} variant="h6" color={colors || 'primary'} fontWeight={600} mb={1}>Skills</Typography>
                                    <Grid container spacing={1}>
                                        {skiller?.map((skill, index) => (
                                            <Grid item xs={6} key={`${skill.name}-${index}`}>
                                                <Typography fontFamily={fontFamily || 'inherit'} color={'black'} variant="body2">
                                                    <strong>{skill.name}</strong>,
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                <Box display={project ? 'block' : 'none'} >
                                    <Typography fontFamily={fontFamily || 'inherit'} variant="h6" color={colors || 'primary'} fontWeight={600} mb={1}>Projects</Typography>
                                    <Box>
                                        {projects.slice(0, 3).map((project, index) => (
                                            <Box key={`${project?.name}-${index}`} mb={2}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography fontFamily={fontFamily || 'inherit'} color={'black'} fontWeight={600}>{project?.name}</Typography>
                                                    <Typography fontFamily={fontFamily || 'inherit'} color={'black'} fontSize={12}>{project?.updatedAt.split('T')[0]}</Typography>
                                                </Box>
                                                <Typography fontFamily={fontFamily || 'inherit'} color={'black'} variant="body2" mb={0.5}>{project?.description}</Typography>
                                                <Typography fontFamily={fontFamily || 'inherit'} variant="body2" color="text.secondary" mb={0.5}>Status: {project?.status}</Typography>
                                                <Typography fontFamily={fontFamily || 'inherit'} variant="body2" color="text.secondary" mb={0.5}>Created: {project?.priority}</Typography>
                                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                                    {project.tags.map((tech, i) => (
                                                        <Box key={`${tech}-${i}`} sx={{ p: 0.4 }}>
                                                            <Chip sx={{ fontFamily: fontFamily || 'inherit' }} color={'black'} label={tech} size="small" />
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </div>
                </Grid>
            </Grid>
            <ResumeForm
                open={open}
                handleClose={handleClose}
                style={style}
                setRefresh={setRefresh}
                updatedId={updatedId}
                setUpdatedId={setUpdatedId}
                setOpen={setOpen}
                recentDataId={resumeData?._id}
            />
        </Box>
    );
};

export default Resume;
