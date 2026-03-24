// Utility for managing PWA Push Notifications
export const initPushNotifications = async () => {
    try {
        if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
            console.warn('Push Notifications not supported.');
            return;
        }

        const registration = await navigator.serviceWorker.ready;
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
            console.log('[PWA] Push Permission Granted');
            // Here you would subscribe to a push service if you have VAPID keys
            // const subscription = await registration.pushManager.subscribe({...});
        }
    } catch (error) {
        console.error('[PWA] Push Notification Setup Failed:', error);
    }
};

// Standard background sync registration
export const registerBackgroundSync = async (tagName) => {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        const registration = await navigator.serviceWorker.ready;
        try {
            await registration.sync.register(tagName);
            console.log(`[PWA] Background Sync Registered: ${tagName}`);
        } catch (err) {
            console.error('[PWA] Background Sync Registration Failed:', err);
        }
    }
};
