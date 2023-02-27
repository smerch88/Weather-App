import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>header</header>
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <footer>footer</footer>
    </>
  );
};
