<script>
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import RouteReplace from './RouteReplace.svelte';
  import App from './App.svelte';
  import Loading from './Loading.svelte';
  import NotFound from '../pages/_not-found.md';

  const RouteToDefault = wrap({
    component: RouteReplace,
    props: { href: '/index' },
  });

  // default index page
  let routes = {
    '/': RouteToDefault,
  };

  // add pages from files
  const modules = import.meta.glob('../pages/[^_]*.md');
  for (const key in modules) {
    const path = key.replace('../pages/', '/').replace('.md', '');

    routes[path] = wrap({
      asyncComponent: modules[key],
      loadingComponent: Loading,
    });

    routes[path + '/:view'] = wrap({
      asyncComponent: modules[key],
      loadingComponent: Loading,
    });
  }

  //routes['/loading'] = Loading;

  // add not found page ?
  routes['*'] = NotFound;
</script>

<App>
  <Router {routes} />
</App>
