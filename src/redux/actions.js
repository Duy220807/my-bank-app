export const TOGGLE_LOAN_HISTORY = 'TOGGLE_LOAN_HISTORY';
export const SET_USER = 'SET_USER'; // Hành động để lưu thông tin người dùng
export const CLEAR_USER = 'CLEAR_USER'; // Hành động để xóa thông tin người dùng

export const toggleLoanHistory = () => ({
  type: TOGGLE_LOAN_HISTORY,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
