import path from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    AutoImport({
      eslintrc:{
        enabled:true,
        filepath:'./.eslintrc-auto-import.json' //此文件为重新启动项目生成的文件
      },
      dts:'./auto-imports.d.ts',//此文件配置保存后系统自动生成
      dirs: [
        './src/hooks',
        './src/components/**' // only root modules
      ],
      imports:['react', 'react-router-dom'] //此处可填写需要自动引入的库
    }),
    UnoCSS(),
    react(),
  ],
})
