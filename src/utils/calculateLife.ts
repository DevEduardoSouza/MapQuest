export const calculateLife = (distance: number, currentLife: number) => {
  currentLife = Number((currentLife - distance).toFixed(2));

  if (currentLife < 0) {
    currentLife = 0;
  }
  return currentLife;
};
