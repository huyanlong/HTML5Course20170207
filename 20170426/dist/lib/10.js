"use strict";

/**
 * Created by sks on 2017/4/26.
 */

var getJSON = function getJSON(url) {
  var promise = new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("/20170426/posts.json").then(function (json) {
  console.log('Contents: ' + json);
}, function (error) {
  console.error('出错了', error);
});
//# sourceMappingURL=10.js.map