import { router } from './routes.js';

const pageRoutes = [
  { routeName: '/', page: './pages/home.html' },
  { routeName: '/about', page: './pages/about.html' },
  { routeName: '/contact', page: './pages/contact.html' },
  { routeName: '/404', page: './pages/404.html' }
];

pageRoutes.forEach(({ routeName, page }) => router.add(routeName, page));

const nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {
  const isAnchorWithHref = event.target.hasAttribute('href') && event.target.tagName === 'A';

  if (isAnchorWithHref) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    router.navigateToPage(path);
  }
});

router.handleRouteChange();
