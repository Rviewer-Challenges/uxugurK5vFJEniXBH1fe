import { MantineProvider } from "@mantine/core"
import { render } from 'preact';
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
