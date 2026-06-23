"use client";
import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
      <Suspense fallback={null}>
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </Suspense>
    </div>
  );
}
