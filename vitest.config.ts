import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://github.com/vitest-dev/vitest/issues/1418
// 版本不要乱升 不然UI模式会报错
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
