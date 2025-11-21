"use client";

export const trackPageView = (url: string) => {
    // Placeholder for analytics page view tracking
    // e.g., window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
    if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics] Page View: ${url}`);
    }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Placeholder for analytics event tracking
    // e.g., window.gtag('event', eventName, properties);
    if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics] Event: ${eventName}`, properties);
    }
};
