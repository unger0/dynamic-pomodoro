import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Fragment } from 'react/jsx-runtime';

export function Logo() {
  return (
    <Fragment>
      <div className={styles.logo}>
        <a className={styles.logoLink}href="#">
          <TimerIcon/>
          <span>Dynamic</span>
        </a>
      </div>
    </Fragment>
  );
}
