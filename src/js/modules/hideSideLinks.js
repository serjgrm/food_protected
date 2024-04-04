function hideAsideLinks() {
  const aside = document.querySelector('.sidepanel');

  function hideAsideLinksTrigger() {
    if (document.documentElement.clientHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 100) {
        aside.classList.add('hide');
    } else {
        aside.classList.remove('hide');
    }
  }
  window.addEventListener('scroll', hideAsideLinksTrigger);
}
hideAsideLinks();
