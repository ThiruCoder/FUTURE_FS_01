"use client";
import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Paper,
    Chip,
    Divider,
    CircularProgress,
    Button,
    Grid,
    Avatar,
    Stack,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import {
    Calendar,
    Clock,
    Users,
    Tag,
    ArrowLeft,
    Globe,
    Github,
    FileText,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { AxiosInstance } from '@/app/ClientSideGlobalErrorHandler/GlobalErrorHandler';
import Image from 'next/image';

const WholeData = ({ showId }) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!showId) return;

        const fetchProject = async () => {
            try {
                setLoading(true);
                if (!showId) return console.log('ID is required.');
                await AxiosInstance.get(`/project/getProjectById/${showId}`)
                    .then((res) => setProject(res.data))
                    .catch((err) => console.log(err))
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [showId]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AlertCircle color="error" size={32} />
                    <Typography variant="h6" color="error">
                        {error}
                    </Typography>
                </Paper>
            </Container>
        );
    }

    if (!project) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h6">Project not found</Typography>
            </Container>
        );
    }
    console.log(project);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>

            <Paper elevation={3} sx={{ p: 4 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }} >
                        <Stack spacing={3}>
                            <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
                                <Image
                                    src={project?.image?.url}
                                    alt="Project Image"
                                    layout="responsive"
                                    width={200}
                                    height={200}
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </Box>

                            {/* {project.features && project.features.length > 0 && (
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Key Features
                                    </Typography>
                                    <List dense>
                                        {project.features.map((feature, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <CheckCircle size={20} />
                                                </ListItemIcon>
                                                <ListItemText primary={feature} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            )} */}
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }} >
                        <Stack spacing={3}>
                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Tag size={20} /> Details
                                </Typography>

                                <Stack spacing={2} sx={{ mt: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Calendar size={18} />
                                        <Typography variant="body2" fontWeight={600} >
                                            Created: <span style={{ fontWeight: 400 }}>{new Date(project.createdAt).toLocaleDateString()}</span>
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Clock size={18} />
                                        <Typography variant="body2" fontWeight={600} >
                                            Last updated: <span style={{ fontWeight: 400 }}>{new Date(project.updatedAt).toLocaleDateString()}</span>
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>

                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Tag size={20} /> Project Status
                                </Typography>

                                <Stack spacing={2} sx={{ mt: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Calendar size={18} />
                                        <Typography variant="body2" fontWeight={600} >
                                            Status: <span style={{ fontWeight: 400 }}>{project?.status}</span>
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Clock size={18} />
                                        <Typography variant="body2" fontWeight={600} >
                                            Priority: <span style={{ fontWeight: 400 }}>{project?.priority}</span>
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>

                            {project.tags && project.tags.length > 0 && (
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Typography variant="h6" gutterBottom fontWeight={600} >
                                        Technologies
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tags.map((tech, index) => (
                                            <Chip key={index} label={tech} variant="outlined" />
                                        ))}
                                    </Box>
                                </Paper>
                            )}

                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="h6" gutterBottom fontWeight={600} >
                                    Links
                                </Typography>
                                <Stack spacing={1}>
                                    {project.url && (
                                        <Button
                                            startIcon={<Globe size={18} />}
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            fullWidth
                                            variant="outlined"
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                    {/* {project.githubUrl && (
                                        <Button
                                            startIcon={<Github size={18} />}
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            fullWidth
                                            variant="outlined"
                                        >
                                            GitHub Repository
                                        </Button>
                                    )} */}
                                    {/* {project.documentationUrl && (
                                        <Button
                                            startIcon={<FileText size={18} />}
                                            href={project.documentationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            fullWidth
                                            variant="outlined"
                                        >
                                            Documentation
                                        </Button>
                                    )} */}
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default WholeData;