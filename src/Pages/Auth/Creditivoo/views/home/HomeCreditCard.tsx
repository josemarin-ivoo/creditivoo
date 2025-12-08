import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {Button} from '@ivoo/components';
import {IVOO_COLORS, IVOO_TYPOGRAPHY} from '@ivoo/styles';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface HomeCreditCardProps {
  onRequestCredit: () => void;
}

const HomeCreditCard: React.FC<HomeCreditCardProps> = ({onRequestCredit}) => {
  return (
    <View style={styles.mainCard}>
      {/* Logo at the top */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../images/creditivo-logo-full.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Row with Text and Ivitoo */}
      <View style={styles.mainCardTopRow}>
        {/* Text Content - Left Side */}
        <View style={styles.mainCardTextContainer}>
          <Text style={styles.mainCardTitle}>
            Solicita aquí tu línea de{' '}
            <Text style={styles.mainCardTitleBold}>CreditIvoo disponible</Text>
          </Text>
        </View>

        {/* Ivitoo Illustration - Inside mainCard, contained */}
        <View style={styles.ivitooInCard}>
          <Image
            source={require('../../images/home/ivitoo-home-no-credit.png')}
            style={styles.ivitooInCardImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Button - Below the row */}
      <View style={styles.mainCardButtonContainer}>
        <Button
          onPress={onRequestCredit}
          title="Solicitar ahora"
          style={styles.requestButton}
          width={SCREEN_WIDTH * 0.7} // Responsive width (70% of screen)
          height={33}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    position: 'absolute',
    top: 60, // Position with ~20% above header (header starts at ~40px, so 60px gives ~20% overlap)
    left: SCREEN_WIDTH * 0.06, // ~24px on standard screens, responsive
    right: SCREEN_WIDTH * 0.06,
    backgroundColor: IVOO_COLORS.white,
    borderRadius: 20,
    paddingLeft: SCREEN_WIDTH * 0.1, // ~40px on standard screens, responsive
    paddingRight: SCREEN_WIDTH * 0.1,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
    overflow: 'hidden', // Keep Ivitoo contained within card
  },
  logoContainer: {
    width: SCREEN_WIDTH * 0.36, // Responsive logo width
    height: SCREEN_WIDTH * 0.36 * 0.154, // Maintain aspect ratio (21/136)
    marginBottom: 16,
    alignSelf: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  mainCardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
    position: 'relative',
  },
  separator: {
    height: 1.5,
    backgroundColor: '#E5E5E5', // Light gray separator
    marginBottom: 16,
    width: '100%',
  },
  mainCardTextContainer: {
    flex: 1,
    maxWidth: SCREEN_WIDTH * 0.45, // Responsive max width (~45% of screen)
    marginRight: 8,
  },
  mainCardTitle: {
    fontSize: 16,
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    lineHeight: 23,
    color: IVOO_COLORS.black,
  },
  mainCardTitleBold: {
    fontFamily: IVOO_TYPOGRAPHY.fonts.interBold,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.bold,
  },
  ivitooInCard: {
    width: SCREEN_WIDTH * 0.18, // Responsive width (~68px on standard screens)
    height: SCREEN_WIDTH * 0.18 * 1.118, // Maintain aspect ratio (76/68)
    justifyContent: 'center',
    alignItems: 'center',
  },
  ivitooInCardImage: {
    width: '100%',
    height: '100%',
  },
  mainCardButtonContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  requestButton: {
    marginTop: 0,
  },
});

export default HomeCreditCard;
