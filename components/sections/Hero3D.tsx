"use client";
import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero3D() {
  return (
    <>
      {/* Light mode beautiful gradient fallback */}
      <div className="absolute inset-0 z-0 dark:hidden bg-gradient-to-br from-orange-50/80 via-white to-white pointer-events-none" />
      {/* Dark mode 3D Scene */}
      <div className="absolute inset-0 z-0 pointer-events-auto hidden dark:block opacity-60">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </Suspense>
      </div>
    </>
  );
}
