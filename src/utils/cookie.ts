export function getCookie(name:string) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  export function setCookie(name:string, value:string | number | boolean | null, props?:any) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }
    value = (value != null) ? encodeURIComponent(value) : null;
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
  }
  
  export function deleteCookie(name:string) {
    setCookie(name, null, {
      expires: -1,
      path: '/'
    })
  }
  
  export const getTokens = (res: { accessToken:string, refreshToken:string, success:boolean} ) => {
    const accessToken = res.accessToken.split('Bearer ')[1];
    const refreshToken = res.refreshToken;
    setCookie('token', accessToken , {secure: true, sameSite: 'none'});
    localStorage.setItem('refreshToken', refreshToken);
  };