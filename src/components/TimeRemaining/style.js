export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      fontWeight: '600',
      textTransform: 'uppercase',
      fontSize: '.8em',
      color: '#9A98AE',
      letterSpacing: '1px',
      marginRight: 8
    }
  },
  circle: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #9A98AE',
    width: '2.5em',
    height: '2.5em',
    borderRadius: '50%',
    color: '#9A98AE',
    fontSize: '.9em'
  }
}
