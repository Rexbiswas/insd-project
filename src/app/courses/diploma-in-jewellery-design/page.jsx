'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/diploma-in-jewellery-design';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
