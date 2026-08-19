'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/Gallery';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
