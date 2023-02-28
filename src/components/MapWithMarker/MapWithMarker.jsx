import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

export const MapWithMarker = ({ lat = 50, lon = 50 }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat([lon, lat])),
              }),
            ],
          }),
          style: new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: 'https://openlayers.org/en/latest/examples/data/icon.png',
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([lon, lat]),
        zoom: 7,
      }),
    });
    return () => map.dispose();
  }, [lat, lon]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};
