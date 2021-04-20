
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
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    }, 
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => checkResponse(res))
}


export {getData, postData};