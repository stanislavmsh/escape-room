import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import style from './booking-map.module.css';
import { TBooking} from '../../types/booking';
import 'leaflet/dist/leaflet.css';

import iconActive from '../../../markup/img/svg/pin-active.svg';
import iconDefault from '../../../markup/img/svg/pin-default.svg';
import { useAppDispatch } from '../../hooks';
import { setCurrentLocationInfo } from '../../store/single-quest-data/single-quest-data.slice';

type TMapProps = {
  options: TBooking[];
  selectedOption: TBooking;
};

const defaultCustomIcon = new Icon({
  iconUrl: iconDefault,
  iconSize: [29, 39],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: iconActive,
  iconSize: [29, 39],
  iconAnchor: [20, 40]
});

export default function BookingMap ({options , selectedOption}: TMapProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedOption.location, true);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      options.forEach((option) => {
        const marker = new Marker({
          lat: option.location.coords[0],
          lng: option.location.coords[1],
        });

        marker.setIcon(
          selectedOption !== undefined && option.id === selectedOption.id
            ? activeCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerLayer);

        marker.on('click', () => {
          dispatch(setCurrentLocationInfo(option.id));
          map.flyTo([option.location.coords[0], option.location.coords[1]]);
        });
      });


      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, selectedOption, options, dispatch]);

  return <div className={style.map_iframe} ref={mapRef}></div>;

}