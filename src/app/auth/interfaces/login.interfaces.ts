export enum LoginStatus {
    SUCCESS = "success"
}

export enum TokenType {
    BEARER = "Bearer"
}

export interface LoginResponse {
    access_token: string
    data: null
    expires_in: number
    refresh_token: string
    status: LoginStatus
    token_type: TokenType
}