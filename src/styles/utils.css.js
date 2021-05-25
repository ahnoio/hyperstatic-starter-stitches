import { css } from './stitches.config'

// Max-width containers
export const container = css({
  width: '100%',
  maxWidth: 'min(480px, 90vw)',
  margin: '0 auto',
})

// Responsive Card grid
export const grid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
  gridGap: '1rem',
  margin: '1rem 0',
})

// Bring attention to some content
export const callout = css({
  padding: '1em',
  margin: '1rem 0',
  backgroundColor: '$altBackground',
  borderRadius: '0.25rem',
  '& span[role="img"]': {
    display: 'inline-block',
    marginInlineEnd: '0.8em',
  },
})