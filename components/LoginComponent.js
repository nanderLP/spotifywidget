function handleLogin() {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const response_type = "code";
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI
  const scopes = 'user-read-currently-playing'
  window.location = `https://accounts.spotify.com/authorize?show_dialog=true&client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scopes}`
}

export default function LoginComponent() {
  return (
    <div>
      <p>Please Login to use this Widget.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
