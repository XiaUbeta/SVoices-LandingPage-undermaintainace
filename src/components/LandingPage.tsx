"use client"

import React from "react"
import { FunctionComponent } from 'react';
import '../app/globals.css';


const SocialMedia: FunctionComponent = () => {
  return (
    <div className="web">
      <img className="icon" alt="" src="/Background.svg" />
      <div className="logo">
        <img className="intersectIcon" alt="" src="/Intersect.svg" />
        <img className="singularityVoicesIcon" alt="" src="/Singularity Voices.svg" />
      </div>
      <div className="wereWorkingOn">We're working on it.</div>
      <div className="div">
        <p className="p">We're preparing</p>
        <p className="p">Maybe you can have a look in our Social Media...?</p>
      </div>
      <a href="https://www.xiaohongshu.com/user/profile/66647ed40000000007005670?xsec_token=YBQ8ULi8ZMhpGAcYzVN2DVlnYvzcMbqncDYScfVyAGi2Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=6831e797000000000d008ca1&apptime=1752755206&share_id=8b1b4a719bec4b5c91dd6910fae0de8d"><img className="rednoteIcon" alt="" src="Rednote.svg" /></a>
    </div>);
};

export default SocialMedia;
