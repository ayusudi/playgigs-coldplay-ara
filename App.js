import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { height, width } = Dimensions.get('screen')
import { TextSatoshiBold, TextSatoshi } from './ComponentFonts'
import { useState } from 'react';

function MainScreen({ navigation }) {
  return (
    <View>
      <Image source={require('./assets/images/background.png')} style={{ resizeMode: 'cover', width, height: 62.5 / 100 * height }} />
      <ImageBackground source={require('./assets/images/background-down.png')} style={{ width, resizeMode: 'cover', height: 37.5 / 100 * height, justifyContent: 'flex-end', }} blurRadius={45}>
        <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.17)', alignItems: 'center', gap: 24 }} >
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 24 }}>
            <View style={{ height: 8, width: 24, borderRadius: 4, backgroundColor: '#FF2E79' }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#FBD7ED' }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#FBD7ED' }}></View>
          </View>
          <View style={{ gap: 20, width: '80%' }}>
            <TextSatoshiBold style={{ color: 'white', fontSize: 28, textAlign: 'center' }}>Gigs at its finest</TextSatoshiBold>
            <TextSatoshi style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>Experience the electrifying energy of live performances like never before.</TextSatoshi>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Concert')}
            activeOpacity={0.85}
            style={{ width: '90%' }}>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.17)', padding: 18, borderRadius: 32, borderColor: 'rgba(255, 255, 255, 0.12)', borderWidth: 1.5 }}>
              <TextSatoshiBold style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 0 }}>Starts</TextSatoshiBold>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function ConcertScren({ navigation }) {
  const [text, onChangeText] = useState('Search gigs, artists, or venues');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        style={{ flex: 1, width: '100%', paddingTop: 44, gap: 24 }}
        locations={[0, 1.0]}
        colors={['#1D2067', '#709BF9']}
      >
        <View style={{ height: 40, width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>

          <View style={{ height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <TextSatoshiBold style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Hallo, Ayu </TextSatoshiBold>
            <Image source={require('./assets/icons/sparkle.png')} style={{ width: 16, height: 16 }} />
          </View>
          <View style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/icons/email.png')} style={{ width: 24, height: 24 }} />

          </View>
        </View>
        <View style={{ width: '90%', height: 44, borderRadius: 100, alignSelf: 'center', backgroundColor: '#FFFFFF', flexDirection: 'row' }}>
          <Image source={require('./assets/icons/search.png')} style={{ width: 20, height: 20, position: 'absolute', marginVertical: 12, marginHorizontal: 16 }} />
          <TextInput
            style={{ flex: 1, paddingLeft: 44, fontSize: 14, color: '#333333' }}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <ScrollView
          contentContainerStyle={{
            columnGap: 27,
            paddingHorizontal: 27
          }}
          contentOffset={{ x: '75%' }}
          horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, height: 22, columnGap: 54, marginTop: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.5 }}><Image source={require('./assets/icons/moon.png')} style={{ width: 16, height: 16 }} /><TextSatoshiBold style={{ color: 'white', fontSize: 16, marginLeft: 8 }}>Night Melodies</TextSatoshiBold></View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('./assets/icons/sparkle.png')} style={{ width: 16, height: 16 }} /><TextSatoshiBold style={{ color: 'white', fontSize: 16, marginLeft: 8 }}>SupaHype Lately</TextSatoshiBold></View>
          <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.5 }}><Image source={require('./assets/icons/sun.png')} style={{ width: 16, height: 16 }} /><TextSatoshiBold style={{ color: 'white', fontSize: 16, marginLeft: 8 }}>Daylight Festivals</TextSatoshiBold></View>
        </ScrollView>
        <View style={{ alignItems: 'center', marginTop: 8 }}>
          <Image source={require('./assets/images/bg-card-3.png')} style={{ width: 200, height: 200, position: 'absolute', transform: [{ rotate: '4.28deg' }] }} />
          <Image source={require('./assets/images/bg-card-2.png')} style={{ width: 260, height: 260, position: 'absolute', transform: [{ rotate: '-2.93deg' }], zIndex: 1, marginTop: 30 }} />
          <Image source={require('./assets/images/bg-card-1.png')} style={{ width: 310, height: 310, position: 'absolute', transform: [{ rotate: '4.67deg' }], zIndex: 2, marginTop: 64 }} />
          <ImageBackground source={require('./assets/images/bg-card.png')} style={{ width: 335, height: 410, resizeMode: 'contain', zIndex: 3, marginTop: 99, paddingHorizontal: 15, paddingVertical: 25 }} imageStyle={{ borderRadius: 48 }}>
            <View style={{ alignItems: 'center', gap: 10, flexGrow: 1 }}>
              <View style={{ width: 147, height: 26, justifyContent: 'center', backgroundColor: '#FF2E79', borderRadius: 100 }}>
                <TextSatoshiBold style={{ fontSize: 10, color: 'white', textAlign: 'center' }}>COLDPLAY IN JAKARTA</TextSatoshiBold>
              </View>
              <Image source={require("./assets/images/text-card.png")} style={{ width: '100%', height: 58, resizeMode: 'contain' }} />
            </View>
            <View style={{ gap: 10, alignItems: 'center' }}>
              <TextSatoshiBold style={{ fontSize: 12, color: '#FFFFFF', textAlign: 'center' }}>Jakarta • 22 November 2023</TextSatoshiBold>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                activeOpacity={0.85}
                style={{ width: '90%' }}>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.17)', padding: 18, borderRadius: 32, borderColor: 'rgba(255, 255, 255, 0.17)', borderWidth: 1.5 }}>
                  <TextSatoshiBold style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 0 }}>Get Tickets</TextSatoshiBold>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <ScrollView >
      <ImageBackground source={require("./assets/images/bg-img-grad.png")} style={{ width, height: width / 15 * 16, resizeMode: 'cover', paddingTop: 44 }}>
        <View style={{ height: 40, width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.85}
            style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/icons/back.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 8, width: 24, borderRadius: 4, backgroundColor: '#FF2E79' }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#FFFFFF' }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#FFFFFF' }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#FFFFFF' }}></View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SeatPlan')}
            activeOpacity={0.85}
            style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/icons/light.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

