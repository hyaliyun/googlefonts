import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [
  
  {
    text: 'Docs',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Quick Start', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      { text: 'Glossary', link: '/glossary/' },
      { text: 'Error Reference', link: '/error-reference/' },
      {
        text: 'Angular Material',
        link: 'https://material.angular.io/'
      },
      {
        text: 'Material Design',
        link: 'https://m3.material.io/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: 'angular',
    activeMatch: `^/angular/`,
    link: '/angular/'
  },
  {
    text: 'flutter',
    activeMatch: `^/flutter/`,
    link: '/flutter/'
  },
  {
    text: 'Ecosystem',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Resources',
        items: [
          { text: 'Partners', link: '/partners/' },
          { text: 'Themes', link: '/ecosystem/themes' },
          { text: 'UI Components', link: 'https://a.543x.com' },
          {
            text: 'Certification',
            link: 'https://b.543x.com'
          },
          { text: 'Jobs', link: 'https://c.543x.com' },
          { text: 'T-Shirt Shop', link: 'https://d.543x.com' }
        ]
      },
      {
        text: 'Official Libraries',
        items: [
          { text: 'Vue Router', link: 'https://e.543x.com/' },
          { text: 'Pinia', link: 'https://f.543x.com/' },
          { text: 'Tooling Guide', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: 'Video Courses',
        items: [
          {
            text: 'Vue Mastery',
            link: 'https://g.543x.com'
          },
          {
            text: 'Vue School',
            link: 'https://h.543x.com'
          }
        ]
      },
      {
        text: 'Help',
        items: [
          {
            text: 'Discord Chat',
            link: 'https://i.543x.com'
          },
          {
            text: 'GitHub Discussions',
            link: 'https://github.com/hyaliyun/googlefonts'
          },
          { text: 'DEV Community', link: 'https://www.z2.pw' }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'Blog', link: 'https://c.543x.com' },
          { text: 'Twitter', link: 'https://d.543x.com' },
          { text: 'Events', link: 'https://e.543x.com' },
          { text: 'CMS', link: 'https://w.z2.pw' },
          { text: 'GoogleSheets', link: 'https://a.z2.pw' },
          { text: 'Tailwind', link: 'https://a.434x.com' },
          { text: 'Three.js', link: 'https://b.434x.com' },
          {
            text: 'The Documentary',
            link: 'https://www.youtube.com/@543x-com'
          },
          { text: 'Newsletters', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: 'About',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Team', link: '/about/team' },
      { text: 'Releases', link: '/about/releases' },
      {
        text: 'Community Guide',
        link: '/about/community-guide'
      },
      { text: 'Code of Conduct', link: '/about/coc' },
      { text: 'Privacy Policy', link: '/about/privacy' },
    ]
  },
  {
    text: 'SHOWCASE',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        {
          text: 'Quick Start',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'material',
      items: [
        {
          text: 'building-from-source',
          link: '/guide/material/building-from-source'
        },
        {
          text: 'catalog-app',
          link: '/guide/material/catalog-app'
        },
        {
          text: 'contributing',
          link: '/guide/material/contributing'
        },
        {
          text: 'directorystructure',
          link: '/guide/material/directorystructure'
        },
        {
          text: 'getting-started',
          link: '/guide/material/getting-started'
        },
        {
          text: 'theming',
          link: '/guide/material/theming'
        },
        {
          text: 'using-snapshot-version',
          link: '/guide/material/using-snapshot-version'
        },
        {
          text: 'CanonicalLayouts',
          link: '/guide/material/CanonicalLayouts'
        },
        {
          text: 'PredictiveBack',
          link: '/guide/material/PredictiveBack'
        }
      ]
    }, 
    {
      text: 'theming',
      items: [
        {
          text: 'Color',
          link: '/guide/theming/Color'
        },
        {
          text: 'Dark',
          link: '/guide/theming/Dark'
        },
        {
          text: 'Motion',
          link: '/guide/theming/Motion'
        },
        {
          text: 'Shape',
          link: '/guide/theming/Shape'
        },
        {
          text: 'Typography',
          link: '/guide/theming/Typography'
        }
      ]
    }, 
     {
      text: 'components',
      items: [
        {
          text: 'async',
          link: '/guide/components/async'
        },
        {
          text: 'attrs',
          link: '/guide/components/attrs'
        },
        {
          text: 'BadgeDrawable',
          link: '/guide/components/BadgeDrawable'
        },
        {
          text: 'Banner',
          link: '/guide/components/Banner'
        },
        {
          text: 'BottomAppBar',
          link: '/guide/components/BottomAppBar'
        },
        {
          text: 'BottomNavigation',
          link: '/guide/components/BottomNavigation'
        },
        {
          text: 'BottomSheet',
          link: '/guide/components/BottomSheet'
        },
        {
          text: 'Button',
          link: '/guide/components/Button'
        },
        {
          text: 'Card',
          link: '/guide/components/Card'
        },
        {
          text: 'Carousel',
          link: '/guide/components/Carousel'
        },
        {
          text: 'Checkbox',
          link: '/guide/components/Checkbox'
        },
        {
          text: 'Chip',
          link: '/guide/components/Chip'
        },
        {
          text: 'DataTable',
          link: '/guide/components/DataTable'
        },
        {
          text: 'DatePicker',
          link: '/guide/components/DatePicker'
        },
        {
          text: 'Dialog',
          link: '/guide/components/Dialog'
        },
        {
          text: 'Divider',
          link: '/guide/components/Divider'
        },
        {
          text: 'events',
          link: '/guide/components/events'
        },
        {
          text: 'FloatingActionButton',
          link: '/guide/components/FloatingActionButton'
        },
        {
          text: 'ImageList',
          link: '/guide/components/ImageList'
        },
        {
          text: 'List',
          link: '/guide/components/List'
        },
        {
          text: 'LoadingIndicator',
          link: '/guide/components/LoadingIndicator'
        },
        {
          text: 'MaterialTextView',
          link: '/guide/components/MaterialTextView'
        },
        {
          text: 'Menu',
          link: '/guide/components/Menu'
        },
        {
          text: 'NavigationDrawer',
          link: '/guide/components/NavigationDrawer'
        },
        {
          text: 'NavigationRail',
          link: '/guide/components/NavigationRail'
        },
        {
          text: 'ProgressIndicator',
          link: '/guide/components/ProgressIndicator'
        },
        {
          text: 'props',
          link: '/guide/components/props'
        },
        {
          text: 'provide-inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'RadioButton',
          link: '/guide/components/RadioButton'
        },
        {
          text: 'registration',
          link: '/guide/components/registration'
        },
        {
          text: 'Search',
          link: '/guide/components/Search'
        },
        {
          text: 'SideSheet',
          link: '/guide/components/SideSheet'
        },
        {
          text: 'Slider',
          link: '/guide/components/Slider'
        },
        {
          text: 'slots',
          link: '/guide/components/slots'
        },
        {
          text: 'Snackbar',
          link: '/guide/components/Snackbar'
        },
        {
          text: 'Switch',
          link: '/guide/components/Switch'
        },
        {
          text: 'Tabs',
          link: '/guide/components/Tabs'
        },
        {
          text: 'TextField',
          link: '/guide/components/TextField'
        },
        {
          text: 'TimePicker',
          link: '/guide/components/TimePicker'
        },
        {
          text: 'Tooltip',
          link: '/guide/components/Tooltip'
        },
        {
          text: 'TopAppBar',
          link: '/guide/components/TopAppBar'
        },
        {
          text: 'v-model',
          link: '/guide/components/v-model'
        }
      ]
    },
    {
      text: 'Essentials',
      items: [
        {
          text: 'Creating an Application',
          link: '/guide/essentials/application'
        },
        {
          text: 'Template Syntax',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Reactivity Fundamentals',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Computed Properties',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Class and Style Bindings',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Conditional Rendering',
          link: '/guide/essentials/conditional'
        },
        { text: 'List Rendering', link: '/guide/essentials/list' },
        {
          text: 'Event Handling',
          link: '/guide/essentials/event-handling'
        },
        { text: 'Form Input Bindings', link: '/guide/essentials/forms' },
        {
          text: 'Lifecycle Hooks',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'Watchers', link: '/guide/essentials/watchers' },
        { text: 'Template Refs', link: '/guide/essentials/template-refs' },
        {
          text: 'Components Basics',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'Components In-Depth',
      items: [
        {
          text: 'Registration',
          link: '/guide/components/registration'
        },
        { text: 'Props', link: '/guide/components/props' },
        { text: 'Events', link: '/guide/components/events' },
        { text: 'Component v-model', link: '/guide/components/v-model' },
        {
          text: 'Fallthrough Attributes',
          link: '/guide/components/attrs'
        },
        { text: 'Slots', link: '/guide/components/slots' },
        {
          text: 'Provide / inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'Async Components',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Reusability',
      items: [
        {
          text: 'Composables',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Custom Directives',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Plugins', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'Built-in Components',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Scaling Up',
      items: [
        { text: 'Single-File Components', link: '/guide/scaling-up/sfc' },
        { text: 'Tooling', link: '/guide/scaling-up/tooling' },
        { text: 'Routing', link: '/guide/scaling-up/routing' },
        {
          text: 'State Management',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Testing', link: '/guide/scaling-up/testing' },
        {
          text: 'Server-Side Rendering (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'Best Practices',
      items: [
        {
          text: 'Production Deployment',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Performance',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Accessibility',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Security',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Overview', link: '/guide/typescript/overview' },
        {
          text: 'TS with Composition API',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'TS with Options API',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Extra Topics',
      items: [
        {
          text: 'Ways of Using Vue',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API FAQ',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Reactivity in Depth',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Rendering Mechanism',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Render Functions & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue and Web Components',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Animation Techniques',
          link: '/guide/extras/animation'
        }
      ]
    }
  ],
  '/api/': [
    {
      text: 'components',
      items: [
        {
          text: 'button',
          link: '/api/components/button'
        },
        {
          text: 'checkbox',
          link: '/api/components/checkbox'
        },
        {
          text: 'chip',
          link: '/api/components/chip'
        },
        {
          text: 'dialog',
          link: '/api/components/dialog'
        },
        {
          text: 'divider',
          link: '/api/components/divider'
        },
        {
          text: 'elevation',
          link: '/api/components/elevation'
        },
        {
          text: 'fab',
          link: '/api/components/fab'
        },
        {
          text: 'focus-ring',
          link: '/api/components/focus-ring'
        },
        {
          text: 'icon',
          link: '/api/components/icon'
        },
        {
          text: 'icon-button',
          link: '/api/components/icon-button'
        },
        {
          text: 'list',
          link: '/api/components/list'
        },
        {
          text: 'menu',
          link: '/api/components/menu'
        },
        {
          text: 'progress',
          link: '/api/components/progress'
        },
        {
          text: 'radio',
          link: '/api/components/radio'
        },
        {
          text: 'ripple',
          link: '/api/components/ripple'
        },
        {
          text: 'select',
          link: '/api/components/select'
        },
        {
          text: 'slider',
          link: '/api/components/slider'
        },
        {
          text: 'switch',
          link: '/api/components/switch'
        },
        {
          text: 'tabs',
          link: '/api/components/tabs'
        },
        {
          text: 'text-field',
          link: '/api/components/text-field'
        }
      ]
    },
    {
      text: 'theming',
      items: [
        {
          text: 'color',
          link: '/api/theming/color'
        },
        {
          text: 'intro',
          link: '/api/theming/intro'
        },
        {
          text: 'quick-start',
          link: '/api/theming/quick-start'
        },
        {
          text: 'README',
          link: '/api/theming/README'
        },
        {
          text: 'roadmap',
          link: '/api/theming/roadmap'
        },
        {
          text: 'shape',
          link: '/api/theming/shape'
        },
        {
          text: 'size',
          link: '/api/theming/size'
        },
        {
          text: 'support',
          link: '/api/theming/support'
        },
        {
          text: 'typography',
          link: '/api/theming/typography'
        }
      ]
    },
    {
      text: 'Global API',
      items: [
        { text: 'Application', link: '/api/application' },
        {
          text: 'General',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'Composition API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'Reactivity: Core',
          link: '/api/reactivity-core'
        },
        {
          text: 'Reactivity: Utilities',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'Reactivity: Advanced',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'Lifecycle Hooks',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: 'Dependency Injection',
          link: '/api/composition-api-dependency-injection'
        },
        {
          text: 'Helpers',
          link: '/api/composition-api-helpers'
        }
      ]
    },
    {
      text: 'Options API',
      items: [
        { text: 'Options: State', link: '/api/options-state' },
        { text: 'Options: Rendering', link: '/api/options-rendering' },
        {
          text: 'Options: Lifecycle',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Options: Composition',
          link: '/api/options-composition'
        },
        { text: 'Options: Misc', link: '/api/options-misc' },
        {
          text: 'Component Instance',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'Built-ins',
      items: [
        { text: 'Directives', link: '/api/built-in-directives' },
        { text: 'Components', link: '/api/built-in-components' },
        {
          text: 'Special Elements',
          link: '/api/built-in-special-elements'
        },
        {
          text: 'Special Attributes',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: 'Single-File Component',
      items: [
        { text: 'Syntax Specification', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS Features', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: 'Advanced APIs',
      items: [
        { text: 'Custom Elements', link: '/api/custom-elements' },
        { text: 'Render Function', link: '/api/render-function' },
        { text: 'Server-Side Rendering', link: '/api/ssr' },
        { text: 'TypeScript Utility Types', link: '/api/utility-types' },
        { text: 'Custom Renderer', link: '/api/custom-renderer' },
        { text: 'Compile-Time Flags', link: '/api/compile-time-flags' }
      ]
    }
  ],
  '/angular/': [
    {
      text: 'contributing',
      items: [
        {
          text: 'auto-issue-locking',
          link: '/angular/contributing/auto-issue-locking'
        },
        {
          text: 'branches-and-versioning',
          link: '/angular/contributing/branches-and-versioning'
        },
        {
          text: 'building-and-testing-angular',
          link: '/angular/contributing/building-and-testing-angular'
        },
        {
          text: 'building-with-bazel',
          link: '/angular/contributing/building-with-bazel'
        },
        {
          text: 'caretaking',
          link: '/angular/contributing/caretaking'
        },
        {
          text: 'coding-standards',
          link: '/angular/contributing/coding-standards'
        },
        {
          text: 'debugging-tips',
          link: '/angular/contributing/debugging-tips'
        },
        {
          text: 'dev_preview_and_experimental',
          link: '/angular/contributing/dev_preview_and_experimental'
        },
        {
          text: 'documentation-authoring',
          link: '/angular/contributing/documentation-authoring'
        },
        {
          text: 'feature-request-consideration',
          link: '/angular/contributing/feature-request-consideration'
        },
        {
          text: 'public-api-surface',
          link: '/angular/contributing/public-api-surface'
        },
        {
          text: 'running-benchmarks',
          link: '/angular/contributing/running-benchmarks'
        },
        {
          text: 'saved-issue-replies',
          link: '/angular/contributing/saved-issue-replies'
        },
        {
          text: 'triage-and-labelling',
          link: '/angular/contributing/triage-and-labelling'
        },
        {
          text: 'using-fixup-commits',
          link: '/angular/contributing/using-fixup-commits'
        }
      ]
    },
    {
      text: 'devtools',
      items: [
        {
          text: 'firefox',
          link: '/angular/devtools/firefox'
        },
        {
          text: 'overview',
          link: '/angular/devtools/overview'
        },
        {
          text: 'release',
          link: '/angular/devtools/release'
        },
        {
          text: 'safari',
          link: '/angular/devtools/safari'
        },
        {
          text: 'dummy',
          link: '/angular/devtools/dummy'
        },
      ]
    },
    {
      text: 'goldens',
      items: [
        { text: 'animations', link: '/angular/goldens/animations' },
        {
          text: 'common',
          link: '/angular/goldens/common'
        },
        { text: 'compiler_options.api', link: '/angular/goldens/compiler_options.api' },
        {
          text: 'core',
          link: '/angular/goldens/core'
        },
        { text: 'elements', link: '/angular/goldens/elements' },
        {
          text: 'error_code.api',
          link: '/angular/goldens/error_code.api'
        },
        { text: 'errors.api', link: '/angular/goldens/errors.api' },
        {
          text: 'extended_template',
          link: '/angular/goldens/extended_template'
        },
        { text: 'forms', link: '/angular/goldens/forms' },
        {
          text: 'global_utils.api',
          link: '/angular/goldens/global_utils.api'
        },
        { text: 'localize', link: '/angular/goldens/localize' },
        {
          text: 'platform-browser',
          link: '/angular/goldens/platform-browser'
        },
        { text: 'platform-server', link: '/angular/goldens/platform-server' },
        {
          text: 'router',
          link: '/angular/goldens/router'
        },
        { text: 'rxjs-interop', link: '/angular/goldens/rxjs-interop' },
        {
          text: 'service-worker',
          link: '/angular/goldens/service-worker'
        },
        {
          text: 'upgrade',
          link: '/angular/goldens/upgrade'
        }
      ]
    },
    {
      text: 'di',
      items: [
        { text: 'di', link: '/angular/di/di' },
        {
          text: 'di_advanced',
          link: '/angular/di/di_advanced'
        }
      ]
    },
    {
      text: 'tools',
      items: [
        { text: 'defer', 
          link: '/angular/tools/defer' 
        },
        { text: 'for', 
          link: '/angular/tools/for' 
        },
        {
          text: 'gulp-tasks',
          link: '/angular/tools/gulp-tasks'
        },
        { text: 'if', 
          link: '/angular/tools/if' 
        },
        {
          text: 'let',
          link: '/angular/tools/let'
        },
        { text: 'ng-container', 
          link: '/angular/tools/ng-container' 
        },
        {
          text: 'ng-content',
          link: '/angular/tools/ng-content'
        },
        { text: 'ng-template', 
          link: '/angular/tools/ng-template' 
        },
        {
          text: 'saucelabs',
          link: '/angular/tools/saucelabs'
        },
        { text: 'saucelabsdae', 
          link: '/angular/tools/saucelabsdae' 
        },
        {
          text: 'switch',
          link: '/angular/tools/switch'
        }
      ]
    }
  ],
  '/flutter/': [
    {
      text: 'about',
      items: [
        {
          text: 'case-of-emergency',
          link: '/flutter/about/case-of-emergency'
        },
        {
          text: 'Engine-architecture',
          link: '/flutter/about/Engine-architecture'
        },
        {
          text: 'Flutter-Self-Service-Index',
          link: '/flutter/about/Flutter-Self-Service-Index'
        },
        {
          text: 'Framework-architecture',
          link: '/flutter/about/Framework-architecture'
        },
        {
          text: 'Glossary',
          link: '/flutter/about/Glossary'
        },
        {
          text: 'Project-teams',
          link: '/flutter/about/Project-teams'
        },
        {
          text: 'repository-architecture',
          link: '/flutter/about/repository-architecture'
        },
        {
          text: 'separate-engine-repo',
          link: '/flutter/about/separate-engine-repo'
        },        
        {
          text: 'Values',
          link: '/flutter/about/Values'
        }
      ]
    },
    {
      text: 'contributing',
      items: [
        {
          text: 'Chat',
          link: '/flutter/contributing/Chat'
        },
        {
          text: 'Contributor-access',
          link: '/flutter/contributing/Contributor-access'
        },
        {
          text: 'Data-driven-Fixes',
          link: '/flutter/contributing/Data-driven-Fixes'
        },
        {
          text: 'Design-Documents',
          link: '/flutter/contributing/Design-Documents'
        },
        {
          text: 'development-environment',
          link: '/flutter/contributing/development-environment'
        },
        {
          text: 'Driver-tests-with-Web',
          link: '/flutter/contributing/Driver-tests-with-Web'
        },
        {
          text: 'Flutter-Test-Fonts',
          link: '/flutter/contributing/Flutter-Test-Fonts'
        },
        {
          text: 'for-package-flutter',
          link: '/flutter/contributing/for-package-flutter'
        },
        {
          text: 'GIFs-of-Flutter-apps',
          link: '/flutter/contributing/GIFs-of-Flutter-apps'
        },
        {
          text: 'Labeling-PRs',
          link: '/flutter/contributing/Labeling-PRs'
        },
        {
          text: 'package-flutter',
          link: '/flutter/contributing/package-flutter'
        },
        {
          text: 'Popular-issues',
          link: '/flutter/contributing/Popular-issues'
        },
        {
          text: 'README',
          link: '/flutter/contributing/README'
        },
        {
          text: 'Running-and-writing-tests',
          link: '/flutter/contributing/Running-and-writing-tests'
        },
        {
          text: 'Signing-commits',
          link: '/flutter/contributing/Signing-commits'
        },
        {
          text: 'speed-test-for-Flutter',
          link: '/flutter/contributing/speed-test-for-Flutter'
        },
        {
          text: 'Style-guide-for-Flutter-repo',
          link: '/flutter/contributing/Style-guide-for-Flutter-repo'
        },
        {
          text: 'test-for-Flutter',
          link: '/flutter/contributing/test-for-Flutter'
        },
        {
          text: 'Tree-hygiene',
          link: '/flutter/contributing/Tree-hygiene'
        },
        {
          text: 'use-reliable-links',
          link: '/flutter/contributing/use-reliable-links'
        },
        {
          text: 'Using-the-Dart-analyzer',
          link: '/flutter/contributing/Using-the-Dart-analyzer'
        },
        {
          text: 'What-should-I-work-on',
          link: '/flutter/contributing/What-should-I-work-on'
        },
        {
          text: 'Writing-Effective-Tests',
          link: '/flutter/contributing/Writing-Effective-Tests'
        }
  ]
},
{
  text: 'ecosystem',
  items: [
    {
      text: 'contributing',
      link: '/flutter/ecosystem/contributing'
    },
    {
      text: 'development-environment',
      link: '/flutter/ecosystem/development-environment'
    },
    {
      text: 'Package-migration-to',
      link: '/flutter/ecosystem/Package-migration-to'
    },
    {
      text: 'Plugins-and-Packages',
      link: '/flutter/ecosystem/Plugins-and-Packages'
    },
    {
      text: 'Plugins-development',
      link: '/flutter/ecosystem/Plugins-development'
    },
    {
      text: 'Plugin-Tests',
      link: '/flutter/ecosystem/Plugin-Tests'
    },
    {
      text: 'README',
      link: '/flutter/ecosystem/README'
    },
    {
      text: 'Understanding-Packages',
      link: '/flutter/ecosystem/Understanding-Packages-tests'
    },
    {
      text: 'Updating-Packages-repo',
      link: '/flutter/ecosystem/Updating-Packages-repo'
    }
  ]
},
{
  text: 'infra',
  items: [
    {
      text: 'Autorollers',
      link: '/flutter/infra/Autorollers'
    },
    {
      text: 'Autosubmit',
      link: '/flutter/infra/Autosubmit'
    },   
    {
      text: 'Autosubmit-bot',
      link: '/flutter/infra/Autosubmit-bot'
    },   
     {
      text: 'Dashboards',
      link: '/flutter/infra/Dashboards'
    },    
    {
      text: 'Flutter-FirebaseLab',
      link: '/flutter/infra/Flutter-FirebaseLab'
    },
    {
      text: 'Flutter-Framework',
      link: '/flutter/infra/Flutter-Framework'
    },
    {
      text: 'Framework-CI',
      link: '/flutter/infra/Framework-CI'
    },
    {
      text: 'from-a-benchmark',
      link: '/flutter/infra/from-a-benchmark'
    },
    {
      text: 'GitHub-Action-Workflows',
      link: '/flutter/infra/GitHub-Action-Workflows'
    },
    {
      text: 'Infrastructure-Foundation',
      link: '/flutter/infra/Infrastructure-Foundation'
    },
    {
      text: 'Infra-Ticket-Queue',
      link: '/flutter/infra/Infra-Ticket-Queue'
    },
    {
      text: 'Installation-Bundles',
      link: '/flutter/infra/Installation-Bundles'
    },
    {
      text: 'LUCI-build-failure',
      link: '/flutter/infra/LUCI-build-failure'
    },
    {
      text: 'new-Test-Shard',
      link: '/flutter/infra/new-Test-Shard'
    },
    {
      text: 'Packages-Gardener',
      link: '/flutter/infra/Packages-Gardener'
    },
    {
      text: 'README',
      link: '/flutter/infra/README'
    },
    {
      text: 'Reducing-Test-Flakiness',
      link: '/flutter/infra/Reducing-Test-Flakiness'
    },
    {
      text: 'Rolling-Dart',
      link: '/flutter/infra/Rolling-Dart'
    },
    {
      text: 'Security',
      link: '/flutter/infra/Security'
    },
    {
      text: 'Running-examples',
      link: '/flutter/infra/Running-examples'
    },
    {
      text: 'Understanding-Google',
      link: '/flutter/infra/Understanding-Google'
    },
    {
      text: 'Updating-dependencies',
      link: '/flutter/infra/Updating-dependencies'
    }
  ]
},
{
  text: 'ecosystem',
  items: [
    {
      text: 'contributing',
      link: '/flutter/ecosystem/contributing'
    },
    {
      text: 'development-environment',
      link: '/flutter/ecosystem/development-environment'
    },
    {
      text: 'Package-migration-to',
      link: '/flutter/ecosystem/Package-migration-to'
    },
    {
      text: 'Plugins-and-Packages',
      link: '/flutter/ecosystem/Plugins-and-Packages'
    },
    {
      text: 'Plugins-development',
      link: '/flutter/ecosystem/Plugins-development'
    },
    {
      text: 'Plugin-Tests',
      link: '/flutter/ecosystem/Plugin-Tests'
    },
    {
      text: 'README',
      link: '/flutter/ecosystem/README'
    },
    {
      text: 'Understanding-Packages',
      link: '/flutter/ecosystem/Understanding-Packages-tests'
    },
    {
      text: 'Updating-Packages-repo',
      link: '/flutter/ecosystem/Updating-Packages-repo'
    }
  ]
},
{
  text: 'platforms',
  items: [
    {
      text: 'Accessibility-on-Windows',
      link: '/flutter/platforms/Accessibility-on-Windows'
    },
    {
      text: 'Android-Multidex-support',
      link: '/flutter/platforms/Android-Multidex-support'
    },
    {
      text: 'Android-Platform-Views',
      link: '/flutter/platforms/Android-Platform-Views'
    },
    {
      text: 'Android-projects',
      link: '/flutter/platforms/Android-projects'
    },
    {
      text: 'build-with-gradle',
      link: '/flutter/platforms/build-with-gradle'
    },
    {
      text: 'Debugging-issues',
      link: '/flutter/platforms/Debugging-issues'
    },
    {
      text: 'Gradle-for-Android',
      link: '/flutter/platforms/Gradle-for-Android'
    },
    {
      text: 'Hybrid-Composition',
      link: '/flutter/platforms/Hybrid-Composition'
    },
    {
      text: 'New-Android-version',
      link: '/flutter/platforms/New-Android-version'
    },
    {
      text: 'Resolving-common',
      link: '/flutter/platforms/Resolving-common'
    },
    {
      text: 'Testing-Android-Changes',
      link: '/flutter/platforms/Testing-Android-Changes'
    },
    {
      text: 'Texture-Layer-Hybrid',
      link: '/flutter/platforms/Texture-Layer-Hybrid'
    },
    {
      text: 'Updating-Material',
      link: '/flutter/platforms/Updating-Material'
    },
    {
      text: 'Upgrading-Engine',
      link: '/flutter/platforms/Upgrading-Engine'
    },
    {
      text: 'Upgrading-Flutter-projects',
      link: '/flutter/platforms/Upgrading-Flutter-projects'
    },
    {
      text: 'Virtual-Display',
      link: '/flutter/platforms/Virtual-Display'
    }
  ]
},
{
  text: 'postmortems',
  items: [
    {
      text: 'Postmortem-AndroidX',
      link: '/flutter/postmortems/Postmortem-AndroidX'
    },
    {
      text: 'Postmortem-Beta',
      link: '/flutter/postmortems/Postmortem-Beta'
    },
    {
      text: 'Postmortem-Build',
      link: '/flutter/postmortems/Postmortem-Build'
    },
    {
      text: 'Postmortem-flutte',
      link: '/flutter/postmortems/Postmortem-flutte'
    },
    {
      text: 'README',
      link: '/flutter/postmortems/README'
    },
    {
      text: 'Retrospective-Flutter',
      link: '/flutter/postmortems/Retrospective-Flutter'
    },
    {
      text: 'Widespread-Gradle',
      link: '/flutter/postmortems/Widespread-Gradle'
    },
    {
      text: 'Windows-Defender',
      link: '/flutter/postmortems/Windows-Defender'
    }
  ]
},
{
  text: 'releases',
  items: [
    {
      text: 'Bad-Builds',
      link: '/flutter/releases/Bad-Builds'
    },

    {
      text: 'Flutter-build-release',
      link: '/flutter/releases/Flutter-build-release'
    },
    {
      text: 'Flutter-Cherrypick-Process',
      link: '/flutter/releases/Flutter-Cherrypick-Process'
    },
    {
      text: 'Hotfix-Documentation',
      link: '/flutter/releases/Hotfix-Documentation'
    },
    {
      text: 'Notes---Flutter-1.2.1',
      link: '/flutter/releases/Notes---Flutter-1.2.1'
    },
    {
      text: 'Notes-Flutter-1.5.4',
      link: '/flutter/releases/Notes-Flutter-1.5.4'
    },
    {
      text: 'Notes-Flutter-1.7.8',
      link: '/flutter/releases/Notes-Flutter-1.7.8'
    },
    {
      text: 'Notes-Flutter-1.9.1',
      link: '/flutter/releases/Notes-Flutter-1.9.1'
    },
    {
      text: 'PRs-addressed-between',
      link: '/flutter/releases/PRs-addressed-between'
    },
    {
      text: 'Quality-Assurance',
      link: '/flutter/releases/Quality-Assurance'
    },
    {
      text: 'Release-process',
      link: '/flutter/releases/Release-process'
    },
    {
      text: 'Release-versioning',
      link: '/flutter/releases/Release-versioning'
    },
    {
      text: 'Upgrading-from',
      link: '/flutter/releases/Upgrading-from'
    },
    {
      text: 'Where-my-commit',
      link: '/flutter/releases/Where-my-commit'
    }
  ]
},
{
  text: 'tool',
  items: [
    {
      text: 'Fast-Start',
      link: '/flutter/tool/Fast-Start'
    },
    {
      text: 'Managing-template',
      link: '/flutter/tool/Managing-template'
    },
    {
      text: 'Old-Roadmaps',
      link: '/flutter/tool/Old-Roadmaps'
    },
    {
      text: 'README',
      link: '/flutter/tool/README'
    },
    {
      text: 'Roadmap',
      link: '/flutter/tool/Roadmap'
    },
    {
      text: 'The-flutter-run-variants',
      link: '/flutter/tool/The-flutter-run-variants'
    },
    {
      text: 'Using-custom-embedders',
      link: '/flutter/tool/Using-custom-embedders'
    }
  ]
},
{
  text: 'triage',
  items: [
    {
      text: 'across-screens',
      link: '/flutter/triage/across-screens'
    },
    {
      text: 'Add-Flutter-View',
      link: '/flutter/triage/Add-Flutter-View'
    },
    {
      text: 'Breaking-Commits',
      link: '/flutter/triage/Breaking-Commits'
    },
    {
      text: 'documentation-index',
      link: '/flutter/triage/documentation-index'
    },
    {
      text: 'Experimental-Add-Flutter',
      link: '/flutter/triage/Experimental-Add-Flutter'
    },
    {
      text: 'Flutter-migrate',
      link: '/flutter/triage/Flutter-migrate'
    },
    {
      text: 'Flutter-Web-Triage',
      link: '/flutter/triage/Flutter-Web-Triage'
    },
    {
      text: 'Multi-device-debugging',
      link: '/flutter/triage/Multi-device-debugging'
    },
    {
      text: 'new-embedding',
      link: '/flutter/triage/new-embedding'
    },
    {
      text: 'non-main-entrypoint',
      link: '/flutter/triage/non-main-entrypoint'
    },
    {
      text: 'README',
      link: '/flutter/triage/README'
    },
    {
      text: 'using-channels',
      link: '/flutter/triage/using-channels'
    },
    {
      text: 'Workarounds-for-common',
      link: '/flutter/triage/Workarounds-for-common'
    }
  ]
}
],
  '/examples/': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Hello World',
          link: '/examples/#hello-world'
        },
        {
          text: 'Handling User Input',
          link: '/examples/#handling-input'
        },
        {
          text: 'Attribute Bindings',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Conditionals and Loops',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Form Bindings',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Simple Component',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Practical',
      items: [
        {
          text: 'Markdown Editor',
          link: '/examples/#markdown'
        },
        {
          text: 'Fetching Data',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Grid with Sort and Filter',
          link: '/examples/#grid'
        },
        {
          text: 'Tree View',
          link: '/examples/#tree'
        },
        {
          text: 'SVG Graph',
          link: '/examples/#svg'
        },
        {
          text: 'Modal with Transitions',
          link: '/examples/#modal'
        },
        {
          text: 'List with Transitions',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: 'Counter',
          link: '/examples/#counter'
        },
        {
          text: 'Temperature Converter',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Flight Booker',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Timer',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Circle Drawer',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Cells',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Style Guide',
      items: [
        {
          text: 'Overview',
          link: '/style-guide/'
        },
        {
          text: 'A - Essential',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Strongly Recommended',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Recommended',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Use with Caution',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}


// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://c.252x.com'
  },

  lang: 'en-US',
  title: 'googlefonts',
  description: 'support the best practices of user interface design',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://c.252x.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'googlefonts' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'googlefonts - support the best practices of user interface design'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/logo.png'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://f.543x.com'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/uwu.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'googlefonts',
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    localeLinks: [
      {
        link: 'https://g.543x.com',
        text: '简体中文',
        repo: 'https://github.com/hyaliyun/googlefonts'
      },
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: '21cf9df0734770a2448a9da64a700c22',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyaliyun/googlefonts/' },
    ],

    editLink: {
      repo: 'hyaliyun/googlefonts',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://www.543x.com'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} googlefonts`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
});
