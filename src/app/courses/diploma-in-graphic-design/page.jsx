'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/diploma-in-graphic-design';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
