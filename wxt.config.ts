import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'New Blank Tab',
    description: 'Display a blank page when opening new tabs.',
    homepage_url: 'https://github.com/xianghongai/browser-new-blank-tab',
    icons: {
      16: '16.png',
      48: '48.png',
      128: '128.png',
    },
    // The extension only replaces the new tab page with a bundled blank document, so it stays permission-free.
    incognito: 'not_allowed',
    externally_connectable: {
      ids: [],
    },
  },
});
