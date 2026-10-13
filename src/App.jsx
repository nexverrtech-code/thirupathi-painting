import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'motion/react';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Footer from './components/Footer';
import { FloatingWhatsApp } from './components/WhatsAppButton';
import Home from './pages/Home';

// Home ships in the main bundle; other pages load on demand.
const Services = lazy(() => import('./pages/Services'));
const Works = lazy(() => import('./pages/Works'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Scrolls to #hash targets after a page has mounted (and on same-page hash changes). */
function useHashScroll() {
  const { hash, pathname } = useLocation();
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!hash) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [hash, pathname, reduce]);
}

function PageFallback() {
  return <div className="page-fallback" aria-hidden="true" />;
}

function Page({ children }) {
  return (
    <Suspense fallback={<PageFallback />}>
      <PageInner>{children}</PageInner>
    </Suspense>
  );
}

function PageInner({ children }) {
  useHashScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        {t('nav.skip')}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            if (!window.location.hash) window.scrollTo(0, 0);
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/services" element={<Page><Services /></Page>} />
            <Route path="/works" element={<Page><Works /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  );
}
