import cookie from 'react-cookies';
import { AUTH_ROOT, FRONT_ROOT } from '../config/api';
import { loginStatus } from '../reducers/authReducer';
import { clearForm } from './signinFormActions';
import history from '../config/history';

const authRequest = (url, method, body) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(url, options);
};

export const resend = (email) => (dispatch, getState) => {
    const url = `${AUTH_ROOT}/users/confirmation.json`;
    const postData = {
        user: {
            email: email,
        },
        return_url: `${FRONT_ROOT}/auth/signup-done`,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    };

    dispatch(startFetch());
    return fetch(url, options)
        .then(res => {
            if(res.status !== 201) throw res;

            alert('The e-mail has been re-sentered.\n' + 'Please check your email.');
        })
        .catch(e => {
            console.error(e);
            alert('Failed to send email. Please try again.');
        })
        .finally(() =>{
            dispatch(endFetch());
        });

};

// triggered when login button is clicked
export const login = (return_url) => (dispatch, getState) => {
  const url = `${AUTH_ROOT}/users/sign_in.json`;
  const postData = {
    user: {
      email: getState().signin.get('email'),
      password: getState().signin.get('password'),
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  dispatch(startFetch());
  return fetch(url, options)
    .then(res => {
      if(res.status !== 201) throw res;
      if(!res.headers.has('Authorization')) throw res;

      const bearer = res.headers.get('Authorization');
      cookie.save('webloc-auth-bearer', bearer, { path: '/' });
      dispatch(clearForm());
        if (return_url === '') {
            window.location.href='/';
        } else {
            window.location.href=return_url;
        }
    })
    .catch(e => {
      console.log(e);
      dispatch(setSignInStatus(loginStatus.FAIL));
    })
    .finally(() =>{
      dispatch(endFetch());
    });
};

export const signup = () => (dispatch, getState) => {
  const url = `${AUTH_ROOT}/users.json`;
  const postData = {
    user: {
      email: getState().signup.get('email'),
      password: getState().signup.get('password'),
      lang_code3: getState().signup.get('countryCode').value
    },
    return_url: `${FRONT_ROOT}/auth/signup-done`,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  dispatch(startFetch());
  return fetch(url, options)
    .then(res => {
      if(res.status !== 201) throw res;

      history.push('/auth/email-cert', { email: getState().signup.get('email') });
    })
    .catch(e => {
      console.error(e);
      alert('Registration failed. Please try again.');
    })
    .finally(() =>{
      dispatch(endFetch());
    });
}

export const startFetch = () => (
  {
    type: 'START_FETCH',
  }
);

export const endFetch = () => (
  {
    type: 'END_FETCH',
  }
);

export const setSignInStatus = (status) => (
  {
    type: 'SET_SIGN_IN_STATUS',
    status,
  }
);
