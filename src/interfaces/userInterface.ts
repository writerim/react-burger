// Интефейс пользователя
export interface UserInterface {
    name?: string;
    email?: string;
    refreshToken?: string;
    accessToken? : string;
    isLoggedIn? : boolean
}