//custom
import { dispatchRequest } from '../api';

export const authenticateUser = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: 'login',
    data
  });
}

export const resetPassword = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: 'users/password/email',
    data
  });
}

export const resetPasswordSend = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: 'users/password/reset',
    data
  });
}

export const createAccount = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: 'users/signup',
    data: {
      ...data
    }
  })
}

export const validateEmail = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: `users/email`,
    data: {
      ...data
    }
  })
}

export const validatePhone = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: `users/cell_phone`,
    data: {
      ...data
    }
  })
}

export const loginUser = async (data = {}) => {
  return await dispatchRequest({
    method: 'post',
    url: `users/auth`,
    data: {
      ...data
    }
  })
}

export const authIdentityConfirm = async (id, data = {}) => {
  return await dispatchRequest({
    method: 'put',
    url: `users/${id}`,
    data: {
      ...data
    }
  })
}


