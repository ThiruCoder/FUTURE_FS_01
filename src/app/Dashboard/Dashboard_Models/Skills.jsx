import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Plus, Filter, Layout, Server, Database, Globe, Smartphone } from 'lucide-react';
import SkillBar from '../UI/SkillBar';
import { useTheme } from '../UI/ThemeContext';

// Mock Skills Data
const initialSkills = [
    { id: 's1', name: 'JavaScript', category: 'Frontend', proficiency: 9, experience: 5, certified: true },
    { id: 's2', name: 'React', category: 'Frontend', proficiency: 8, experience: 4, certified: true },
    { id: 's3', name: 'TypeScript', category: 'Frontend', proficiency: 7, experience: 3, certified: false },
    { id: 's4', name: 'Node.js', category: 'Backend', proficiency: 8, experience: 4, certified: true },
    { id: 's5', name: 'Express', category: 'Backend', proficiency: 8, experience: 4, certified: false },
    { id: 's6', name: 'MongoDB', category: 'Database', proficiency: 7, experience: 3, certified: true },
    { id: 's7', name: 'PostgreSQL', category: 'Database', proficiency: 6, experience: 2, certified: false },
    { id: 's8', name: 'Docker', category: 'DevOps', proficiency: 6, experience: 2, certified: true },
    { id: 's9', name: 'AWS', category: 'DevOps', proficiency: 5, experience: 2, certified: true },
    { id: 's10', name: 'GraphQL', category: 'Backend', proficiency: 7, experience: 2, certified: false },
    { id: 's11', name: 'Tailwind CSS', category: 'Frontend', proficiency: 8, experience: 3, certified: false },
    { id: 's12', name: 'Python', category: 'Backend', proficiency: 6, experience: 3, certified: true },
];
const skillCategories = [
    { name: 'Frontend', icon: <Layout size={20} /> },
    { name: 'Backend', icon: <Server size={20} /> },
    { name: 'Database', icon: <Database size={20} /> },
    { name: 'DevOps', icon: <Globe size={20} /> },
    { name: 'Mobile', icon: <Smartphone size={20} /> },
];

const Skills = ({ top }) => {
    const theme = useTheme();
    const [skills, setSkills] = useState(initialSkills);
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

    const sortedSkills = [...filteredSkills].sort((a, b) => b.proficiency - a.proficiency);

    const totalProficiency = skills.reduce((sum, skill) => sum + skill.proficiency, 0);
    const averageProficiency = skills.length > 0 ? Math.round(totalProficiency / skills.length) : 0;

    return (
        <Box p={4}>
            <Box display="flex" justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                <Typography variant="h5" fontWeight={600}
                    color='black'>Skills Inventory</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Plus size={18} />}
                >
                    Add Skill
                </Button>
            </Box>

            <Grid container spacing={4} mt={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Skill Categories</Typography>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton selected={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
                                    <ListItemIcon><Filter size={18} /></ListItemIcon>
                                    <ListItemText primary="All Skills" />
                                </ListItemButton>
                            </ListItem>
                            {skillCategories.map((category, index) => (
                                <ListItem disablePadding key={index}>
                                    <ListItemButton selected={activeCategory === category.name.toLowerCase()} onClick={() => setActiveCategory(category.name.toLowerCase())}>
                                        <ListItemIcon>{category.icon}</ListItemIcon>
                                        <ListItemText primary={category.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="h6" gutterBottom>Skill Summary</Typography>
                        <Box>
                            <Box display="flex" justifyContent="space-between" mb={1}><Typography variant="body2">Total Skills</Typography><Typography variant="body2" fontWeight={500}>{skills.length}</Typography></Box>
                            <Box display="flex" justifyContent="space-between" mb={1}><Typography variant="body2">Certified Skills</Typography><Typography variant="body2" fontWeight={500}>{skills.filter(skill => skill.certified).length}</Typography></Box>
                            <Box display="flex" justifyContent="space-between" mb={1}><Typography variant="body2">Average Proficiency</Typography><Typography variant="body2" fontWeight={500}>{averageProficiency}/10</Typography></Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            {activeCategory === 'all' ? 'All Skills' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Skills`}
                        </Typography>
                        {sortedSkills.length === 0 ? (
                            <Box textAlign="center" py={6}>
                                <Typography variant="body1" color="text.secondary">No skills found</Typography>
                                <Typography variant="body2" color="text.disabled">
                                    {activeCategory === 'all' ? 'Try adding some skills to your inventory' : `Try adding skills in the ${activeCategory} category`}
                                </Typography>
                            </Box>
                        ) : (
                            <Box>
                                {sortedSkills.map(skill => (
                                    <SkillBar
                                        key={skill.id}
                                        name={skill.name}
                                        percentage={skill.proficiency}
                                        category={skill.category}
                                        experience={skill.experience}
                                        certified={skill.certified}
                                    />
                                ))}
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Skills;
