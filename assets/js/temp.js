//Retrieve Melbourne Temp From BOM

//Helper function
/*
 * Usage:
 * getJSON("https://jsonplaceholder.typicode.com/comments", { postId: 1})
 *  .then(data => {
 *    console.log(data);
 *  });
 */

function getJSON(url, qs_params) {
  function buildQueryString(params) {
    return Object.entries(params).map(d => `${d[0]}=${d[1]}`).join('&');
  }

  return new Promise((resolve, reject) => {
    const qs = qs_params ? '?' + buildQueryString(qs_params) : '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}${qs}`);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function temp() {
  getJSON("https://cors-anywhere.herokuapp.com/http://reg.bom.gov.au/fwo/IDV60901/IDV60901.95936.json")
    .then(data => {
      let thedata = data.observations.data[0];
      //console.log(thedata);
      elTemp.innerHTML = `${thedata.air_temp}ºC ${thedata.apparent_t}ºC`;


    });
}
