import { FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, TOKEN_FAILED, TOKEN_REQUEST, TOKEN_SUCCESS, USER_FAILED, USER_REQUEST, USER_SUCCESS } from '../actions/authEtc';
import { authReducer } from './authEtc';

const initialState = {
  name: '',
  email: '',
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  forgotRequest: false,
  forgotFailed: false,
  resetRequest: false,
  resetFailed: false,
  authRequest: false,
  authFailed: false,
  tokenRequest: false,
  tokenFailed: false,
};

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(initialState, {})).toEqual(
      initialState
    )
  })

  it('should handle FORGOT_PASSWORD_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        forgotRequest: true
      }
    )
  })

  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_SUCCESS
      })
    ).toEqual(
      {
        ...initialState,
        forgotFailed: false,
        forgotRequest: false
      }
    )
  })

  it('should handle FORGOT_PASSWORD_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        forgotFailed: true
      }
    )
  })

  it('should handle RESET_PASSWORD_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        resetRequest: true,
        forgotRequest: true,
        resetRequest: false,
      }
    )
  })

  it('should handle RESET_PASSWORD_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_SUCCESS
      })
    ).toEqual(
      {
        ...initialState,
        resetFailed: false,
        resetRequest: false
      }
    )
  })

  it('should handle RESET_PASSWORD_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        resetFailed: true,
        forgotFailed: true,
        resetFailed: false
      }
    )
  })

  it('should handle REGISTER_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        registerRequest: true
      }
    )
  })

  it('should handle REGISTER_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_SUCCESS,
        user: { name: '', email: '' }
      })
    ).toEqual(
      {
        ...initialState,
        registerFailed: false,
        registerRequest: false,
        name: '',
        email: ''
      }
    )
  })

  it('should handle REGISTER_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        registerFailed: true
      }
    )
  })

  it('should handle LOGIN_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        loginRequest: true
      }
    )
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        user: { name: '', email: '' }
      })
    ).toEqual(
      {
        ...initialState,
        loginFailed: false,
        loginRequest: false,
        isLoggedIn: true,
        name: '',
        email: ''
      }
    )
  })

  it('should handle LOGIN_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        loginFailed: true,
        isLoggedIn: false
      }
    )
  })

  it('should handle LOGOUT_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        logoutRequest: true
      }
    )
  })

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_SUCCESS
      })
    ).toEqual(
      {
        ...initialState,
        logoutFailed: false, 
        logoutRequest: false  , 
        isLoggedIn : false
      }
    )
  })

  it('should handle LOGOUT_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        logoutFailed: true
      }
    )
  })

  it('should handle USER_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: USER_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        authRequest: true
      }
    )
  })

  it('should handle USER_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: USER_SUCCESS,
        user: { name: '', email: '' }
      })
    ).toEqual(
      {
        ...initialState,
        authFailed: false,
        authRequest: false,
        name: '',
        email: '',
        isLoggedIn: true
      }
    )
  })

  it('should handle USER_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: USER_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        authFailed: true,
        isLoggedIn: false
      }
    )
  })

  it('should handle USER_UPDATE_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: USER_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        authRequest: true
      }
    )
  })

  it('should handle USER_UPDATE_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: USER_SUCCESS,
        user: { name: '', email: '' }
      })
    ).toEqual(
      {
        ...initialState,
        authFailed: false,
        authRequest: false,
        name: '',
        email: '',
        isLoggedIn: true
      }
    )
  })

  it('should handle USER_UPDATE_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: USER_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        authFailed: true,
        isLoggedIn: false
      }
    )
  })

  it('should handle TOKEN_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: TOKEN_REQUEST
      })
    ).toEqual(
      {
        ...initialState,
        tokenRequest: true
      }
    )
  })

  it('should handle TOKEN_SUCCESS', () => {
    expect(
      authReducer(initialState, {
        type: TOKEN_SUCCESS
      })
    ).toEqual(
      {
        ...initialState,
        tokenFailed: false,
        tokenRequest: false,
        isLoggedIn: true
      }
    )
  })

  it('should handle TOKEN_FAILED', () => {
    expect(
      authReducer(initialState, {
        type: TOKEN_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        tokenFailed: true,
        isLoggedIn: false
      }
    )
  })
}) 