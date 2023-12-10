// components/TollDetailsDisplay.js
function TollDetailsDisplay({ tollMarkers }) {
    return (
      <div id="tollDetails">
        <h2>Toll Details</h2>
        <ul>
          {tollMarkers.map((marker, index) => (
            <li key={index}>
              <strong>Toll {index + 1}:</strong> {marker.details}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  