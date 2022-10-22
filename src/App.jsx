import { ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline } from '@mui/material';
import routes from './routes';
import Sidebar from './scenes/global/Sidebar';

import './App.css'
import Topbar from './scenes/global/Topbar';
import { useRoutes } from 'react-router-dom';

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})


function App() {
  const router = useRoutes(routes)
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="App">
            <Sidebar />
            <main>
              <Topbar />
              {router}
            </main>
          </div>

        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  )
}

export default App
