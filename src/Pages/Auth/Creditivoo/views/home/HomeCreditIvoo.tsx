import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {IVOO_COLORS, IVOO_TYPOGRAPHY} from '@ivoo/styles';
import HomeCreditCard from './HomeCreditCard';
import QuickActions from './QuickActions';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const HomeCreditIvoo: React.FC = () => {
  const handleRequestCredit = () => {
    // TODO: Navigate to credit request screen
    console.log('Request credit');
  };

  const handleQuickAction = (action: string) => {
    // TODO: Navigate to respective screen
    console.log('Quick action:', action);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar
        backgroundColor={IVOO_COLORS.primary}
        barStyle="light-content"
      />

      {/* Header with Green Background */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Header Icons */}
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIcon}>
              {/* <Icon
                name="eye-slash"
                type={IconType.Feather}
                size={20}
                color={IVOO_COLORS.white}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon
                name="bell"
                type={IconType.Feather}
                size={20}
                color={IVOO_COLORS.white}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon
                name="help-circle"
                type={IconType.Feather}
                size={20}
                color={IVOO_COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Credit Request Card - Outside ScrollView to ensure proper zIndex */}
      <HomeCreditCard onRequestCredit={handleRequestCredit} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Quick Action Icons */}
        <QuickActions onActionPress={handleQuickAction} />

        {/* Novedades Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Novedades</Text>
          <View style={styles.bannerCard}>
            <Image
              source={require('../../images/home/placeholders/main-banner-placeholder.png')}
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Descuentos Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Descuentos</Text>
            <Text style={styles.sectionTitle}>Ayuda</Text>
          </View>
          <View style={styles.discountsRow}>
            <View style={styles.discountCard}>
              <Image
                source={require('../../images/home/placeholders/discuounts-placeholder.png')}
                style={styles.discountImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.helpCard}>
              <Text style={styles.helpTitle}>
                Necesitas ayuda, habla con Ivitoo:
              </Text>
              <View style={styles.helpContent}>
                <Image
                  source={require('../../images/home/ivitoo-home-no-credit.png')}
                  style={styles.helpIvitoo}
                  resizeMode="contain"
                />
                <View style={styles.helpBubble}>
                  <Text style={styles.helpText}>
                    Hola! Soy Ivitoo, tu asesor virtual de CreditIvoo.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItemActive}>
          <Icon
            name="grid"
            type={IconType.Feather}
            size={20}
            color={IVOO_COLORS.white}
          />
          <Text style={styles.tabLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.tabIconPlaceholder} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.tabDots}>
            <View style={styles.tabDot} />
            <View style={styles.tabDot} />
            <View style={styles.tabDot} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: IVOO_COLORS.white,
  },
  header: {
    backgroundColor: IVOO_COLORS.primary,
    paddingTop: SCREEN_HEIGHT * 0.025, // ~20px responsive
    paddingBottom: SCREEN_HEIGHT * 0.05, // ~40px responsive
    paddingHorizontal: SCREEN_WIDTH * 0.06, // ~24px responsive
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: SCREEN_WIDTH * 0.045, // ~17px responsive
  },
  headerIcon: {
    padding: SCREEN_WIDTH * 0.01, // ~4px responsive
  },
  scrollView: {
    flex: 1,
    backgroundColor: IVOO_COLORS.white,
  },
  scrollContent: {
    paddingTop: SCREEN_HEIGHT * 0.25, // ~200px responsive - space for mainCard
    paddingBottom: SCREEN_HEIGHT * 0.12, // ~100px responsive
  },
  section: {
    paddingHorizontal: SCREEN_WIDTH * 0.06, // ~24px responsive
    marginBottom: SCREEN_HEIGHT * 0.037, // ~30px responsive
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SCREEN_HEIGHT * 0.015, // ~12px responsive
  },
  sectionTitle: {
    fontSize: SCREEN_WIDTH * 0.032, // ~12px responsive
    fontFamily: IVOO_TYPOGRAPHY.fonts.inriaSansBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
    color: IVOO_COLORS.black,
  },
  bannerCard: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.15, // ~122px responsive
    borderRadius: SCREEN_WIDTH * 0.032, // ~12px responsive
    overflow: 'hidden',
    marginBottom: SCREEN_HEIGHT * 0.025, // ~20px responsive
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  discountsRow: {
    flexDirection: 'row',
    gap: SCREEN_WIDTH * 0.032, // ~12px responsive
  },
  discountCard: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.12, // ~96px responsive
    borderRadius: SCREEN_WIDTH * 0.032, // ~12px responsive
    overflow: 'hidden',
  },
  discountImage: {
    width: '100%',
    height: '100%',
  },
  helpCard: {
    flex: 1,
    backgroundColor: IVOO_COLORS.white,
    borderRadius: SCREEN_WIDTH * 0.032, // ~12px responsive
    padding: SCREEN_WIDTH * 0.032, // ~12px responsive
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  helpTitle: {
    fontSize: SCREEN_WIDTH * 0.027, // ~10px responsive
    fontFamily: IVOO_TYPOGRAPHY.fonts.inriaSansRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    color: IVOO_COLORS.black,
    textAlign: 'right',
    marginBottom: SCREEN_WIDTH * 0.021, // ~8px responsive
  },
  helpContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SCREEN_WIDTH * 0.021, // ~8px responsive
  },
  helpIvitoo: {
    width: SCREEN_WIDTH * 0.11, // ~41px responsive
    height: SCREEN_WIDTH * 0.11 * 1.488, // Maintain aspect ratio (61/41)
  },
  helpBubble: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: SCREEN_WIDTH * 0.021, // ~8px responsive
    padding: SCREEN_WIDTH * 0.021, // ~8px responsive
  },
  helpText: {
    fontSize: SCREEN_WIDTH * 0.019, // ~7px responsive
    fontFamily: IVOO_TYPOGRAPHY.fonts.inriaSansRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    color: IVOO_COLORS.black,
    lineHeight: SCREEN_WIDTH * 0.027, // ~10px responsive
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.11, // ~88px responsive
    backgroundColor: '#FEFEFE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.074, // ~28px responsive
    paddingTop: SCREEN_HEIGHT * 0.017, // ~14px responsive
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  tabItemActive: {
    backgroundColor: IVOO_COLORS.primary,
    borderRadius: SCREEN_WIDTH * 0.04, // ~15px responsive
    paddingHorizontal: SCREEN_WIDTH * 0.058, // ~22px responsive
    paddingVertical: SCREEN_HEIGHT * 0.012, // ~10px responsive
    flexDirection: 'row',
    alignItems: 'center',
    gap: SCREEN_WIDTH * 0.01, // ~4px responsive
  },
  tabLabelActive: {
    fontSize: SCREEN_WIDTH * 0.029, // ~11px responsive
    fontFamily: IVOO_TYPOGRAPHY.fonts.inriaSansBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
    color: IVOO_COLORS.white,
  },
  tabItem: {
    width: SCREEN_WIDTH * 0.117, // ~44px responsive
    height: SCREEN_WIDTH * 0.117, // Maintain square aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconPlaceholder: {
    width: SCREEN_WIDTH * 0.053, // ~20px responsive
    height: SCREEN_WIDTH * 0.053, // Maintain square aspect ratio
    backgroundColor: '#C4C4C4',
    borderRadius: SCREEN_WIDTH * 0.011, // ~4px responsive
  },
  tabDots: {
    flexDirection: 'row',
    gap: SCREEN_WIDTH * 0.01, // ~4px responsive
  },
  tabDot: {
    width: SCREEN_WIDTH * 0.011, // ~4px responsive
    height: SCREEN_WIDTH * 0.011, // Maintain square aspect ratio
    borderRadius: SCREEN_WIDTH * 0.005, // ~2px responsive
    backgroundColor: '#C4C4C4',
  },
});

export default HomeCreditIvoo;
