'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/TermsAndConditions';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
