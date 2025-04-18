async function h(input) {
  const encoded = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function g() {
  const input = document.getElementById('page-password').value;
  const hash = await h(input);
  const secret = "28c38238280b983773a825bd18e4b97e625533bf83b78a4dfec4f4928e8a14b1";

  if (hash === secret) {
    document.getElementById('password-gate').style.display = 'none';
    document.getElementById('secret-content').style.display = 'block';
  } else {
    document.getElementById('error-msg').style.display = 'block';
  }
}
