import React, {useState, useMemo} from 'react';
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
import {Button, Input} from '@ivoo/components';
import {IVOO_COLORS, IVOO_SPACING, IVOO_TYPOGRAPHY} from '@ivoo/styles';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

interface PasswordRequirement {
  label: string;
  isValid: boolean;
}

const PasswordScreen: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validate password requirements
  const requirements: PasswordRequirement[] = useMemo(() => {
    const hasLength = password.length >= 8 && password.length <= 20;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[$./!@#]/.test(password);

    return [
      {
        label: 'Entre 8 a 20 caracteres',
        isValid: hasLength,
      },
      {
        label: 'Al menos 1 mayuscula',
        isValid: hasUppercase,
      },
      {
        label: 'Al menos 1 número',
        isValid: hasNumber,
      },
      {
        label: 'Al menos 1 caracter especial ($./!@#)',
        isValid: hasSpecialChar,
      },
    ];
  }, [password]);

  const isPasswordValid = useMemo(() => {
    return requirements.every(req => req.isValid);
  }, [requirements]);

  const handleContinue = () => {
    if (!isPasswordValid) {
      // TODO: Show error message
      return;
    }
    // TODO: Save password and complete registration
    console.log('Password set:', password);
    // Navigate to registration success screen
    (navigation as any).navigate('RegistrationSuccess');
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
          <Text style={styles.title}>Escribe tu contraseña</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Tu contraseña es muy importante, no utilices secuencia numericas o
            tu fecha de cumpleaños 🤓
          </Text>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.passwordInputWrapper}>
              <Input
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={styles.inputWrapper}
                style={styles.passwordInput}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}>
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  type={IconType.Feather}
                  size={20}
                  color="#676464"
                  style={styles.eyeIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Password Requirements */}
          <View style={styles.requirementsContainer}>
            {requirements.map((req, index) => (
              <View key={index} style={styles.requirementRow}>
                <View
                  style={[
                    styles.requirementCheckbox,
                    {
                      backgroundColor: req.isValid
                        ? IVOO_COLORS.primary
                        : '#DADADA',
                      borderColor: req.isValid
                        ? IVOO_COLORS.primary
                        : '#DADADA',
                    },
                  ]}>
                  {req.isValid && (
                    <Icon
                      name="check"
                      type={IconType.MaterialCommunityIcons}
                      size={10}
                      color={IVOO_COLORS.white}
                    />
                  )}
                </View>
                <Text style={styles.requirementText}>{req.label}</Text>
              </View>
            ))}
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
  inputContainer: {
    marginTop: 51,
    alignItems: 'center',
  },
  passwordInputWrapper: {
    position: 'relative',
    width: 302,
  },
  inputWrapper: {
    marginTop: 0,
  },
  passwordInput: {
    fontSize: 20, // Larger font size for password dots
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  eyeIconStyle: {
    // Additional styling if needed
  },
  requirementsContainer: {
    marginTop: 28,
    width: 302, // Match input width (same as input container)
    alignItems: 'flex-start',
  },
  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1, // Reduced vertical spacing
  },
  requirementCheckbox: {
    width: 13,
    height: 13,
    borderRadius: 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  requirementText: {
    fontSize: 12,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: '300',
    lineHeight: 21.657,
    letterSpacing: 0.0591,
    color: '#676464', // Match design color
    flex: 1,
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

export default PasswordScreen;
