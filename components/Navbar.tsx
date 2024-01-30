'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import UserButton from './user-button';
import { NavigationMenuDemo } from './menuitems';

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;
            setHasScrolled(window.pageYOffset > scrollThreshold);
        };

        // Set up scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navbarChange = hasScrolled ? 'border-b border-slate-100/50 bg-[#2e2e2e]' : 'bg-transparent';
    return (
        <nav className={`fixed top-0 w-full z-50 ${navbarChange}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className="flex-shrink-0"
                    >
                        <Link href='/'  className="flex items-center"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                            
                                <motion.img 
                                    src={isHovered ? '/chad.svg' : '/chad.svg'}
                                    width={50}
                                    height={50}
                                    alt='logos2'
                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                                />
                                
                        </Link>
                    </motion.div>
                    <div className="hidden md:flex items-center text-lg md:text-lg font-medium mr-2 navbar space-x-7">
                        <NavigationMenuDemo />
                        <Link href="/roadmap">
                            <p className="hover:opacity-60 px-3 py-2 rounded-md text-lg font-medium">Roadmap</p>
                        </Link>
                        <Link href="/courses">
                            <p className="hover:opacity-60 px-3 py-2 rounded-md text-lg font-medium">Courses</p>
                        </Link>
                        <Link href="/coaching">
                            <p className="hover:opacity-60 px-3 py-2 rounded-md text-lg font-medium">Coaching</p>
                        </Link>
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

