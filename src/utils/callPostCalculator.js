import { calculatePostCost } from '../redux/actions/post/calculatePostCost';
import { store } from '../redux/store';
import { totalWeightCart } from './totalWeightCart';

export const callPostCalculator = (val) => {
  store.dispatch(
    calculatePostCost({
      common: {
        recipientAddress: val?.normalizedAddress,
        recipientCity: val?.city,
        recipientCountryName: val?.country,
        recipientRegion: val?.region,
        senderAddress: 'г Санкт-Петербург',
        senderCity: 'Санкт-Петербург',
        senderCountryName: 'Российская Федерация',
        senderRegion: 'Санкт-Петербург',
      },
      cost: {
        recipientAddressGuid: val?.addressGuid,
        recipientPostalCode: val?.postalCode,
        recipientCountryNumericCode: val?.recipientCountryNumericCode ?? '643',
        senderAddressGuid: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        senderPostalCode: '190000',
        weightInGrams: totalWeightCart(),
      },
    }),
  );
};
