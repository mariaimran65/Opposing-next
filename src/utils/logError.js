// import slack from './slack';

const logError = (error) => {
  const errorMessage = error?.message || error;
  console.error('Logging Error', errorMessage);
  // slack(errorMessage, 'Logging Error', 'error');
};

export default logError;
