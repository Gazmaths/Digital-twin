'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-slate-300 transition">
              <span title="An AI assistant trained on my experience, projects, and resume">
                AI Digital Twin — Gazal
              </span>

            </Link>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`transition ${
                isActive('/') 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'hover:text-slate-300'
              } pb-1`}
            >
              Home
            </Link>
            <Link 
              href="/resume" 
              className={`transition ${
                isActive('/resume') 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'hover:text-slate-300'
              } pb-1`}
            >
              Resume
            </Link>
             <Link 
              href="/portfolio" 
              className={`transition ${
                isActive('/portfolio') 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'hover:text-slate-300'
              } pb-1`}
            >
              Portfolio
            </Link>
            <Link 
              href="/github" 
              className={`transition ${
                isActive('/github') 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'hover:text-slate-300'
              } pb-1`}
            >
              Repositories
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
