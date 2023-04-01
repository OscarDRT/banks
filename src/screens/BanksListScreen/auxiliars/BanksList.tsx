import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Bank} from '../../../models/bank';
import {BankCard, BANK_CARD_HEIGHT} from './BankCard';

interface BanksListProps {
  banks: Bank[];
}

export const BanksList = ({banks}: BanksListProps) => {
  const itemSeparatorComponent = useCallback(() => {
    return <View style={{height: 10}} />;
  }, []);

  return (
    <FlatList
      data={banks}
      renderItem={({item}) => <BankCard bank={item} />}
      ItemSeparatorComponent={itemSeparatorComponent}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => `${item.age}-${item.bankName}`}
      getItemLayout={(_, index) => ({
        length: BANK_CARD_HEIGHT,
        offset: BANK_CARD_HEIGHT * index,
        index,
      })}
    />
  );
};
