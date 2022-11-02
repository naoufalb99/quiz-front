export default {
  answer: {
    position: 'relative',
    backgroundColor: '#F2F2F2',
    padding: '12px calc(16px + 20px + 16px)',
    borderRadius: 30,
    cursor: 'pointer',
    color: '#565577'
  },
  checkbox: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: '#FFF',
    borderRadius: 20,
    border: ({ selected }) => selected ? '6px solid #338CFE' : '2px solid #9A98AE',
    top: '50%',
    marginTop: '-10px',
    left: 16
  }
}
