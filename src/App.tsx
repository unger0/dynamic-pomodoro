import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <Fragment>
      <Heading>
        Olá, Mundo!
        
        <button>
          <TimerIcon />
        </button>

      </Heading>
      <p>
        dreamt for so long. My flesh was dull gold... and my blood, rotted.
        Corpse after corpse, left in my wake. As I awaited... his return. Heed
        my words. I am Malenia. Blade of Miquella. And I have never known
        defeat.
      </p>
    </Fragment>
  );
}
