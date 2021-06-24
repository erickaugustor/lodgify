import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'italic',
    fontWeight: 900,
    fontSize: '16px',
    lineHeight: '20px',
  },
  description: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',

    color: '#999999',
  },
  bookedText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',  
    color: '#11A960',
  },
  bookedContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  bookedIcon: {
    marginRight: '0.5rem',
    color: '#11A960',
  },
  titleContainer: {
    height: '40px',
  },
  chip: {
    margin: '0.5rem',
  },
  button: {
    height: '40px',
    background: '#2C64B7',
    color: 'white',
  
    '&:disabled': {
      'background': '#B3B3B3',
      color: 'white',
    },
  },
  bottomContainer: {
    padding: '0.5rem',
  },
}));
