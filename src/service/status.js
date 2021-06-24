const getStatus = (bookable, booked) => {
  let finalStatus = '';
  finalStatus = bookable ? 'available' : 'unavailable';

  if (booked) {
    finalStatus = 'booked';
  }

  return finalStatus
};

export {
  getStatus,
}