function SeatPlanScreen({ navigation }) {
  return (
    <ImageBackground source={require("./assets/images/background-grad-light.png")} style={{ flex: 1, resizeMode: 'cover', width: '100%', paddingTop: 44, alignItems: 'center' }}>
      <View style={{ height: 40, width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
          style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/icons/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <View style={{ height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <TextSatoshiBold style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Music of the Spheres </TextSatoshiBold>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TicketDetail')}
          activeOpacity={0.85}
          style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/icons/shuffle.png')} style={{ width: 17, height: 17 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '90%', height: height * 0.6, marginVertical: 40, backgroundColor: "white" }}></View>
      <View style={{ width, height: 140, backgroundColor: 'rgba(255, 255, 255, 0.17)', bottom: 0, position: 'absolute'}}>

      </View>
    </ImageBackground>
  );
}

function TicketDetailPage({ navigation }) {
  return (
    <ImageBackground source={require("./assets/images/background-grad.png")} style={{ flex: 1, resizeMode: 'cover', width: '100%', paddingTop: 44, alignItems: 'center' }}>
      <View style={{ height: 40, width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
          style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/icons/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <View style={{ height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <TextSatoshiBold style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Ticket Details</TextSatoshiBold>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TicketDetail')}
          activeOpacity={0.85}
          style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/icons/scan.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '90%', height: height * 0.6, marginVertical: 40, backgroundColor: "white" }}></View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Success')}
        activeOpacity={0.85}
        style={{ width: '90%', marginVertical: 42 }}>
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.17)', padding: 18, borderRadius: 32, borderColor: 'rgba(255, 255, 255, 0.12)', borderWidth: 1.5 }}>
          <TextSatoshiBold style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 0 }}>Pay</TextSatoshiBold>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}


function SuccessScreen({ navigation }) {
  return (
    <ImageBackground source={require("./assets/images/background-grad.png")} style={{ flex: 1, resizeMode: 'cover', width: '100%', paddingTop: 44, alignItems: 'center' }}>
      <View style={{ height: 40, width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
          style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/icons/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <View style={{ height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(232, 232, 232, 0.64)', flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <TextSatoshiBold style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Ticket Details</TextSatoshiBold>
        </View>
        <View style={{ height: 40, width: 40, opacity: 0 }}>
        </View>
      </View>
      <View style={{ flexGrow: 1, alignItems: 'center', marginVertical: 40, width }}>
        <Image source={require("./assets/images/check.png")} style={{ width: width * 40 / 100, height: width * 40 / 100, zIndex: 1, }} />
        <View
          style={{ marginTop: width * 40 / 100 / -2, height: height / 2, width: '90%', backgroundColor: 'rgba(255, 255, 255, 0.17)', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}
        ></View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        activeOpacity={0.85}
        style={{ width: '90%', marginVertical: 42 }}>
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.17)', padding: 18, borderRadius: 32, borderColor: 'rgba(255, 255, 255, 0.12)', borderWidth: 1.5 }}>
          <TextSatoshiBold style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 0 }}>Finish</TextSatoshiBold>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Concert" component={ConcertScren} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="SeatPlan" component={SeatPlanScreen} />
        <Stack.Screen name="TicketDetail" component={TicketDetailPage} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
