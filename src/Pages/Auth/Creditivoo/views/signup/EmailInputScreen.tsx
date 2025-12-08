import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Button, Input, Checkbox} from '@ivoo/components';
import {IVOO_COLORS, IVOO_SPACING, IVOO_TYPOGRAPHY} from '@ivoo/styles';

const EmailInputScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handleContinue = () => {
    console.log('handleContinue called', {email, acceptPolicy});
    if (!email.trim()) {
      console.log('Email is empty');
      // TODO: Show error message
      return;
    }
    if (!acceptPolicy) {
      console.log('Policy not accepted');
      // TODO: Show error message
      return;
    }
    // TODO: Send email verification code
    console.log('Navigating to EmailOTPVerification with email:', email);
    try {
      (navigation as any).navigate('EmailOTPVerification', {
        email: email.trim(),
      });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handlePolicyPress = () => {
    // TODO: Open commercial policy
    Linking.openURL('https://ivoo.app/commercial-policy');
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
          <Text style={styles.title}>Ingresa tu correo</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Te enviaremos a tu correo electrónico con un código de 6 dígitos
            para validarlo 📩
          </Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Input
              placeholder="ivitoo@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              containerStyle={styles.inputWrapper}
            />
          </View>

          {/* Policy Checkbox */}
          <View style={styles.policyContainer}>
            <Checkbox
              checked={acceptPolicy}
              onToggle={() => setAcceptPolicy(!acceptPolicy)}
              style={styles.checkbox}
            />
            <View style={styles.policyTextContainer}>
              <Text style={styles.policyText}>
                Autorizo el uso de mi correo electrónico según la politicas de{' '}
                <Text style={styles.policyLink} onPress={handlePolicyPress}>
                  fines comerciales de IVOO APP.
                </Text>
              </Text>
            </View>
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
    fontSize: 24,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
    lineHeight: 21.657,
    letterSpacing: 0.0591,
    color: IVOO_COLORS.black,
    textAlign: 'center',
    marginTop: 68,
    width: 307,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: '300',
    lineHeight: 21.657,
    letterSpacing: 0.0591,
    color: '#676464',
    textAlign: 'center',
    marginTop: 40,
    width: 306,
  },
  inputContainer: {
    marginTop: 83,
    alignItems: 'center',
  },
  inputWrapper: {
    marginTop: 0,
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 28,
    width: 303,
    paddingHorizontal: 0,
  },
  checkbox: {
    marginRight: 9,
    marginTop: 2,
  },
  policyTextContainer: {
    flex: 1,
  },
  policyText: {
    fontSize: 12,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    lineHeight: 20,
    color: '#828282',
  },
  policyLink: {
    textDecorationLine: 'underline',
    color: '#828282',
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

export default EmailInputScreen;
