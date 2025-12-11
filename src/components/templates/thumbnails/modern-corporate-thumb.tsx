
'use client';

import { cn } from "@/lib/utils";

export default function ModernCorporateThumb() {
  return (
    <div className={cn("w-full h-full bg-white p-2 flex flex-col font-sans overflow-hidden")}>
      {/* Main container with border */}
      <div className="flex-grow w-full rounded-md border border-slate-300 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 bg-white flex items-center justify-between p-2 border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            <div className="h-2 w-12 rounded-full bg-slate-200"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded-full bg-slate-200"></div>
            <div className="w-4 h-1 rounded-full bg-slate-200"></div>
            <div className="w-4 h-1 rounded-full bg-slate-200"></div>
          </div>
          <div className="w-8 h-3 rounded bg-slate-700"></div>
        </div>

        {/* Hero Section */}
        <div className="w-full bg-slate-100 flex-grow p-4 flex flex-col justify-center items-center text-center">
            {/* Headline */}
            <div className="w-4/5 h-2.5 rounded-full bg-slate-800"></div>
            <div className="w-3/5 h-2.5 rounded-full bg-slate-800 mt-1"></div>
            
            {/* Sub-headline */}
            <div className="w-5/6 h-1 rounded-full bg-slate-400 mt-2"></div>
            <div className="w-2/3 h-1 rounded-full bg-slate-400 mt-0.5"></div>
            
            {/* Buttons */}
            <div className="flex justify-center gap-1 mt-3">
                <div className="w-10 h-4 rounded-sm bg-slate-800"></div>
                <div className="w-10 h-4 rounded-sm bg-white border border-slate-300"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
