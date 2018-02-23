import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { black, white } from 'src/theme'
import Pressable from 'src/common/Pressable'
import coin2 from 'src/common/icons/coin-2.png'
import Jext from 'src/common/Jext'
import { isRTL } from 'src/utils/i18n'
const { width } = Dimensions.get('window')

const Hamburger = ({ onPress, active }) => (
  <Pressable onPress={onPress}>
    <View
      style={styles.hamburger}
    >
      {
        active
          ? <View style={styles.backWrapper}>
          <Jext c={white}>{__t('back')}</Jext>
        </View>
          : <View style={styles.barWrapper}>
          <View style={styles.hamburgerBar} />
          <View style={styles.hamburgerBar} />
          <View style={styles.hamburgerBar} />
        </View>
      }
    </View>
  </Pressable>
)

const Coins = ({ totalCoins, level, type }) => (
  <View style={styles.coinsWrapper}>
    <View style={[styles.coinField, { flex: 1.3, flexDirection: isRTL ? 'row-reverse' : 'row', paddingStart: 13 }]}>
      <Jext c={white} f={18}>{ totalCoins }</Jext>
      <Image
        source={coin2}
        style={{
          width: 30,
          height: 30,
          marginHorizontal: 5
        }}
      />
    </View>
    {
      type === 'level' && level && (
        <View style={[styles.coinField, { borderLeftWidth: 1, borderLeftColor: black, paddingStart: 5 }]}>
          <Jext f={9} c={white} bold style={{ textAlign: 'center' }}>{__t('header.level', { level: level.current })}</Jext>
          <Jext f={8} c={white} bold style={{ textAlign: 'center' }}>{__t('header.questions', { current: level.currentQuestion, total: level.totalQuestions })}</Jext>
        </View>
      )
    }
  </View>
)

const AppHeader = ({ style, children, navigation, ...otherProps }) => {
  const active = navigation.state.routeName !== 'Home'

  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <Hamburger
        onPress={() => active ? navigation.pop() : navigation.navigate('Menu')}
        active={active}
      />
      <Coins
        {...otherProps}
      />
      { children }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    width,
    height: 80,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hamburger: {
    width: 70,
    height: 50,
    backgroundColor: black,
    borderRadius: 5,
    transform: [{
      skewX: '10deg'
    }],
    start: -10,
  },
  barWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingEnd: 15,
    paddingStart: 20,
    paddingVertical: 13,
    transform: [{
      skewX: '-10deg'
    }],
  },
  backWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingEnd: 15,
    // paddingStart: 20,
    paddingVertical: 13,
    transform: [{
      skewX: '-10deg'
    }],
  },
  hamburgerBar: {
    height: 3,
    alignSelf: 'stretch',
    backgroundColor: white,
  },
  coinsWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    height: 30,
    width: 120,
  },
  coinField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AppHeader