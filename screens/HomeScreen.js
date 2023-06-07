import { Image, SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-4`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={require('../assets/uberLogo.png')}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
