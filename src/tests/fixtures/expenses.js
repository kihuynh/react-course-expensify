import moment from 'moment';

export default[{
  id: '1',
  description: 'Coffee',
  note: '',
  amount: 250,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 250000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit',
  note: '',
  amount: 6700,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
