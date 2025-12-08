import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@ivoo/components';
import {IVOO_COLORS, IVOO_SPACING, IVOO_TYPOGRAPHY} from '@ivoo/styles';
import {SCREENS} from '@shared-constants';

const RegistrationSuccessScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    // Simply navigate to Home
    (navigation as any).navigate(SCREENS.HOME);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          bounces={true}
          overScrollMode="always"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          keyboardShouldPersistTaps="handled">
          {/* Creditivoo Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../images/creditivo-logo-full.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <Text style={styles.title}>¡Felicitaciones!</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>Has creado tu cuenta exitosamente</Text>

          {/* Success Illustration */}
          <View style={styles.illustrationContainer}>
            <Image
              source={require('../../images/onboarding/ivitoo-success.png')}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </ScrollView>

        {/* Continue Button - Fixed at bottom */}
        <View style={styles.buttonContainer} pointerEvents="box-none">
          <Button
            onPress={handleContinue}
            title="Continuar"
            style={styles.continueButton}
          />
        </View>

        {/* Home Indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: IVOO_COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: IVOO_COLORS.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: IVOO_COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 100, // Space for fixed button
  },
  logoContainer: {
    width: 272,
    height: 42,
    marginTop: 83,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
    lineHeight: 38, // Increased line height to prevent text cutting
    letterSpacing: 0.0591,
    color: IVOO_COLORS.black,
    textAlign: 'center',
    marginTop: 74,
    width: 300, // Increased width to prevent text cutting
  },
  subtitle: {
    fontSize: 20,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    lineHeight: 21.657,
    letterSpacing: 0.0591,
    color: IVOO_COLORS.black,
    textAlign: 'center',
    marginTop: 28,
    width: 251,
  },
  illustrationContainer: {
    width: 213,
    height: 293,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 34, // Space for home indicator
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: IVOO_COLORS.white,
    zIndex: 10, // Ensure button is above ScrollView
  },
  continueButton: {
    marginTop: 0,
  },
  homeIndicator: {
    position: 'absolute',
    bottom: IVOO_SPACING.homeIndicatorBottom,
    left: '50%',
    marginLeft: IVOO_SPACING.homeIndicatorMargin,
    width: IVOO_SPACING.homeIndicatorWidth,
    height: IVOO_SPACING.homeIndicatorHeight,
    backgroundColor: IVOO_COLORS.black,
    borderRadius: IVOO_SPACING.homeIndicatorBorderRadius,
  },
});

export default RegistrationSuccessScreen;
