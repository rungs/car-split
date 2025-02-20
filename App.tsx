/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type CarPartProps = {
  onPress: (message: string) => void;
  imageName: number; // Name of the image, e.g., 'car', 'wheel'
};

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const images: {[key: number]: any} = {
  1: require('./assets/1.png'),
  2: require('./assets/2.png'),
  3: require('./assets/3.png'),
  4: require('./assets/4.png'),
  5: require('./assets/5.png'),
  6: require('./assets/6.png'),
  7: require('./assets/7.png'),
  8: require('./assets/8.png'),
  9: require('./assets/9.png'),
};

function CarPart({onPress, imageName}: CarPartProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={styles.touchableWrapper}
      onPress={() => onPress(`Image ${imageName} clicked`)}>
      <Image style={styles.imageWrapper} source={images[imageName]} />
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [part, setPart] = React.useState('');

  const safePadding = '5%';

  return (
    <View style={[backgroundStyle, {padding: safePadding}]}>
      <View style={styles.column}>
        <View style={styles.row}>
          {/* <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => () => setPart('Image 1 clicked')}>
            <Image style={styles.imageWrapper} source={images[1]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => () => setPart('Image 1 clicked')}>
            <Image style={styles.imageWrapper} source={images[1]} />
          </TouchableOpacity> */}
          <CarPart onPress={setPart} imageName={images[1]} />
          <CarPart onPress={setPart} imageName={images[2]} />
          <CarPart onPress={setPart} imageName={images[3]} />
        </View>
        <View style={styles.row}>
          <CarPart onPress={setPart} imageName={images[4]} />
          <CarPart onPress={setPart} imageName={images[5]} />
          <CarPart onPress={setPart} imageName={images[6]} />
        </View>
        <View style={styles.row}>
          <CarPart onPress={setPart} imageName={images[7]} />
          <CarPart onPress={setPart} imageName={images[8]} />
          <CarPart onPress={setPart} imageName={images[9]} />
        </View>
      </View>
      <Text>{part}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%', // 3 images in a row,
    resizeMode: 'stretch',
    height: 100,
  },
  touchableWrapper: {
    width: '33%', // Ensures 3 items per row
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
