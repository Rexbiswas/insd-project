'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/Home';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
