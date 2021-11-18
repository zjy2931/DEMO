function utf8_to_b64( str:string ):string {
    return window.btoa(unescape(encodeURIComponent( str )));
  }
  
  function b64_to_utf8( str:string ):string {
    return decodeURIComponent(escape(window.atob( str )));
  }
  