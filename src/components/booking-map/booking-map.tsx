import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import style from './booking-map.module.css';
import { TBooking} from '../../types/booking';
import iconActive from '../../../markup/img/svg/pin-active.svg';
import iconDefault from '../../../markup/img/svg/pin-default.svg';
import { useAppDispatch } from '../../hooks';
import { setCurrentLocationInfo } from '../../store/single-quest-data/single-quest-data.slice';
import { UseFormReset } from 'react-hook-form';
import { TBookingForm } from '../../types/booking-request';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  options: TBooking[];
  selectedOption: TBooking;
  reset: UseFormReset<TBookingForm>;
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

export default function BookingMap ({options , selectedOption , reset}: TMapProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedOption.location, true);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      let additionalLng = 0;
      options.forEach((option) => {
        additionalLng += 0.0001;

        const isSame = options.find((elem) => elem.location.address === option.location.address);

        const marker = new Marker({
          lat: option.location.coords[0],
          lng: option.location.coords[1] + (isSame ? additionalLng : 0),
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
          reset();
        });
      });


      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, selectedOption, options, dispatch]);

  return <div className={style.map_iframe} ref={mapRef}></div>;

}
