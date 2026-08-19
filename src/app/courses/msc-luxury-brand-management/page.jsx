'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/luxury-brand-management-msc';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
