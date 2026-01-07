"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import FundingOpportunities from "@/components/FundingOpportunities/FundingOpportunities";
import BusinessService from "@/components/BusinessService/BusinessService";
import GrowthCatalyst from "@/components/GrowthCatalyst/GrowthCatalyst";
import ConsultationForm from "@/components/ConsultationForm/ConsultationForm";
import ExpertConnect from '@/components/ExpertConnect/ExpertConnect';
export default function Home() {  
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Hero />
      <BusinessService />
      <GrowthCatalyst />
      <ConsultationForm />
      {/* <ExpertConnect /> */}
      {/* Note: Since FundingOpportunities already has its own 'whileInView' 
          animations, this wrapper handles the initial page load entrance.
      */}
      <FundingOpportunities />
    </motion.main>
  );
}