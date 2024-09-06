export const days = (countdown) => {
  return Math.floor(countdown / (3600 * 24));
};
export const hours = (countdown) => {
  return Math.floor((countdown % (3600 * 24)) / 3600);
};
export const minutes = (countdown) => {
  return Math.floor((countdown % 3600) / 60);
};
export const seconds = (countdown) => {
  return Math.floor(countdown % 60);
};
