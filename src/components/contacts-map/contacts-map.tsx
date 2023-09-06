import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import style from './contacts-map.module.css';


import iconDefault from '../../../markup/img/svg/pin-default.svg';

const defaultCustomIcon = new Icon({
  iconUrl: iconDefault,
  iconSize: [29, 39],
  iconAnchor: [20, 40],
});

const contacts = {
  address: 'Санкт-Петербург , Набережная реки Карповка, д 5П',
  coords: [59.968223, 30.317490]
};

export default function ContactsMap () : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, contacts , false);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const marker = new Marker({
        lat: contacts.coords[0],
        lng: contacts.coords[1],
      });

      marker.setIcon(defaultCustomIcon).addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map]);

  return <div className={style.map_iframe} ref={mapRef}></div>;

}
