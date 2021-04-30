import sanitize from 'sanitize.css'
import sanitizeForms from 'sanitize.css/forms.css'
import sanitizeAssets from 'sanitize.css/assets.css'
import sanitizeTypography from 'sanitize.css/typography.css'
import sanitizeReduceMotion from 'sanitize.css/reduce-motion.css'

import { global } from './stitches.config'

const globalStyles = global({
  '@import': [
    sanitize,
    sanitizeForms,
    sanitizeAssets,
    sanitizeTypography,
    sanitizeReduceMotion,
  ],
  'html': {
    color: '$text',
    backgroundColor: '$background',
    scrollBehavior: 'smooth',

    // Collapse margins
    marginBlockStart: '-1rem',
    marginBlockEnd: '1rem',
    minHeight: 'calc(100vh + 1rem)',
  },

  // Text selection styling
  '&::selection': {
    background: '$accent',
    color: '$background',
  },

  // Keyboard focus styles
  '&:focus-visible': {
    outlineOffset: 2,
    outline: '2px dashed $accent'
  },

  // Typography
  'h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6': {
    margin: '1rem 0',
    fontWeight: 'bold',
  },
  'h1, .h1': {
    fontSize: '2rem'
  },
  'h2, .h2': {
      fontSize: '1.5rem'
  },
  'h3, .h3': {
      fontSize: '1.17rem'
  },
  'h4, .h4': {
      fontSize: '1rem'
  },
  'h5, .h5': {
      fontSize: '0.83rem'
  },
  'h6, .h6': {
      fontSize: '0.67rem'
  },

  'p, .paragraph': {
    margin: '1rem 0',
    fontSize: '1rem',
  },

  'a, .link': {
    textDecoration: 'underline',
    color: 'inherit',
    '&:hover': {},
    '&[aria-current]': {},
  },

  // Buttons
  'button': {
    cursor: 'pointer',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    border: 'none',
  },

  // Forms
  'input:not([type="radio"]):not([type="checkbox"]):not([type="color"]), select, textarea': {
    display: 'block',
    width: '100%',
    borderRadius: '0.25rem',
    padding: '0.5rem 0.75rem',
    '&:focus': {
      outline: 'none',
      borderColor: '$text',
    },
  },
  
  'textarea': {
    minHeight: '2.625rem',
  },

  'select': {
    paddingRight: '1.25rem',
  },

  // Misc
  'code': {
    display: 'inline-block',
    backgroundColor: '$background',
    fontSize: '85%',
    borderRadius: '0.25rem',
    padding: '0.2em 0.4em',
  },

  'pre code': {
    display: 'block',
    padding: '1em',
  },

  'hr': {
    margin: '1rem 0',
    border: 'none',
    height: 1,
    backgroundColor: '$divider',
  },

  'blockquote': {
    margin: '1em 0',
    padding: '0.5em 2em',
    '& > *:first-child': {
      marginBlockStart: 0,
    },
    '& > *:last-child': {
      marginBlockEnd: 0,
    },
  },

  'details': {
    margin: '1rem 0',
    border: '1px solid $divider',
    borderRadius: '0.25rem',
    padding: '0.5rem 1rem',
  },

  'summary': {
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: '-0.5rem -1rem',
    padding: '0.5rem 1rem',
    '&:focus': {
      outline: 'none',
    },
  },

  'table': {
    '& caption': {
      padding: '0.375rem 0.75rem',
    },
    '& th, td': {
      padding: '0.375rem 0.75rem',
      border: '1px solid $divider',
    },
    '& th': {
      fontWeight: 600,
    },
  },
})

export default globalStyles