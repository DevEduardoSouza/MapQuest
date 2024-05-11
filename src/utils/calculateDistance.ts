// Função para calcular a distância entre dois pontos em quilômetros
export const calculateDistance = (
  startingPoint: google.maps.LatLng,
  markedPoint: google.maps.LatLng
): number => {
  // Convertendo as coordenadas de graus para radianos
  const lat1 = toRadians(startingPoint.lat());
  const lng1 = toRadians(startingPoint.lng());
  const lat2 = toRadians(markedPoint.lat());
  const lng2 = toRadians(markedPoint.lng());

  // Raio da Terra em quilômetros
  const radius = 6371; // quilômetros

  // Diferença das latitudes e longitudes
  const deltaLat = lat2 - lat1;
  const deltaLng = lng2 - lng1;

  // Fórmula da distância entre dois pontos em um plano cartesiano (fórmula da distância euclidiana)
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distância entre os pontos em quilômetros
  const distance = radius * c;

  return Number(distance.toFixed(0));
};

// Função auxiliar para converter graus em radianos
function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
