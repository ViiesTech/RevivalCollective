import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  Animated,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { AppImages } from '../../config/Images';
import { AppColors } from '../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../globalFunctions/Resposive_Dimensions';

/**
 * Splash — two-phase animated splash.
 *
 * Phase 1: Dark bg + logo scales & fades in.
 * Phase 2: Logo fades out, splashBg image + logoShadow cross-fades in.
 * Then navigates to OnBoarding.
 */
const Splash = ({ navigation }) => {
  const logoScale = useRef(new Animated.Value(0.35)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const bgOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    StatusBar.setHidden(true);

    // Phase 1 — animate logo in
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Short hold then crossfade to splashBg
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(logoOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bgOpacity, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
          }),
        ]).start(() => {
          // Hold splashBg then navigate
          setTimeout(() => {
            StatusBar.setHidden(false);
            navigation.replace('OnBoarding');
          }, 1300);
        });
      }, 450);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Phase 1 — plain logo on dark bg */}
      <Animated.View
        style={[styles.fill, { opacity: logoOpacity }]}
        pointerEvents="none">
        <Animated.Image
          source={AppImages.logo}
          style={[styles.logo, { transform: [{ scale: logoScale }] }]}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Phase 2 — splashBg + logoShadow */}
      <Animated.View
        style={[styles.fill, { opacity: bgOpacity }]}
        pointerEvents="none">
        <ImageBackground
          source={AppImages.splashBg}
          style={styles.bgImage}
          >
          <Image
            source={AppImages.logoShadow}
            style={styles.logoShadow}
            resizeMode="contain"
          />
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(60),
  },
  logoShadow: {
   width: responsiveWidth(80),
    height: responsiveHeight(80),
  },
});

export default Splash;

