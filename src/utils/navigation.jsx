'use client';

import React, { Suspense } from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useSearchParams, useParams as useNextParams } from 'next/navigation';

/**
 * Compatibility wrapper for React Router's Link in Next.js
 */
export const Link = React.forwardRef(function Link(
  { to, href, children, className, style, onClick, target, rel, ...props },
  ref
) {
  const targetHref = to || href || '#';
  return (
    <NextLink
      ref={ref}
      href={targetHref}
      className={className}
      style={style}
      onClick={onClick}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </NextLink>
  );
});

/**
 * Compatibility wrapper for React Router's NavLink in Next.js
 */
export const NavLink = React.forwardRef(function NavLink(
  { to, href, children, className, activeClassName = '', style, onClick, ...props },
  ref
) {
  const pathname = usePathname();
  const targetHref = to || href || '#';
  const isActive = pathname === targetHref || (targetHref !== '/' && pathname.startsWith(targetHref));

  const resolvedClassName = typeof className === 'function' 
    ? className({ isActive, isPending: false }) 
    : `${className || ''} ${isActive ? activeClassName : ''}`.trim();

  return (
    <NextLink
      ref={ref}
      href={targetHref}
      className={resolvedClassName}
      style={style}
      onClick={onClick}
      {...props}
    >
      {typeof children === 'function' ? children({ isActive, isPending: false }) : children}
    </NextLink>
  );
});

/**
 * Compatibility hook for useNavigate() in Next.js
 */
export function useNavigate() {
  const router = useRouter();

  return React.useCallback(
    (to, options = {}) => {
      if (typeof to === 'number') {
        if (to < 0) {
          router.back();
        } else {
          router.forward();
        }
        return;
      }

      if (options.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    },
    [router]
  );
}

/**
 * Compatibility hook for useLocation() in Next.js with safe fallback
 */
export function useLocation() {
  const pathname = usePathname() || '/';
  let search = '';
  
  try {
    const searchParams = useSearchParams();
    search = searchParams ? `?${searchParams.toString()}` : '';
  } catch {
    if (typeof window !== 'undefined') {
      search = window.location.search;
    }
  }

  return React.useMemo(() => {
    return {
      pathname,
      search: search === '?' ? '' : search,
      hash: typeof window !== 'undefined' ? window.location.hash : '',
      state: null,
      key: 'default',
    };
  }, [pathname, search]);
}

/**
 * Compatibility hook for useParams() in Next.js
 */
export function useParams() {
  const params = useNextParams();
  return params || {};
}

export default {
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
};
