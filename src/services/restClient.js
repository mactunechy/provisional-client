import AuthStore from './auth';

export default class RestUtilities {
  static get (url) {
    return RestUtilities.request ('GET', url, '');
  }

  static delete (url) {
    return RestUtilities.request ('DELETE', url, '');
  }

  static put (url, data) {
    return RestUtilities.request ('PUT', url, data);
  }

  static post (url, data, multipart) {
    return RestUtilities.request ('POST', url, data, multipart);
  }

  static request (method, url, data, multipart) {
    let isJsonResponse = false;
    let isBadRequest = false;
    let body = undefined;
    let headers = new Headers ();

    headers.set ('x-auth-token', `${AuthStore.getToken ()}`);
    headers.set ('Accept', 'application/json');
    if (multipart) headers.set ('Accept', 'multipart/form-data');
    if (data && data !== '') {
      if (typeof data === 'object') {
        headers.set ('Content-Type', 'application/json');
        body = JSON.stringify (data);
      } else {
        headers.set ('Content-Type', 'application/x-www-form-urlencoded');
        body = data;
      }
    }
    let baseUrl = 'http://localhost:7000/';
    return fetch (baseUrl + url, {
      method: method,
      headers: headers,
      body: body,
    })
      .then (response => {
        if (response.status === 401) {
          // Unauthorized; redirect to sign-in
          AuthStore.removeToken ();
          window.location.replace (`/login_in`);
        }

        isBadRequest = response.status >= 400 || response.status >= 500;

        let responseContentType = response.headers.get ('content-type');
        if (
          responseContentType &&
          responseContentType.indexOf ('application/json') !== -1
        ) {
          isJsonResponse = true;
          return response.json ();
        } else {
          return response.text ();
        }
      })
      .then (responseContent => {
        let response = {
          is_error: isBadRequest,
          error_content: isBadRequest ? responseContent : null,
          content: isBadRequest ? null : responseContent,
        };
        return response;
      });
  }
}
