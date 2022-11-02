export default {
  input: {
    height: 44,
    border: ({ error }) => error ? '1px solid #F47174' : '1px solid #DEDFE5',
    width: '100%',
    borderRadius: 3,
    fontFamily: 'inherit',
    fontSize: '1em',
    padding: '0 8px'
  },
  errorClass: {
    fontSize: '.8em',
    color: '#F47174'
  }
}
