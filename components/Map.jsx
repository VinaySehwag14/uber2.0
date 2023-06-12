import { View, Text } from 'react-native';
import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin, 'this is origin in map');
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
