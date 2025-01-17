import ENV from 'react-native-config'

export default {
  api: `http://78.46.245.120:4040/v1`,
  tapsellKey: 'errcgodtaagspphnnohgfhosoagspflpbsjnqikopottrmnjtmjcqdgnaipiibbdtokcik',
  adZones: {
    default: '5aaed4026d106d000183089d',
    bottomBanner: '5abb3e09bb1c6d00011589f4',
    video: '5aba1f0db601ec00019f5e25',
    native: '5ac874be8d956d0001d7e339',
  },
  values: {
    newWhichPrice: 0,
    adInterval: 15,
    videoPrize: 10,
  },
  isCafeBazaarBuild: ENV.CAFE_BAZAAR_BUILD === 'TRUE',
}
