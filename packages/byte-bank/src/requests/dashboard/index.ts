import request from '../config';

export const getBalance = () => request.get('/account/balance');
