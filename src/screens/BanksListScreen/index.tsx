import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {Container} from '../../components/Container';
import {Header} from '../../components/Header';
import {useBankListViewModel} from '../../viewmodels/BankListViewModel';
import {BanksList} from './auxiliars/BanksList';

export const BanksListScreen = () => {
  const {banks, loading} = useBankListViewModel();

  return (
    <Container margins>
      <Header title="Bancos" />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={{flex: 1, marginVertical: 16}}>
          <BanksList banks={banks} />
        </View>
      )}
    </Container>
  );
};
