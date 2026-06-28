import React, { useRef, useState, useEffect } from 'react';
import { 
  PanelLeft, 
  ChevronLeft, 
  ChevronRight, 
  Monitor, 
  RotateCw, 
  Share, 
  Plus, 
  Copy,
  Grid, 
  Compass, 
  Layers, 
  ListTodo, 
  Sparkles 
} from 'lucide-react';
import { Logo } from './Logo';

export const ScaledDashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const handleResize = () => {
      const containerWidth = container.offsetWidth;
      const targetWidth = 896; // design width
      const newScale = Math.min(containerWidth / targetWidth, 1);
      setScale(newScale);
      setHeight(inner.offsetHeight * newScale);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    resizeObserver.observe(inner);

    handleResize();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden" style={{ height }}>
      <div
        ref={innerRef}
        className="absolute top-0 left-0"
        style={{
          width: '896px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const DashboardMockup: React.FC = () => {
  const tableRows = [
    {
      question: 'What are the top 5 safety tips for elder mobility aids?',
      volume: '4,500/mo',
      difficulty: 'Low',
      status: 'Drafting',
    },
    {
      question: 'How to design an anti-slip bathroom layout for seniors?',
      volume: '12,200/mo',
      difficulty: 'Medium',
      status: 'Ready',
    },
    {
      question: 'What is the best wheelchair brand for active rehabilitation?',
      volume: '8,900/mo',
      difficulty: 'High',
      status: 'Ready',
    },
    {
      question: 'Are smart emergency alarms for seniors tax deductible?',
      volume: '3,100/mo',
      difficulty: 'Medium',
      status: 'Drafting',
    },
    {
      question: 'How to prevent senior falls at home during winter?',
      volume: '14,500/mo',
      difficulty: 'Low',
      status: 'Ready',
    },
  ];

  return (
    <div className="rounded-t-2xl overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left w-full select-none font-sans">
      {/* Title Bar */}
      <div className="bg-[#242427] border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
        {/* Left: Traffic lights and toggle */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 ml-2">
            <PanelLeft className="w-3.5 h-3.5 text-white/40 cursor-pointer hover:text-white/60" />
            <ChevronLeft className="w-3.5 h-3.5 text-white/40 cursor-pointer hover:text-white/60" />
            <ChevronRight className="w-3.5 h-3.5 text-white/25 cursor-default" />
          </div>
        </div>

        {/* Center: URL Bar */}
        <div className="bg-[#1a1a1c] rounded-md px-6 py-1 text-[10px] text-white/60 flex items-center gap-1.5 w-64 justify-center">
          <Monitor className="w-3 h-3 text-white/40" />
          <span className="tracking-tight">questly.ai</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <RotateCw className="w-3.5 h-3.5 text-white/40 cursor-pointer hover:text-white/60" />
          <Share className="w-3.5 h-3.5 text-white/40 cursor-pointer hover:text-white/60" />
          <Plus className="w-3.5 h-3.5 text-white/40 cursor-pointer hover:text-white/60" />
          <Copy className="w-3.5 h-3.5 text-white/40 cursor-pointer hover:text-white/60" />
        </div>
      </div>

      {/* Main Layout Workspace */}
      <div className="flex min-h-[500px]">
        {/* Sidebar (22% Width) */}
        <div className="w-[22%] border-r border-white/5 bg-[#1e1e21] px-3 py-3.5 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            {/* Sidebar header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-white/70">
                <Logo className="w-4 h-4" />
                <span className="text-[11px] font-semibold tracking-tight">Questly</span>
              </div>
              <Grid className="w-3.5 h-3.5 text-white/30 cursor-pointer hover:text-white/50" />
            </div>

            {/* Workspace Badge */}
            <div className="flex items-center gap-2 px-2 py-1.5 bg-white/[0.03] ring-1 ring-white/5 rounded-md">
              <div className="w-4 h-4 rounded bg-[#e8553f] flex items-center justify-center text-[9px] font-bold text-white">
                C
              </div>
              <span className="text-[10px] text-white/80 font-medium truncate">CareNest</span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white/[0.04] text-white/90">
                <Compass className="w-3.5 h-3.5 text-white/60" />
                <span className="text-[10px] font-medium">Uncover</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded text-white/60 hover:text-white/80 cursor-pointer transition-colors">
                <Layers className="w-3.5 h-3.5 text-white/40" />
                <span className="text-[10px] font-medium">Subjects</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded text-white/60 hover:text-white/80 cursor-pointer transition-colors">
                <ListTodo className="w-3.5 h-3.5 text-white/40" />
                <span className="text-[10px] font-medium">Inbox</span>
              </div>
            </div>

            {/* Recent Articles */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-[8px] uppercase tracking-wider text-white/35 px-2 font-medium">Recent Articles</span>
              <div className="flex flex-col gap-1.5 px-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] text-white/70 truncate">Elderly Mobility Aids</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]/70 shrink-0" title="Ready to Release" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] text-white/70 truncate">Home Safety Check</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]/70 shrink-0" title="Ready to Release" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] text-white/70 truncate">Fall Prevention Tips</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]/70 shrink-0" title="Ready to Release" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-2 flex items-center justify-between px-2 text-[9px] text-white/40">
            <span>v1.2.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#1a1a1c] p-6 flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#e8553f] flex items-center justify-center text-sm font-bold text-white shadow-md select-none">
                C
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">CareNest</h3>
                <p className="text-[10px] text-white/45">Active Workspace • Last sync 2m ago</p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e8553f] hover:bg-[#d04631] text-white text-[10px] font-medium rounded-full shadow-sm transition-colors">
              <Sparkles className="w-3 h-3" />
              Generate
            </button>
          </div>

          {/* Stats Grid (4 columns) */}
          <div className="grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5 py-3">
            <div className="px-4">
              <span className="text-[8px] tracking-wider text-white/35 block uppercase font-medium">Released</span>
              <span className="text-lg font-medium text-white block mt-0.5">62</span>
              <span className="text-[8px] text-white/35 mt-0.5 block">Posts indexed</span>
            </div>
            <div className="px-4">
              <span className="text-[8px] tracking-wider text-white/35 block uppercase font-medium">Breadth</span>
              <span className="text-lg font-medium text-white block mt-0.5">12</span>
              <span className="text-[8px] text-white/35 mt-0.5 block">Subject groups</span>
            </div>
            <div className="px-4">
              <span className="text-[8px] tracking-wider text-white/35 block uppercase font-medium">Remaining</span>
              <span className="text-lg font-medium text-white block mt-0.5">412</span>
              <span className="text-[8px] text-white/35 mt-0.5 block">Ready to draft</span>
            </div>
            <div className="px-4">
              <span className="text-[8px] tracking-wider text-white/35 block uppercase font-medium">Max Reach</span>
              <span className="text-lg font-medium text-white block mt-0.5">3,156,200</span>
              <span className="text-[8px] text-white/35 mt-0.5 block">Searches a month</span>
            </div>
          </div>

          {/* Subject Cards (3 columns) */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-white/[0.03] ring-1 ring-white/5 p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-white">Elder Care</span>
                <span className="text-[9px] text-[#28c840] bg-[#28c840]/10 px-1.5 py-0.5 rounded-full">84% score</span>
              </div>
              <p className="text-[9px] text-white/40 leading-relaxed">Focus on safety guidelines, daily care routines, and family assistance.</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[8px] text-white/50 bg-white/5 px-1 py-0.5 rounded">24 Articles</span>
                <span className="text-[8px] text-white/50 bg-white/5 px-1 py-0.5 rounded">1.2M Searches</span>
              </div>
            </div>

            <div className="rounded-lg bg-white/[0.03] ring-1 ring-white/5 p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-white">Mobility</span>
                <span className="text-[9px] text-[#28c840] bg-[#28c840]/10 px-1.5 py-0.5 rounded-full">92% score</span>
              </div>
              <p className="text-[9px] text-white/40 leading-relaxed">Walking aids, wheelchair access, rehabilitation and active training.</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[8px] text-white/50 bg-white/5 px-1 py-0.5 rounded">18 Articles</span>
                <span className="text-[8px] text-white/50 bg-white/5 px-1 py-0.5 rounded">980K Searches</span>
              </div>
            </div>

            <div className="rounded-lg bg-white/[0.03] ring-1 ring-white/5 p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-white">Home Safety</span>
                <span className="text-[9px] text-[#febc2e] bg-[#febc2e]/10 px-1.5 py-0.5 rounded-full">68% score</span>
              </div>
              <p className="text-[9px] text-white/40 leading-relaxed">Smart alarms, hazard prevention, anti-slip layouts, and emergency prep.</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[8px] text-white/50 bg-white/5 px-1 py-0.5 rounded">20 Articles</span>
                <span className="text-[8px] text-white/50 bg-white/5 px-1 py-0.5 rounded">976K Searches</span>
              </div>
            </div>
          </div>

          {/* Drafting Inbox Table */}
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-medium text-white/50">Drafting Inbox</span>
            <div className="rounded-lg border border-white/5 overflow-hidden bg-white/[0.01]">
              <table className="w-full text-[10px] text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-white/40 text-[8px] uppercase tracking-wider">
                    <th className="py-2 px-3 font-medium w-[55%]">Question</th>
                    <th className="py-2 px-3 font-medium w-[15%]">Volume</th>
                    <th className="py-2 px-3 font-medium text-center w-[15%]">Difficulty</th>
                    <th className="py-2 px-3 font-medium text-right w-[15%]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-2 px-3 text-white/80 font-medium truncate" title={row.question}>
                        {row.question}
                      </td>
                      <td className="py-2 px-3 text-white/60">{row.volume}</td>
                      <td className="py-2 px-3 text-center">
                        <span className="inline-block px-1.5 py-0.5 rounded bg-white/5 text-white/50 text-[8px] font-semibold">
                          {row.difficulty}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-right font-medium">
                        {row.status === 'Drafting' ? (
                          <span className="text-[#febc2e]/80">Drafting</span>
                        ) : (
                          <span className="text-white/45">Ready</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
