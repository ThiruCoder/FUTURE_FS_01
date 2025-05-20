'use client';

let verifyRole = 'user';
if (typeof window !== 'undefined') {
    verifyRole = JSON.parse(localStorage.getItem('role')) || 'user';
}

export const LocalRoute = [
    { title: 'Home', icon: '', link: '/' },
    { title: 'Projects', icon: '', link: '/Projects' },
    { title: 'Blog', icon: '', link: '/Blog' },
    { title: 'About', icon: '', link: '/About' },
    verifyRole === 'admin'
        ? { title: 'Dashboard', icon: '', link: '/Dashboard' }
        : null,
].filter(Boolean); // Remove nulls
