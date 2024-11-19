// src/redux/reducers.js
import { TOGGLE_LOAN_HISTORY } from './actions';

const initialState = {
  isLoanHistoryVisible: false, // Mặc định là hiển thị lịch sử khoản vay
};

const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOAN_HISTORY:
      return {
        ...state,
        isLoanHistoryVisible: !state.isLoanHistoryVisible, // Đảo ngược trạng thái
      };
    default:
      return state;
  }
};

export default loanReducer;