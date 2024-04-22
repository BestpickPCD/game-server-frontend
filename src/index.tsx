// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from './contexts/SidebarContext';
import * as serviceWorker from './serviceWorker';
import { store } from './app/store';
import { Provider } from 'react-redux';

// ReactDOM.render(
//   <Provider store={store}>
//     <HelmetProvider>
//       <SidebarProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </SidebarProvider>
//     </HelmetProvider>
//   </Provider>,
//   document.getElementById('root')
// );



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <HelmetProvider>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </HelmetProvider>
    </Provider>
);