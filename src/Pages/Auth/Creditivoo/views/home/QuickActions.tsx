import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {IVOO_COLORS, IVOO_TYPOGRAPHY} from '@ivoo/styles';

// Import SVG components - react-native-svg-transformer handles these
// @ts-ignore - SVG transformer handles these imports at runtime
import PaymentsOneIcon from '../../svgs/menus/payments-one.svg';
// @ts-ignore
import ExtractIcon from '../../svgs/menus/extract.svg';
// @ts-ignore
import GemIcon from '../../svgs/menus/gem.svg';
// @ts-ignore
import PaymentsTwoIcon from '../../svgs/menus/payments-two.svg';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

interface QuickActionsProps {
  onActionPress: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({onActionPress}) => {
  const actions = [
    {
      id: 'cuotas',
      label: 'Cuotas',
      Icon: PaymentsOneIcon,
    },
    {
      id: 'movimientos',
      label: 'Movimientos',
      Icon: ExtractIcon,
    },
    {
      id: 'puntos',
      label: 'Puntos',
      Icon: GemIcon,
    },
    {
      id: 'compras',
      label: 'Compras',
      Icon: PaymentsTwoIcon,
    },
  ];

  return (
    <View style={styles.quickActions}>
      {actions.map(action => {
        const IconComponent = action.Icon;
        return (
          <TouchableOpacity
            key={action.id}
            style={styles.quickActionItem}
            onPress={() => onActionPress(action.id)}>
            <View style={styles.quickActionIcon}>
              <IconComponent
                width={SCREEN_WIDTH * 0.064} // ~24px responsive
                height={SCREEN_WIDTH * 0.064} // Maintain aspect ratio
              />
            </View>
            <Text style={styles.quickActionLabel}>{action.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SCREEN_WIDTH * 0.06, // ~24px responsive
    marginBottom: SCREEN_HEIGHT * 0.037, // ~30px responsive
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: SCREEN_WIDTH * 0.14, // ~53px responsive
    height: SCREEN_WIDTH * 0.14, // Maintain square aspect ratio
    borderRadius: SCREEN_WIDTH * 0.032, // ~12px responsive
    backgroundColor: IVOO_COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SCREEN_WIDTH * 0.021, // ~8px responsive
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionLabel: {
    fontSize: SCREEN_WIDTH * 0.032, // ~12px responsive
    fontFamily: IVOO_TYPOGRAPHY.fonts.interRegular,
    fontWeight: IVOO_TYPOGRAPHY.fontWeight.regular,
    color: IVOO_COLORS.black,
    textAlign: 'center',
  },
});

export default QuickActions;
