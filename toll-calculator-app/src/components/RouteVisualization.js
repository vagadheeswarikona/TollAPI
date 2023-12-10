// components/RouteVisualization.js
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { getTollDetails, decodePolyline } from '../utils/api';

function RouteVisualization() {
  const [route, setRoute] = useState([]);
  const [tollMarkers, setTollMarkers] = useState([]);

  useEffect(() => {
    // Assuming startLocation and endLocation are available in your context or props
    const startLocation = [37.7749, -122.4194]; // Replace with actual coordinates
    const endLocation = [34.0522, -118.2437]; // Replace with actual coordinates

    // Fetch toll details from TollGuru API
    const fetchTollData = async () => {
      try {
        const tollDetails = await getTollDetails(startLocation, endLocation);
        const decodedPolyline = decodePolyline(tollDetails.polyline);

        setRoute(decodedPolyline);

        // Extract toll markers information and set them in state
        const markers = tollDetails.tolls.map((toll) => ({
          position: [toll.latitude, toll.longitude],
          details: toll.details,
        }));

        setTollMarkers(markers);
      } catch (error) {
        console.error('Error fetching toll data:', error);
      }
    };

    fetchTollData();
  }, []); // Run this effect only once on component mount

  return (
    <div id="leafletMapContainer">
      <MapContainer
        center={route.length > 0 ? route[0] : [0, 0]}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {route.length > 0 && <Polyline positions={route} color="blue" />}
        
        {tollMarkers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.details}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


