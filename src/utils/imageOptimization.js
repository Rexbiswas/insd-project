/**
 * Image lazy loading and optimization utility
 * Handles responsive images with WebP format and automatic sizing
 */

export const createImageKitUrl = (path, options = {}) => {
  const {
    width = 'auto',
    quality = 75,
    format = 'auto',
    blur = false,
    crop = false,
  } = options;

  let url = `https://ik.imagekit.io/fmldynl4j4/${path}`;
  const params = [];

  if (width !== 'auto') params.push(`w-${width}`);
  if (quality) params.push(`q-${quality}`);
  if (format) params.push(`f-${format}`);
  if (blur) params.push('bl-10');
  if (crop) params.push(`c-${crop}`);

  return params.length ? `${url}?tr=${params.join(',')}` : url;
};

/**
 * React component for lazy-loading images with blur-up effect
 */
export const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  ...props 
}) => {
  const blurUrl = createImageKitUrl(src, { 
    width: 20, 
    quality: 20, 
    blur: true 
  });

  if (priority) {
    // For critical LCP images, load immediately
    return (
      <img
        src={createImageKitUrl(src, { width, quality: 80 })}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="eager"
        {...props}
      />
    );
  }

  return (
    <img
      src={blurUrl}
      alt={alt}
      width={width}
      height={height}
      className={`${className} blur-up`}
      loading="lazy"
      decoding="async"
      {...props}
      onLoad={(e) => {
        // Swap to full quality once loaded
        const highQualityUrl = createImageKitUrl(src, { width, quality: 80 });
        if (e.target.src !== highQualityUrl) {
          e.target.src = highQualityUrl;
          e.target.classList.remove('blur-up');
        }
      }}
    />
  );
};

/**
 * Get responsive image dimensions based on container
 */
export const getResponsiveImageSize = (containerWidth) => {
  if (containerWidth < 640) return 400;
  if (containerWidth < 1024) return 800;
  if (containerWidth < 1536) return 1200;
  return 1600;
};

/**
 * Prefetch images for smoother page transitions
 */
export const prefetchImages = (urls) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      urls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    });
  } else {
    setTimeout(() => {
      urls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    }, 3000);
  }
};
