// app.js — basic interactivity (Tailwind-compatible)
const userBtn = document.getElementById('userMenuBtn');
const dropdown = document.getElementById('userDropdown');

function closeDropdownOnOutsideClick(e){
  if (!dropdown.contains(e.target) && !userBtn.contains(e.target)){
    dropdown.classList.add('hidden');
    userBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', closeDropdownOnOutsideClick);
  }
}

userBtn?.addEventListener('click', () => {
  const willOpen = dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden');
  userBtn.setAttribute('aria-expanded', String(willOpen));
  if (willOpen){
    setTimeout(() => document.addEventListener('click', closeDropdownOnOutsideClick), 0);
  }
});

// Example CTAs
document.querySelector('.btn-primary')?.addEventListener('click', () => {
  alert('Navigate to search results… (hook up to your jobs listing route)');
});
document.querySelector('.btn-outline')?.addEventListener('click', () => {
  alert('Navigate to My Applications…');
});

// Floating badge (e.g., help/chat)
document.querySelector('button[aria-label="Open help chat"]')?.addEventListener('click', () => {
  alert('Open Help Centre / Chat widget');
});
