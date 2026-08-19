'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/advanced-diploma-in-animation';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
