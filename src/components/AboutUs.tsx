import { FunctionComponent } from 'react';
import styles from '../app/styles/AboutUs.module.css';

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.child} alt="" src="./AboutUs/Group 24.svg" />

      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>About us</div>
        <img className={styles.groupChild} alt="" src="./AboutUs/Vector 2.svg" />
        <img className={styles.groupChild} alt="" src="./AboutUs/Vector 3.svg" />
      </div>

      <div className={styles.theHumanVooooiceContainer}>
        <p>
          The <span className={styles.humanVooooice}>Human Vooooice</span> Amid the Tide of Technology
        </p>
      </div>

      <div className={styles.weAreAContainer}>
        <p>We are a group of young people who believe in the future.</p>
        <p>We build bridges between artificial intelligence, entrepreneurship, and the human spirit.</p>
        <p>Through in-depth one-on-one interviews,</p>
        <p>we document the true thoughts and lonely journeys of China’s AI entrepreneurs.</p>
      </div>

      <img className={styles.item} alt="" src="./AboutUs/Vector 177.svg" />
      <img className={styles.inner} alt="" src="./AboutUs/Group 25.svg" />
    </div>
  );
};

export default AboutUs;