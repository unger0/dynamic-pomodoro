import type React from 'react';
import styles from './Heading.module.css';
import { Fragment } from 'react/jsx-runtime';

type HeadingProps = {
  children: React.ReactNode;
}

export function Heading({children}: HeadingProps) {
  return (
    <Fragment>

      <h1 className={styles.heading}>{children}</h1>
      
    </Fragment>
  );
}
