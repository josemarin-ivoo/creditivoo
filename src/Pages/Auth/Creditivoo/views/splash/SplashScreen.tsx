import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';
import {SCREENS} from '@shared-constants';
import CreditIvooLogo from '@ivoo/svgs/CreditIvooLogo';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const {isLoggedIn, isAutoLoginLoading} = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    // Wait for auth to finish loading, then navigate
    if (!isAutoLoginLoading) {
      const timer = setTimeout(() => {
        if (!isLoggedIn) {
          (navigation as any).navigate(SCREENS.LOGIN);
        } else {
          (navigation as any).navigate(SCREENS.HOME);
        }
      }, 1500); // Show splash for 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [isAutoLoginLoading, isLoggedIn, navigation]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        bounces={true}
        overScrollMode="always"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        {/* Central Logo/Asset */}
        <View style={styles.logoContainer}>
          <CreditIvooLogo width={171} height={109} />
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
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  logoContainer: {
    width: 171,
    height: 109,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -67,
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
  },
});

export default SplashScreen;
