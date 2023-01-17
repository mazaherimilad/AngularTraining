export interface UserJwt {
    map(arg0: (d: any) => any): void;
    "idToken":string,
    "refreshToken":string;
    "accessTokenExpiresSeconds":number;
    "accessToken":string

}
