"use client"

import AboutHeader from '@/components/Header';
import Team from '@/components/Team';
import Branch from '@/components/Branch';
import Newsletter from '@/components/Newsletter';
import Disclaimer from '@/components/Disclaimer';
import React from 'react';
import Navigation from '@/components/NavBar';

export default function About() {
  return (
    <div>
      <Navigation />
      <AboutHeader />
      <Team />
      <Branch/>
      <Newsletter />
      <Disclaimer />
    </div>
  );
}