import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import {IVOO_COLORS, IVOO_SPACING, IVOO_TYPOGRAPHY} from '@ivoo/styles';

const OTP_LENGTH = 6;

const OTPVerificationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleOtpChange = (code: string) => {
    if (code.length === OTP_LENGTH) {
      handleVerify(code);
    }
  };

  const handleVerify = (code: string) => {
    // TODO: Verificar código OTP
    console.log('Verifying OTP:', code);
    // Navigate to email input screen
    (navigation as any).navigate('EmailInput');
  };

  const handleResend = () => {
    // TODO: Reenviar código OTP
    // The OtpInput component will handle clearing internally
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
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
        <Text style={styles.title}>Escribe el código</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Ingresa el código de 6 digitos para validar tu número de celular 📲
        </Text>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          <OtpInput
            numberOfDigits={OTP_LENGTH}
            onTextChange={handleOtpChange}
            autoFocus
            theme={{
              containerStyle: styles.otpInputContainer,
              pinCodeContainerStyle: styles.otpInputBox,
              pinCodeTextStyle: styles.otpInputText,
              focusedPinCodeContainerStyle: styles.otpInputBoxFocused,
            }}
          />
        </View>

        {/* Resend Code Section */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendQuestion}>¿No recibiste el código?</Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendLink}>Reenviar código</Text>
          </TouchableOpacity>
        </View>

        {/* Home Indicator */}
        <View style={styles.homeIndicator} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
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
    paddingBottom: 10,
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
    width: 296,
  },
  otpContainer: {
    marginTop: 69,
    alignItems: 'center',
    width: '100%',
  },
  otpInputContainer: {
    gap: 14.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  otpInputBox: {
    width: 35,
    height: 35,
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    borderColor: 'rgba(31, 31, 31, 0.4)',
    borderRadius: 4.438,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInputBoxFocused: {
    borderColor: 'rgba(31, 31, 31, 0.4)',
    borderWidth: 1,
  },
  otpInputText: {
    fontSize: 24,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
    color: IVOO_COLORS.black,
    lineHeight: 35,
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  resendContainer: {
    marginTop: 58,
    alignItems: 'center',
  },
  resendQuestion: {
    fontSize: 16,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    lineHeight: 21.657,
    letterSpacing: 0.0591,
    color: IVOO_COLORS.black,
    textAlign: 'center',
    marginBottom: 8,
  },
  resendLink: {
    fontSize: 16,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
    lineHeight: 21.657,
    letterSpacing: 0.0591,
    color: '#1F1F1F',
    textAlign: 'center',
    textDecorationLine: 'underline',
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

export default OTPVerificationScreen;
