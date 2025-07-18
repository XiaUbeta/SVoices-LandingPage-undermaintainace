"use client"

import React, { useState, useEffect, FunctionComponent } from 'react';
import '../app/globals.css';

const LandingPage: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="phone">
        <div className="logo">
          <img className="intersectIcon" alt="" src="Intersect.svg" />
          <img className="singularityVoicesIcon" alt="" src="Singularity Voices.svg" />
        </div>
        <div className="wereWorkingOn">We're working on it.</div>
        <div className="div1">
          <p className="p">我们正在准备中</p>
          <p className="p">或许你可以看看我们的社交媒体...?</p>
        </div>
        <a href="https://www.xiaohongshu.com/user/profile/66647ed40000000007005670?xsec_token=YBQ8ULi8ZMhpGAcYzVN2DVlnYvzcMbqncDYScfVyAGi2Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=6831e797000000000d008ca1&apptime=1752755206&share_id=8b1b4a719bec4b5c91dd6910fae0de8d" target="_blank" rel="noopener noreferrer">
          <img className="rednoteIcon" alt="Rednote" src="Rednote.svg" />
        </a>
      </div>
    );
  }

  return (
    <div className="web min-h-screen bg-black flex relative overflow-hidden" style={{ backgroundImage: `url(/Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="w-1/2 flex flex-col px-8 md:px-12 lg:px-16 relative">
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-6 max-w-full">
            <div className="logo flex items-center gap-2">
              <img className="intersectIcon w-8 h-8" alt="" src="/Intersect.svg" />
              <img className="singularityVoicesIcon w-44 h-5" alt="" src="/Singularity Voices.svg" />
            </div>
            <div className="wereWorkingOn text-5xl md:text-6xl text-white font-light">We're working on it.</div>
            <div className="div space-y-1 text-gray-400 text-base md:text-lg font-light">
              <p>我们正在准备中</p>
              <p>或许你可以看看我们的社交媒体...?</p>
            </div>
            <a href="https://www.xiaohongshu.com/user/profile/66647ed40000000007005670?xsec_token=YBQ8ULi8ZMhpGAcYzVN2DVlnYvzcMbqncDYScfVyAGi2Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=6831e797000000000d008ca1&apptime=1752755206&share_id=8b1b4a719bec4b5c91dd6910fae0de8d" target="_blank" rel="noopener noreferrer">
              <img className="rednoteIcon w-8 h-8" alt="Rednote" src="Rednote.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default LandingPage;
