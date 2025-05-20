"use client";
import React from 'react';
import { Card, CardContent, CardHeader, Typography, Grid, Box, Chip, Avatar, IconButton, Container, Divider } from '@mui/material';
import { ArrowRight, CalendarDays, Clock, Tag, BookOpen } from 'lucide-react';
import { styled } from '@mui/material/styles';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Image from 'next/image';

const BlogCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[8],
    },
}));

const BlogHeader = styled(CardHeader)(({ theme }) => ({
    paddingBottom: 0,
    '& .MuiCardHeader-title': {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: theme.palette.text.primary,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '80%',
        boxOrient: 'vertical',
        display: '-webkit-box'
    },
    '& .MuiCardHeader-subheader': {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
}));

const BlogContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
    paddingTop: 0,
    '& .MuiTypography-h5': {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
    },
    '& .MuiTypography-body1': {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
    },
}));

const ReadMoreButton = styled(IconButton)(({ theme }) => ({
    marginLeft: 'auto',
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const BlogChip = styled(Chip)(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.action.selected,
}));


const Blog = () => {
    const blogPosts = [
        {
            id: '1',
            title: 'Building Scalable Microservices with Node.js and Docker',
            excerpt: 'Learn how to architect and containerize Node.js microservices for horizontal scaling in production environments.',
            date: '2023-05-15',
            readTime: '8 min',
            category: 'Backend',
            tags: ['Node.js', 'Docker', 'Microservices'],
            author: {
                name: 'Alex Johnson',
            },
        },
        {
            id: '2',
            title: 'Modern React Patterns for Clean and Maintainable Code',
            excerpt: 'Explore advanced React patterns including compound components, render props, and hooks composition.',
            date: '2023-06-02',
            readTime: '12 min',
            category: 'Frontend',
            tags: ['React', 'TypeScript', 'Patterns'],
            author: {
                name: 'Sarah Chen',
            },
        },
        {
            id: '3',
            title: 'Optimizing Next.js Applications for Performance',
            excerpt: 'Practical techniques to improve your Next.js application loading speed and Core Web Vitals scores.',
            date: '2023-06-18',
            readTime: '10 min',
            category: 'Fullstack',
            tags: ['Next.js', 'Performance', 'Web Vitals'],
            author: {
                name: 'Jamal Williams',
            },
        },
    ];

    return (
        <>
            <Header />

            <Box sx={{ py: 8, px: { xs: 2, md: 6 }, mt: 8 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" color='black' component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
                        Latest <span style={{ color: '#6366f1' }}>Tech</span> Articles
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
                        Insights, tutorials, and best practices on fullstack development, cloud architecture, and modern web technologies.
                    </Typography>
                </Box>
                <Box sx={{ bgcolor: 'white', mt: 6, borderRadius: 2, boxShadow: 1, p: 4, mb: 4, mb: 10 }}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 800, fontSize: '2.3em', color: 'black' }}>Achievements</Typography>
                    <Container>
                        <Grid container spacing={2} sx={{ mt: 2, bgcolor: 'rgb(255, 255, 255)' }}>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                <CardHeader
                                    title={<Typography sx={{ color: 'black', fontWeight: 600, fontSize: '1.2em' }}>10+ Fullstack Applications</Typography>}
                                    subheader={<Box>
                                        <Typography>
                                            Create web applications like E-Commerce, Net Banking, Portfolio, Wather report, AI chat and more. With use tools and libraries like Material UI, Cloudinary, JWT.

                                        </Typography>
                                    </Box>}
                                />


                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ width: '100%', height: '400px', position: 'relative' }}>
                                    <Image
                                        src="/stepsLevel.png"
                                        alt="Steps Level"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            mixBlendMode: 'normal',
                                            backgroundColor: 'transparent',
                                            borderRadius: 4,
                                        }}
                                    />
                                </Box>

                            </Grid>
                        </Grid>

                    </Container>
                </Box>
                <Divider sx={{ borderBottom: '1px solid', borderColor: 'divider', mb: 4 }} />
                <Box mt={6}>
                    <Typography variant="h4" color='black' component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
                        Recent <span style={{ color: '#6366f1' }}>Blog</span> Posts
                    </Typography>
                    <Grid container spacing={4} >

                        {blogPosts.map((post) => (
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ p: 2 }} key={post.id}>
                                <BlogCard >
                                    <BlogHeader

                                        avatar={<Avatar alt={post.author.name} />}
                                        title={
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        color: 'black',
                                                        fontWeight: 700,
                                                        fontSize: '1em',
                                                        textDecoration: 'none',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 1,
                                                        maxWidth: '80%',
                                                        textWrap: 'nowrap'
                                                    }}
                                                    variant="h5"
                                                    component="span"
                                                    color="text.primary"
                                                >
                                                    {post.title}
                                                </Typography>
                                            </Box>

                                        }
                                        subheader={
                                            <>
                                                <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <CalendarDays size={16} style={{ marginRight: 4 }} />
                                                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                </Box>
                                                <Box component="span" sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                                    <Clock size={16} style={{ marginRight: 4 }} />
                                                    {post.readTime} read
                                                </Box>
                                            </>
                                        }
                                    />
                                    <BlogContent sx={{ mt: 3 }}>
                                        <Typography variant="body1" paragraph>
                                            {post.excerpt}
                                        </Typography>
                                        {/* <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Tag size={16} style={{ marginRight: 8 }} />
                                            <Typography variant="caption" color="text.secondary">
                                                {post.category}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            {post.tags.map((tag) => (
                                                <BlogChip key={tag} label={tag} size="small" />
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ReadMoreButton aria-label="Read more">
                                                <ArrowRight size={20} />
                                            </ReadMoreButton>
                                        </Box> */}
                                    </BlogContent>
                                </BlogCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <IconButton
                        size="large"
                        sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <BookOpen size={20} style={{ marginRight: 8 }} />
                        View All Articles
                    </IconButton>
                </Box> */}
            </Box>
            <Footer />
        </>
    );
};

export default Blog;