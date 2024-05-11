export function verificaStreetView(
  latitude: number,
  longitude: number
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const service = new google.maps.StreetViewService();
    const location = new google.maps.LatLng(latitude, longitude);

    service.getPanorama(
      { location: location, radius: 1000 },
      function (data, status) {
        if (status === google.maps.StreetViewStatus.OK) {
          if (data && data.location && data.location.latLng) {
            console.log("Street View available for this location.");
            resolve(true);
          } else {
            console.log("No panorama data available for this location.");
            resolve(false);
          }
        } else {
          console.log("Street View not available for this location.");
          resolve(false);
        }
      }
    );
  });
}
