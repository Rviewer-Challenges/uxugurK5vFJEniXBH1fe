import { render } from 'preact';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/viva-light/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { RecoilRoot } from 'recoil';
import { App } from './app.tsx';

render(
    <RecoilRoot>
        <PrimeReactProvider value={{ unstyled: false, inputStyle: "filled" }}>
            <App />
        </PrimeReactProvider>
    </RecoilRoot>
    , document.getElementById('app')!)
