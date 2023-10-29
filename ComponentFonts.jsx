import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

const TextSatoshi = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  print(props)
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Satoshi': require('./assets/fonts/Satoshi-Regular.otf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'Satoshi' }}>
      {props.children}
    </Text>
  );
};

const TextSatoshiBold = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Satoshi-Bold': require('./assets/fonts/Satoshi-Bold.otf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'Satoshi-Bold' }}>
      {props.children}
    </Text>
  );
};

export { TextSatoshiBold, TextSatoshi }