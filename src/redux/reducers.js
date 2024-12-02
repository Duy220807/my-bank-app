import { TOGGLE_LOAN_HISTORY, SET_USER, CLEAR_USER } from './actions';

const initialState = {
  isLoanHistoryVisible: false, // Mặc định không hiển thị lịch sử khoản vay
  user: null, // Trạng thái người dùng mặc định là null
};

const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOAN_HISTORY:
      return {
        ...state,
        isLoanHistoryVisible: !state.isLoanHistoryVisible,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload, // Lưu thông tin người dùng
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null, // Xóa thông tin người dùng
      };
    default:
      return state;
  }
};

export default loanReducer;
