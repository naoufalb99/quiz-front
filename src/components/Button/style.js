export default {
  button: {
    position: 'relative',
    backgroundColor: '#338CFE',
    border: 'none',
    color: '#FFF',
    borderRadius: '30px',
    padding: '10px 16px',
    fontFamily: 'inherit',
    cursor: 'pointer',
    fontSize: '1em',
    width: ({ fullWidth }) => fullWidth && '100%',
    overflow: 'hidden'
  },
  spinnerOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#338CFE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
