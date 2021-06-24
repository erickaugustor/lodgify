import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    borderRadius: '30px',
    position: 'absolute',
    'z-index': 2,
  
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',

    display: 'flex',
    alignItems: 'center',

    color: '#F7F7F7',
  },
  available: {
    background: '#11A960',
  },
  booked: {
    background: '#2C64B7',
  },
  unavailable: {
    background: '#E02323',
  },
}));
