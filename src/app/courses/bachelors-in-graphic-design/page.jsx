'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/bachelors-in-graphic-design';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
