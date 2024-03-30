import { useDispatch, useSelector } from "react-redux";

const BASE_URL = "http://localhost:3001/api/v1";
export async function login(email, password) {
  const loginResponse = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const loginData = await loginResponse.json();
  if (loginResponse.ok) {
    localStorage.setItem("token", `${loginData.body.token}`);
    return true;
  } else {
    console.log("problen with token, here is the error " + loginData.status);
  }
}

export async function infoUser() {
  const infoResponse = await fetch(`${BASE_URL}/user/profile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const infoData = await infoResponse.json();
  console.log(infoData);
  if (infoResponse.ok) {
    return infoData.body;
  } else {
    console.log("can't fetch the data, here is the error " + infoData.status);
  }
}

export async function changeUserName(userName) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userName: `${userName}`,
    }),
  });
  const data = await response.json();
  console.log(data);
}
