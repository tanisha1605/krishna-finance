"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import FundingOpportunities from "@/components/FundingOpportunities/FundingOpportunities";
import BusinessService from "@/components/BusinessService/BusinessService";
import GrowthCatalyst from "@/components/GrowthCatalyst/GrowthCatalyst";
import ConsultationForm from "@/components/ConsultationForm/ConsultationForm";
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection';
import SuccessMetrics from '@/components/SuccessMetrics/SuccessMetrics';
import BlogSection from '@/components/BlogSection/BlogSection';
import Partners from "@/components/Partners/Partners";
export default function Home() {  
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Hero />
      <FundingOpportunities />
      <BusinessService />
      <GrowthCatalyst />
      <ConsultationForm />
      <TestimonialSection />
      <SuccessMetrics />
      <Partners />
      <BlogSection />
    </motion.main>
  );
}