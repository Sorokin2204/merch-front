import { Navigate, useRoutes } from 'react-router';
import HomePage from './pages/site/HomePage/HomePage';
import SiteLayout from './pages/site/SiteLayout/SiteLayout';
import ProductSinglePage from './pages/site/ProductSinglePage/ProductSinglePage';
import ProductListPage from './pages/site/ProductListPage/ProductListPage';
import FaqPage from './pages/site/FaqPage/FaqPage';
import CartPage from './pages/site/CartPage/CartPage';
import ContactPage from './pages/site/ContactPage/ContactPage';
import NotFound from './components/site/NotFound/NotFound';
import PrivacyPage from './pages/site/PrivacyPage/PrivacyPage';
import SuccessPage from './pages/site/SuccessPage/SuccessPage';
import ErrorPage from './pages/site/ErrorPage/ErrorPage';

function App() {
  let routes = useRoutes([
    {
      path: '*',
      element: (
        <SiteLayout>
          <NotFound />
        </SiteLayout>
      ),
    },
    {
      path: '/privacy',
      element: (
        <SiteLayout>
          <PrivacyPage />
        </SiteLayout>
      ),
    },
    {
      path: '/success',
      element: (
        <SiteLayout>
          <SuccessPage />
        </SiteLayout>
      ),
    },
    {
      path: '/error',
      element: (
        <SiteLayout>
          <ErrorPage />
        </SiteLayout>
      ),
    },
    {
      path: '/',
      element: (
        <SiteLayout>
          <HomePage />
        </SiteLayout>
      ),
    },
    {
      path: '/product/:slug',
      element: (
        <SiteLayout>
          <ProductSinglePage />
        </SiteLayout>
      ),
    },
    {
      path: '/products',
      element: (
        <SiteLayout>
          <ProductListPage />
        </SiteLayout>
      ),
    },
    // {
    //   path: '/faq',
    //   element: (
    //     <SiteLayout>
    //       <FaqPage />
    //     </SiteLayout>
    //   ),
    // },
    {
      path: '/contact',
      element: (
        <SiteLayout>
          <ContactPage />
        </SiteLayout>
      ),
    },
    {
      path: '/cart',
      element: (
        <SiteLayout>
          <CartPage />
        </SiteLayout>
      ),
    },
  ]);

  return routes;
}

export default App;
