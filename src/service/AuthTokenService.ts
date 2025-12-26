
let accessToken: string | null = null;

export const authTokenService = {
  setToken(token: string) {
    accessToken = token;
  },
  getToken() {
    return accessToken;
  },
  clearToken() {
    accessToken = null;
  },
};
