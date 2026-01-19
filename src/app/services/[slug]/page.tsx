import React from 'react';
import { serviceContentMap, defaultService } from './data';
import ServiceClient from './ServiceClient';

// 1. Generate Static Params for all known services
export async function generateStaticParams() {
  return Object.keys(serviceContentMap).map((slug) => ({
    slug: slug,
  }));
}

// 2. The Server Component
export default async function ServicePage({ params }: { params: { slug: string } }) {
  // Await params for Next.js 15+ safety
  const { slug } = await params; 

  const service = serviceContentMap[slug] || { ...defaultService, title: slug.replace(/-/g, ' ').toUpperCase() };

  return <ServiceClient service={service} />;
}