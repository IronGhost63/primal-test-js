import { useState, useEffect } from 'react';
import Map from "./components/Maps";

function App() {
  const [quakes, setQuakes] = useState([]);

  useEffect( () => {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').then( res => res.json() ).then( data => setQuakes( data.features ) );
  }, []);

  return (
    <div>
      <Map locations={quakes} />
    </div>
  )
}

export default App
