'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/Mentors';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
