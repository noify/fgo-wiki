import LZ from 'lz-string'

function convert_formated_hex_to_bytes(hex_str) {
  var count = 0,
      hex_arr,
      hex_data = [],
      hex_len,
      i;
  
  if (hex_str.trim() == "") return [];
  
  /// Check for invalid hex characters.
  if (/[^0-9a-fA-F\s]/.test(hex_str)) {
    return false;
  }
  
  hex_arr = hex_str.split(/([0-9a-fA-F][0-9a-fA-F])/g);
  hex_len = hex_arr.length;
  
  for (i = 0; i < hex_len; ++i) {
    if (hex_arr[i].trim() == "") {
      continue;
    }
    hex_data[count++] = parseInt(hex_arr[i], 16);
  }
  return hex_data;
}
function convert_formated_hex_to_string(s) {
  var byte_arr = convert_formated_hex_to_bytes(s);
  var res = "";
  for (var i = 0 ; i<byte_arr.length ; i+=2) {
    res += String.fromCharCode(byte_arr[i] | (byte_arr[i+1]<<8));
  }
  return res;
}


var master = JSON.parse(mstTxt);

export default master