// import { useRef, useEffect } from 'react';
// import { Icon, Marker, layerGroup } from 'leaflet';
// import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
// import useMap from '../../hooks/use-map';
// import 'leaflet/dist/leaflet.css';
// import style from './booking-map.module.css';
// import { TBookingStatus } from '../../types/booking-status';
// import { TLocation } from '../../types/booking';

// type TMapProps = {
//   quests: TBookingStatus[] | undefined;
//   selectedQuest: TBookingStatus;
// };

// const defaultCustomIcon = new Icon({
//   iconUrl: URL_MARKER_DEFAULT,
//   iconSize: [29, 39],
//   iconAnchor: [20, 40],
// });

// const activeCustomIcon = new Icon({
//   iconUrl: URL_MARKER_ACTIVE,
//   iconSize: [29, 39],
//   iconAnchor: [20, 40]
// });

// export default function Map ({quests ,selectedQuest}: TMapProps) : JSX.Element {
//   const mapRef = useRef(null);
//   const map = useMap(mapRef, quests[0].location);
//   useEffect(() => {
//     if (map) {
//       const markerLayer = layerGroup().addTo(map);
//       quests?.forEach((quest) => {
//         const marker = new Marker({
//           lat: quest.location.coords[0],
//           lng: quest.location.coords[1],
//         });

//         marker.setIcon(
//           selectedQuest !== undefined && quest.id === selectedQuest.id
//             ? activeCustomIcon
//             : defaultCustomIcon
//         )
//           .addTo(markerLayer);
//       });


//       return () => {
//         map.removeLayer(markerLayer);
//       };
//     }
//   }, [map, selectedQuest, quests]);

//   return <div className={style.map_iframe} ref={mapRef}></div>;

// }
