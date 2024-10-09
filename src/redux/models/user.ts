import {createModel} from '@rematch/core';
import {RootModel} from '.';

interface UserState {
  isLoggedIn: boolean;
  userInfo: {name: string; email: string} | null;
}

export const user = createModel<RootModel>()({
  state: {
    isLoggedIn: false,
    userInfo: null,
  } as UserState,

  reducers: {
    addUser(state, payload: {name: string; email: string}) {
      return {
        ...state,
        isLoggedIn: true,
        userInfo: payload,
      };
    },
    logout(state) {
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    },
  },

  effects: dispatch => ({
    async signup(payload: {name: string; email: string; password: string}) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      dispatch.user.addUser({name: payload.name, email: payload.email});

      return {status: 'success'};
    },
    async loginAsync(payload: {email: string; password: string}) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userInfo = {name: 'JohnDoe', email: payload.email};
      dispatch.user.addUser(userInfo);

      return {status: 'success'};
    },
    async logoutAsync() {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('User logged out');
      dispatch.user.logout();
    },
  }),
});
