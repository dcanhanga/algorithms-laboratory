class Router {
  constructor() {
    this.app = document.querySelector('#app');
    this.routes = {};
    // window.addEventListener('popstate', () => this.handleRouteChange);
    window.addEventListener('popstate', this.handleRouteChange.bind(this))
  }

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  async handleRouteChange() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes['/404'];

    try {
      const pageContent = await this.loadPage(route);
      this.app.innerHTML = pageContent;
    } catch (error) {
      console.error(`Erro ao carregar a página: ${error}`);
    }
  }

  navigateToPage(path) {
    window.history.pushState({}, '', path);
    this.handleRouteChange();
  }

  async loadPage(route) {
    const response = await fetch(route);
    if (!response.ok) {
      throw new Error(`Falha ao carregar: ${response.status} - ${response.statusText}`);
    }
    const pageContent = await response.text();
    return pageContent;
  }
}

export const router = new Router();



