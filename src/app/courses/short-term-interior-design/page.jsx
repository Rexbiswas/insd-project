'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/short-term-interior-design';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
