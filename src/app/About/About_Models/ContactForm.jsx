'use client';
import { useActionState, useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, Tooltip } from '@mui/material';
import { Github, Linkedin, Mail, MessageSquare, Phone } from 'lucide-react';
import Link from 'next/link';
import { sendMail } from './sendMail';
import { SubmitButton } from './ss';


const ContactForm = () => {
    const [state, formAction] = useActionState(sendMail, { success: false })


    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'rgb(250, 191, 207)',
            py: 6,
            flexDirection: 'column'
        }}>
            <Box sx={{ mb: 4 }}>
                <Typography fontWeight={700} fontSize={'2em'} color='rgb(32, 1, 9)' textAlign={'center'}>Contact Form</Typography>
            </Box>
            <Box
                sx={{
                    width: 400,
                    background: 'rgb(32, 1, 9)',
                    border: '2px solid transparent',
                    padding: '32px 24px',
                    fontSize: '14px',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    boxSizing: 'border-box',
                    borderRadius: '16px',

                }}
            >
                <Box
                    component="form"
                    action={formAction}
                    method="post"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <Typography
                            component="label"
                            htmlFor="email"
                            sx={{
                                display: 'block',
                                mb: '5px',
                                color: 'rgb(250, 191, 207)',
                                fontWeight: 600,
                                fontSize: '12px'
                            }}
                        >
                            Name
                        </Typography>
                        <TextField
                            id="name"
                            name="name"
                            type='text'
                            required
                            fullWidth
                            InputProps={{
                                startAdornment: <Mail size={16} style={{ marginRight: 8, color: '#717171' }} />,
                                sx: {

                                    borderRadius: '8px',
                                    color: '#fff',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #414141',
                                    '&:focus': {
                                        borderColor: '#e81cff',
                                        outline: 'none'
                                    },
                                    '&::placeholder': {
                                        opacity: 0.5
                                    }
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <Typography
                            component="label"
                            htmlFor="email"
                            sx={{
                                display: 'block',
                                mb: '5px',
                                color: 'rgb(250, 191, 207)',
                                fontWeight: 600,
                                fontSize: '12px'
                            }}
                        >
                            Email
                        </Typography>
                        <TextField
                            id="email"
                            name="email"
                            type='email'
                            required
                            fullWidth
                            InputProps={{
                                startAdornment: <Mail size={16} style={{ marginRight: 8, color: '#717171' }} />,
                                sx: {
                                    borderRadius: '8px',
                                    color: '#fff',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #414141',
                                    '&:focus': {
                                        borderColor: '#e81cff',
                                        outline: 'none'
                                    },
                                    '&::placeholder': {
                                        opacity: 0.5
                                    }
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <Typography
                            component="label"
                            htmlFor="message"
                            sx={{
                                display: 'block',
                                mb: '5px',
                                color: 'rgb(250, 191, 207)',
                                fontWeight: 600,
                                fontSize: '12px'
                            }}
                        >
                            How Can We Help You?
                        </Typography>
                        <TextField
                            id="message"
                            name="message"
                            required
                            multiline
                            rows={4}
                            fullWidth
                            InputProps={{
                                startAdornment: <MessageSquare size={16} style={{ marginRight: 8, color: '#717171', alignSelf: 'flex-start', marginTop: 4 }} />,
                                sx: {
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #414141',
                                    '&:focus': {
                                        borderColor: '#e81cff',
                                        outline: 'none'
                                    }
                                }
                            }}
                        />
                        {state?.success && <Typography sx={{ fontSize: '1em', mt: 2 }}>Message sent successfully!</Typography>}
                        {state?.error && <Typography sx={{ color: 'red' }}>{state?.error}</Typography>}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <SubmitButton />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Link href={'https://github.com/ThiruCoder'}>
                                <Tooltip title='Github'>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Github color='white' opacity={0.8} size={18} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href={'https://www.linkedin.com/in/charipalli-thirumalesh-a7a127350/'}>
                                <Tooltip title='LinkedIn'>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Linkedin color='white' opacity={0.8} size={18} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href={'tel:7569583293'}>
                                <Tooltip title='Phone'>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Phone color='white' opacity={0.8} size={18} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href={'thiruthedeveloper@gmail.com'}>
                                <Tooltip title='Mail'>
                                    <IconButton sx={{ ':hover': { bgcolor: 'purple' } }}>
                                        <Mail color='white' opacity={0.8} size={18} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;

