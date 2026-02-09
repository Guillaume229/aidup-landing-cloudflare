import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight max-w-4xl mx-auto">
            View Your Child's Development Through the Lens of Experts—Within Your Phone
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Simple tools that fit into your daily routine, not another complicated app to learn
          </p>
        </div>
        
        {/* Main Layout: Two phones with cards */}
        <div className="relative max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            
            {/* LEFT SIDE: Voice Journaling Phone */}
            <div className="relative flex-shrink-0 lg:mr-8">
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                
                {/* Phone Frame */}
                <div className="relative bg-gray-800 rounded-[2.5rem] p-2 w-[240px]" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)' }}>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="bg-gray-50 rounded-[2rem] overflow-hidden">
                    
                    {/* App Header - minimal */}
                    <div className="bg-white border-b border-gray-100 p-3 pt-6">
                      <p className="text-center text-gray-700 font-medium text-sm">Journaling</p>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 space-y-4 bg-white">
                      {/* Child selector */}
                      <div className="text-center">
                        <span className="text-gray-800 font-medium text-sm">Michael</span>
                        <span className="text-gray-400 ml-1 text-xs">▾</span>
                      </div>
                      
                      {/* Mic button */}
                      <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                          <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex justify-center gap-6">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Journal entries */}
                      <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-xs text-gray-800">My journal entries</span>
                          <span className="text-gray-400 text-sm">×</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-2 flex items-center justify-between border border-gray-100">
                            <div>
                              <p className="text-[11px] font-medium text-gray-800">Sleep Disruption and Sugar Cravings</p>
                              <p className="text-[9px] text-gray-400">Jan 30th, 2026</p>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-2 flex items-center justify-between border border-gray-100">
                            <div>
                              <p className="text-[11px] font-medium text-gray-800">Improvement in Sensory Responses</p>
                              <p className="text-[9px] text-gray-400">Jan 30th, 2026</p>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recording indicator */}
                      <div className="text-center text-gray-400 text-[10px]">
                        RECORDING<br/>
                        <span className="font-mono text-gray-500">00:02:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-1.5 whitespace-nowrap z-20">
                  <svg className="w-3.5 h-3.5 text-[#F57D48]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                  <span className="text-xs text-gray-700 font-medium">Voice-to-text journaling</span>
                </div>
              </div>
            </div>
            
            {/* RIGHT SIDE: Radar Phone + Insight Cards */}
            <div className="relative flex-1 min-h-[580px]">
              
              {/* Radar Chart Phone (positioned behind cards, greyed out) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 transform rotate-2 z-0 opacity-90">
                
                {/* Phone Frame */}
                <div className="relative bg-gray-800 rounded-[2.5rem] p-2 w-[240px]" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)' }}>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-10"></div>
                  
                  {/* Screen with grey overlay */}
                  <div className="bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Grey overlay */}
                    <div className="absolute inset-0 bg-gray-200/40 z-10 pointer-events-none"></div>
                    
                    {/* Header */}
                    <div className="bg-gradient-to-b from-amber-50 to-amber-100/50 p-3 pt-6">
                      <p className="text-center text-gray-800 font-semibold text-xs">Developmental Progress</p>
                      <p className="text-center text-gray-500 text-[8px]">Observations & Assessments Combined</p>
                      
                      {/* Legend */}
                      <div className="flex justify-center gap-3 mt-2">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#F57D48]"></div>
                          <span className="text-[7px] text-gray-600">Your Observations</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
                          <span className="text-[7px] text-gray-600">ATEC Assessment</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Radar Chart SVG */}
                    <div className="p-2 bg-gradient-to-b from-amber-50/50 to-white">
                      <svg viewBox="0 0 200 200" className="w-full h-auto">
                        {/* Background circles */}
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#f3e8e0" strokeWidth="1"/>
                        <circle cx="100" cy="100" r="52" fill="none" stroke="#f3e8e0" strokeWidth="1"/>
                        <circle cx="100" cy="100" r="35" fill="none" stroke="#f3e8e0" strokeWidth="1"/>
                        <circle cx="100" cy="100" r="17" fill="none" stroke="#f3e8e0" strokeWidth="1"/>
                        
                        {/* Axis lines */}
                        <line x1="100" y1="30" x2="100" y2="170" stroke="#f3e8e0" strokeWidth="1"/>
                        <line x1="39" y1="65" x2="161" y2="135" stroke="#f3e8e0" strokeWidth="1"/>
                        <line x1="39" y1="135" x2="161" y2="65" stroke="#f3e8e0" strokeWidth="1"/>
                        <line x1="30" y1="100" x2="170" y2="100" stroke="#f3e8e0" strokeWidth="1"/>
                        
                        {/* ATEC Assessment (teal, inner) */}
                        <polygon 
                          points="100,50 135,65 145,100 135,135 100,145 65,135 55,100 65,65"
                          fill="rgba(20, 184, 166, 0.15)"
                          stroke="#14B8A6"
                          strokeWidth="2"
                        />
                        
                        {/* Your Observations (orange, outer) */}
                        <polygon 
                          points="100,35 150,55 160,100 150,145 100,160 50,145 40,100 50,55"
                          fill="rgba(245, 125, 72, 0.2)"
                          stroke="#F57D48"
                          strokeWidth="2"
                        />
                        
                        {/* Data points - orange */}
                        <circle cx="100" cy="35" r="4" fill="#F57D48"/>
                        <circle cx="150" cy="55" r="4" fill="#F57D48"/>
                        <circle cx="160" cy="100" r="4" fill="#F57D48"/>
                        <circle cx="150" cy="145" r="4" fill="#F57D48"/>
                        <circle cx="100" cy="160" r="4" fill="#F57D48"/>
                        <circle cx="50" cy="145" r="4" fill="#F57D48"/>
                        <circle cx="40" cy="100" r="4" fill="#F57D48"/>
                        <circle cx="50" cy="55" r="4" fill="#F57D48"/>
                        
                        {/* Labels */}
                        <text x="100" y="18" textAnchor="middle" className="text-[8px] fill-gray-600" fontSize="8">Communication</text>
                        <text x="168" y="58" textAnchor="start" className="text-[8px] fill-gray-600" fontSize="8">Social</text>
                        <text x="175" y="103" textAnchor="start" className="text-[8px] fill-gray-600" fontSize="8">Sensory</text>
                        <text x="158" y="158" textAnchor="start" className="text-[8px] fill-gray-600" fontSize="8">Behavior</text>
                        <text x="100" y="185" textAnchor="middle" className="text-[8px] fill-gray-600" fontSize="8">Cognitive</text>
                        <text x="25" y="158" textAnchor="start" className="text-[8px] fill-gray-600" fontSize="8">Motor</text>
                        <text x="5" y="103" textAnchor="start" className="text-[8px] fill-gray-600" fontSize="8">Self-Care</text>
                      </svg>
                    </div>
                    
                    {/* Bottom stats */}
                    <div className="px-2 pb-3 bg-white">
                      <div className="flex gap-1">
                        <div className="flex-1 bg-gray-50 rounded-lg p-1.5 text-center border border-gray-100">
                          <p className="text-[7px] text-gray-500 uppercase">This Month</p>
                          <p className="text-sm font-bold text-gray-800">23</p>
                          <p className="text-[7px] text-gray-500">entries</p>
                        </div>
                        <div className="flex-1 bg-amber-50 rounded-lg p-1.5 text-center border border-amber-200">
                          <p className="text-[7px] text-gray-500 uppercase">Focus</p>
                          <p className="text-[10px] font-bold text-gray-800">Speech</p>
                        </div>
                        <div className="flex-1 bg-green-50 rounded-lg p-1.5 text-center border border-green-200">
                          <p className="text-[7px] text-gray-500 uppercase">Gains</p>
                          <p className="text-[10px] font-bold text-gray-800">Social</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 5 Insight Cards - Poker spread */}
              <div className="relative ml-[180px] flex items-center justify-center min-h-[500px]">
                
                {/* Card 1: PT (leftmost) */}
                <div 
                  className="insight-card absolute bg-white rounded-2xl w-[185px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ 
                    zIndex: 10, 
                    transform: 'rotate(-15deg) translateX(-120px) translateY(30px)',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 6px 12px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">PT</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Physiotherapist</h4>
                    
                    <div className="space-y-1.5">
                      <div className="bg-blue-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-blue-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Significant gross motor improvements—9 consecutive basketball shots after a year of practice.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-gray-700 mb-0.5">Key Insight</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Swimming 5 laps without floaties shows improved core stability.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-blue-600">+40%</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 2: OT */}
                <div 
                  className="insight-card absolute bg-white rounded-2xl w-[185px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ 
                    zIndex: 15, 
                    transform: 'rotate(-6deg) translateX(-50px) translateY(5px)',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 6px 12px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F57D48] to-[#FF9C7A] flex items-center justify-center">
                        <span className="text-white font-bold text-xs">OT</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Occupational Therapy</h4>
                    
                    <div className="space-y-1.5">
                      <div className="bg-orange-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-orange-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Sensory seeking behaviors decreased. Michael tolerates different textures during meals.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-gray-700 mb-0.5">Recommendation</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Introduce more tactile play with varied materials.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-to-r from-[#F57D48] to-[#FF9C7A] rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-[#F57D48]">+35%</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 3: SALT (center, prominent) */}
                <div 
                  className="insight-card absolute bg-white rounded-2xl w-[185px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ 
                    zIndex: 20, 
                    transform: 'rotate(1deg) translateX(20px) translateY(-15px)',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 6px 12px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#14B8A6] to-teal-400 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">SALT</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Speech & Language</h4>
                    
                    <div className="space-y-1.5">
                      <div className="bg-teal-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-teal-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          23 new words this month. Michael initiated conversation with a peer unprompted.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-gray-700 mb-0.5">Next Focus</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Work on two-word combinations like "more juice" and "want ball."
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#14B8A6] to-teal-400 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-[#14B8A6]">+52%</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 4: ABA */}
                <div 
                  className="insight-card absolute bg-white rounded-2xl w-[185px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ 
                    zIndex: 14, 
                    transform: 'rotate(8deg) translateX(95px) translateY(15px)',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 6px 12px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">ABA</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Behavioral Analysis</h4>
                    
                    <div className="space-y-1.5">
                      <div className="bg-purple-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-purple-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Morning routine compliance up 60%. Fewer transition difficulties with visual schedule.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-gray-700 mb-0.5">Pattern Detected</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Challenging behaviors correlate with sleep quality.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-purple-600">+28%</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 5: BIOMED (rightmost) */}
                <div 
                  className="insight-card absolute bg-white rounded-2xl w-[185px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ 
                    zIndex: 11, 
                    transform: 'rotate(16deg) translateX(170px) translateY(40px)',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 6px 12px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">BIOMED</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Biomedical</h4>
                    
                    <div className="space-y-1.5">
                      <div className="bg-emerald-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-emerald-800 mb-0.5">Patterns Emerging</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Energy improvements—stronger at basketball, exercises, and music retention.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-gray-700 mb-0.5">Watch For</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Sugar cravings and night waking may indicate gut flora changes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-emerald-600">+22%</span>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Badge for insights section */}
              <div className="absolute bottom-0 right-1/4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 whitespace-nowrap z-30">
                <svg className="w-4 h-4 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <span className="text-sm text-gray-700 font-medium">Multi-therapist insights</span>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        {/* Trust text below */}
        <p className="text-center text-gray-500 text-sm mt-16 max-w-xl mx-auto">
          No complicated setup. Just speak naturally about your day, and let AI organize your observations into actionable insights.
        </p>
        
      </div>
    </section>
  );
};

export default SolutionSection;
