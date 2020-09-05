export enum AuthErrorCode {
  FAILED = 'request_failed',
  DATA_PARAMS_MISSING = 'data/params_missing',
  AUTH_FAILED = 'auth/failed',
  AUTH_REQUIRED = 'auth/required',
  INVALID_TOKEN = 'auth/invalid_token',
  NO_RIGHTS = 'user/no_rights',
  ROLE_MISSING = 'user/role_missing',
  USER_MAIL_EXIST = 'user/mail_exist',
  USER_NOT_EXIST = 'user/not_exist',
}
