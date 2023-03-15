const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ideation Machine',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#243746' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/equinor/ideation-machine-frontend/ab4e09d820b8442b079793a007557267568a2723/src/NIdeationMachineLogo-NoSlogan.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [

      {
        text: 'Docs',
        link: 'docs/'
      },
      {
        text: 'Get started',
        link: ''
      },
      {
        text: 'About us',
        link: ''
      },
      {
        text: 'Contact us',
        link: ''
      },
      {
        text: 'Use cases',
        link: '/use-cases/'
      },
      {
        text: 'Contact us',
        link: '/contact-us/'
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'disaster-recovery/',
            'contact/',
            'access/',
            'azure-ml/'
          ]
        }
      ],
      '/environments/': [
        {
          title: 'Environments',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'geo-operation-center',
            'subsurface-analytics'
          ]
        }
      ],
      '/use-cases/': [
        {
          title: 'Use Cases',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'epi_sub_exd_global_analytics',
            'esp-analytics-peregino-brazil',
            'goc-data_driven_well_placement',
            'h2s_reservoir_sounding',
            'mmp-natural_gas_trading_prediction',
            'mud_gas-real_time_fluid_identification'
          ]
        },
      ],
      '/contact-us/': [
        {
          title: '',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'contact-us',
          ]
        }
      ],
      '/': [], // Fallback to README.md
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
