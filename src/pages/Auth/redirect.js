export default function redirect() {
  const client_id = "6cJw5NMrQ6IdJUT82o";
  const scope = "tasks:write";
  const state = "yes";
  const redirect_uri = "http://localhost:3000";
  const response_type = "code";
  const redirectURL = `https://dida365.com/oauth/authorize?scope=${scope}&client_id=${client_id}&state=${state}&redirect_uri=${redirect_uri}&response_type=${response_type}`;

  window.location.href = redirectURL;
}
