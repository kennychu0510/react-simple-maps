import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import regions from './regions.json';
const geoUrl = './japan.topojson';
import { ZoomableGroup } from 'react-simple-maps';

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function Map() {
  const [region, setRegion] = useState('');
  function getStyle(name: string) {
    if (regions.includes(name)) {
      return {
        hover: { fill: '#A6B9D0', outline: 'none' },
        default: { fill: '#ECD5BB', outline: 'none' },
        pressed: { outline: 'none' },
      };
    }

    return {
      hover: { fill: '#dedede', outline: 'none' },
      default: { fill: '#dedede', outline: 'none' },
      pressed: { fill: '#dedede', outline: 'none' },
    };
  }

  function validRegion(name: string) {
    return regions.includes(name);
  }

  return (
    <>
      <div style={{ height: 20 }}>{region}</div>

      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [138, 36],
          scale: 1300,
        }}
        style={{ border: '1px solid black', minWidth: 500, maxHeight: '80vh' }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill='#ECD5BB'
                  stroke='#FFF'
                  strokeWidth={0.5}
                  style={getStyle(geo.properties.nam_ja)}
                  onClick={(e) => {
                    // console.log(geo.properties.nam_ja);
                  }}
                  onMouseEnter={() => {
                    // console.log(geo.properties.nam_ja);
                    validRegion(geo.properties.nam_ja) && setRegion(geo.properties.nam_ja);
                  }}
                  onMouseLeave={() => {
                    setRegion('');
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
}
