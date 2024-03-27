const BASE_URL = "http://localhost:3001/api/v1";

async function login(email, password) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "post",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await response.json();
  console.log(data);
}
async function logini(token) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  setTokenData(data);
  console.log(data);
}
async function loginii() {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjQ1MzE1OGZiYzE2MWM2NDcxYmQwZiIsImlhdCI6MTcxMTU2MDM4MCwiZXhwIjoxNzExNjQ2NzgwfQ.0Pa8j48xDIQnOV4Mv8qOSZSVRpB0JEsnlcL2TDRW8Ss",
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userName: "poule",
    }),
  });
  const data = await response.json();
  setTokenData(data);
  console.log(data);
}
