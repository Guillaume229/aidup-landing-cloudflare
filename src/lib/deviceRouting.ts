// Device detection and CTA routing for AID UP
// Routes mobile users directly to the Bubble app,
// shows QR code for desktop users.

// Single source of truth for the Bubble app entry URL
export const BUBBLE_APP_URL = 'https://app.myaidup.com/native_app_page';
export const SIGNUP_URL = `${BUBBLE_APP_URL}?signup=yes`;

/**
 * Detects if the current device is mobile.
 * Uses multiple detection methods for accuracy.
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;

  // Check for touch capability + small screen (most reliable)
  const hasTouch =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;

  // User agent fallback
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUA = mobileRegex.test(navigator.userAgent);

  // Consider mobile if: (touch + small screen) OR mobile user agent
  return (hasTouch && isSmallScreen) || isMobileUA;
}

/**
 * Handles CTA click based on device type
 * - Mobile: Direct redirect to Bubble app
 * - Desktop: Returns false (caller should show QR modal)
 */
export function handleCTAClick(): { shouldShowQR: boolean } {
  const mobile = isMobileDevice();

  trackCTAClick(mobile ? 'mobile' : 'desktop');

  if (mobile) {
    // Mobile: redirect directly into the app
    window.location.href = SIGNUP_URL;
    return { shouldShowQR: false };
  }

  // Desktop: show QR modal (which encodes SIGNUP_URL)
  return { shouldShowQR: true };
}

/**
 * Simple analytics tracking
 * Cloudflare Web Analytics captures page views automatically.
 * This adds console logging for debug / optional integration later.
 */
function trackCTAClick(deviceType: 'mobile' | 'desktop') {
  console.log(`[AID UP] CTA clicked on ${deviceType} device`);
}

/**
 * Generate the QR code URL.
 * This is what gets encoded in the QR code and copied to clipboard.
 */
export function getQRCodeURL(): string {
  return SIGNUP_URL;
}
