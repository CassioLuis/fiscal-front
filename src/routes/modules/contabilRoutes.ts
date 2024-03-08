import { shallowRef } from 'vue'
import { MoneyBillCoin } from '../../components/icons'

import {
  BankStatement
} from '../../components/view'

export default [
  {
    path: '/bank-statement',
    name: 'Extrato',
    component: BankStatement,
    meta: {
      layout: 'MainLayout',
      svg: {
        component: shallowRef(MoneyBillCoin)
      }
    }
  }
]
