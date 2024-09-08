import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stable Diffusion Notes - Capricorncd",
  description: "Notes on learning or organizing stable diffusion",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: './basis' }
    ],

    sidebar: [
      {
        text: 'Basis',
        items: [
          { text: 'Checkpoint', link: './basis/checkpoint' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'WebUI',
        items: [
          { text: 'Checkpoint', link: './basis/checkpoint' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'ComfyUI',
        items: [
          { text: 'Checkpoint', link: './basis/checkpoint' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/capricorncd/stable-diffusion-notes' }
    ]
  }
})
