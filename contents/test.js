// デモ用Javascript

function httpGet(url) {
  console.log("httpGet Start");
  var ret = "";
  $.ajax({
    url: url,
    async: false,
    type: "GET",
    success: function(html) {
      //console.log("success: ");
      //console.log(html);
      ret = html;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      console.log("error: " + errorThrown);
    }
  });
  return ret;
}

