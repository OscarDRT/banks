import {useEffect, useState} from 'react';

import {Bank} from '../models/bank';
import BankService from '../services/BankService';
import {getData, saveData} from '../utils/mmkv';

export const useBankListViewModel = () => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const bankService = new BankService();

  useEffect(() => {
    const fetchBanks = async () => {
      let banksFromStorage = getData('banks');
      if (banksFromStorage) {
        setBanks(banksFromStorage);
        setLoading(false);
      } else {
        const fetchedBanks = await bankService.fetchBanks();
        setBanks(fetchedBanks);
        saveData('banks', fetchedBanks);
        setLoading(false);
      }
    };

    fetchBanks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {banks, loading};
};
