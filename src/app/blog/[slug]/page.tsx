import React from 'react';
import { blogContentMap } from './data';
import BlogClient from './BlogClient';

// 1. Generate Static Params (Runs on Server at Build Time)
export async function generateStaticParams() {
  return Object.keys(blogContentMap).map((slug) => ({
    slug: slug,
  }));
}

// 2. The Server Component
export default async function BlogPage({ params }: { params: { slug: string } }) {
  // Await params if using Next.js 15+ (Safe practice)
  const { slug } = await params; 

  const post = blogContentMap[slug] || blogContentMap["limited-liability-partnership-guide"];

  // 3. Render the Client Component and pass data
  return <BlogClient post={post} />;
}