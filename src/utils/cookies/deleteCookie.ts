export function deleteCookie(cookie: string) {
  document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
