import React from 'react'
import HeroSection from '../components/home/HeroSection'
import PropertyList from '../components/home/PropertyList'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CallToActionSection from '../components/home/CallToActionSection'
import BlogSection from '../components/home/BlogSection'
import TeamSection from '../components/home/TeamSection'
import FAQSection from '../components/home/FAQSection'
import PartnersSection from '../components/home/PartnersSection'
import NewsletterSection from '../components/home/NewsletterSection'

export default function HommePage() {
  return (
    <>
     <HeroSection />
     <PropertyList />
     <AboutSection />
     <ServicesSection />
     <TestimonialsSection />
     <CallToActionSection />
     <BlogSection />
     <TeamSection />
     <FAQSection />
     <PartnersSection />
     <NewsletterSection /> 
    </>
  )
}
