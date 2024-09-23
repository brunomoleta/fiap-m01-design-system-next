export default {
  sm: {
    resolutions: {
      min: '0px',
      max: '600px',
    },
    columns: 4,
    gap: '24px',
    gutter: '16px',
    container: {
      width: 'auto',
      maxWidth: '100%',
    },
  },
  md: {
    resolutions: {
      min: '600px',
      max: '900px',
    },
    gap: '16px',
    gutter: '32px',
    row: 8,
    container: {
      width: 'auto',
      maxWidth: '100%',
    },
  },
  lg: {
    resolutions: {
      min: '900px',
      max: '2540px',
    },
    gap: '24px',
    gutter: '24px',
    row: 12,
    container: {
      width: 'auto',
      maxWidth: '2540px',
    },
  },
} as const;
