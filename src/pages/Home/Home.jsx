import React from 'react';
import Banner from './Banner';
import Features from './Features';
import { Stats } from './Stats';
import Testimonials from './Testimonials';

export default function Home() {
    return (
        <div className="space-y-20">
            <Banner />
            <Features />
            <Stats />
            <Testimonials />
        </div>
    );
}
