export function getCookies(cookie: string) {
  const cookies = document.cookie.split("; ");
  const cookieValue = cookies.find((c) => c.includes(cookie));
  if (cookieValue) {
    return cookieValue.split("=")[1];
  }
  return "guest";
}
