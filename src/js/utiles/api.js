
function checkResponse(res){
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

function getData(src){
  return fetch(src, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => checkResponse(res))
}

function postData(url, data){
  console.log(JSON.stringify(data));
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "multipart/json",
    }, 
    method: 'POST',
    body: data
  })
  .then(res => checkResponse(res))
}


export {getData, postData};