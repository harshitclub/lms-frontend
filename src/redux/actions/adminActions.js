import { ADMIN_LOGIN } from "../constants/adminConstants";

export const adminLogin = (admin) => {
  return {
    type: ADMIN_LOGIN,
    payload: admin,
  };
};
