// utils/polylineDecoder.js
import PolylineCodec from '@googlemaps/polyline-codec';

const decodePolyline = (encodedPolyline) => {
  return PolylineCodec.decode(encodedPolyline);
};

export default decodePolyline;
