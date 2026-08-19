'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/ParisProject';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
