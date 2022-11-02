export default {
  spinner: {
    width: ({ size }) => size,
    height: ({ size }) => size,
    borderColor: ({ color }) => color,
    borderWidth: ({ radius }) => radius,
    borderStyle: 'solid',
    borderBottomColor: 'transparent !important',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: '$rotation 1s linear infinite'
  },
  '@keyframes rotation': {
    '0%': {
      webkitTransform: 'rotate(0deg)',
      transform: 'rotate(0deg)'
    },
    '100%': {
      webkitTransform: 'rotate(360deg)',
      transform: 'rotate(360deg)'
    }
  }
}
