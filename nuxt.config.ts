// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/public/css/bootstrap.min.css',
    '~/public/css/pogo-slider.min.css',
    '~/public/css/style.css',
    '~/public/css/responsive.css',
    '~/public/css/custom.css',
  ],
  app: {
    head: {
      script: [
        { src: '/js/jquery.min.js', type: 'text/javascript' },
        { src: '/js/popper.min.js', type: 'text/javascript' },
        { src: '/js/bootstrap.min.js', type: 'text/javascript' },
        { src: '/js/jquery.magnific-popup.min.js', type: 'text/javascript' },
        { src: '/js/jquery.pogo-slider.min.js', type: 'text/javascript' },
        { src: '/js/slider-index.js', type: 'text/javascript' },
        { src: '/js/form-validator.min.js', type: 'text/javascript' },
        { src: '/js/contact-form-script.js', type: 'text/javascript' },
        { src: '/js/custom.js', type: 'text/javascript' },
        
      ]
    }
  }
})
