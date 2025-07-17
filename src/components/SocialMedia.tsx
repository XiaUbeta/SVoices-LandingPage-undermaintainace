import { FunctionComponent } from 'react';
import styles from '../app/styles/SocialMedia.module.css';


const SocialMedia: FunctionComponent = () => {
  return (
    <div className={styles.web}>
      <img className={styles.icon} alt="" src="/SocialMedia/Background.svg" />
      <div className={styles.logo}>
        <img className={styles.intersectIcon} alt="" src="/SocialMedia/Intersect.svg" />
        <img className={styles.singularityVoicesIcon} alt="" src="/SocialMedia/Singularity Voices.svg" />
      </div>
      <div className={styles.wereWorkingOn}>We're working on it.</div>
      <div className={styles.div}>
        <p className={styles.p}>We're preparing</p>
        <p className={styles.p}>Maybe you can have a look in our Social Media...?</p>
      </div>
      <a href="https://www.xiaohongshu.com/user/profile/66647ed40000000007005670?xsec_token=YBQ8ULi8ZMhpGAcYzVN2DVlnYvzcMbqncDYScfVyAGi2Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=6831e797000000000d008ca1&apptime=1752755206&share_id=8b1b4a719bec4b5c91dd6910fae0de8d"><img className={styles.rednoteIcon} alt="" src="/SocialMedia/Rednote.svg" /></a>
    </div>);
};

export default SocialMedia;
