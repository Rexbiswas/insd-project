'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/ThankYou';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
