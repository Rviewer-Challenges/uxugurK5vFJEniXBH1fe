import { MantineProvider } from "@mantine/core"
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import '@mantine/core/styles.css';
import { App } from './app.tsx';

render(
    <RecoilRoot>
        <MantineProvider>
            <App />
        </MantineProvider>

    </RecoilRoot>
    , document.getElementById('app')!)
