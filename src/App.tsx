//import { Heading } from './components/Heading';
//import { TimerIcon } from 'lucide-react';

import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <Fragment>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </Fragment>
  );
}
