import {Bank} from '../models/bank';

class BankService {
  async fetchBanks(): Promise<Bank[]> {
    const response = await fetch(
      'https://dev.obtenmas.com/catom/api/challenge/banks',
    );
    const data = await response.json();
    return data;
  }
}

export default BankService;
