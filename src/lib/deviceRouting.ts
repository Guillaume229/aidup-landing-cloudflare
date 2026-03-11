// Device detection and CTA routing for AID UP
// Routes mobile users directly to the Bubble app,
// shows QR code for desktop users.

// Single source of truth for the Bubble app entry URL
export const BUBBLE_APP_URL = 'https://app.myaidup.com/native_app_page';
export const SIGNUP_URL = `${BUBBLE_APP_URL}?signup=yes`;

/**
 * Extracts the referral code from the current page URL if present.
 * Supports ?r=ABC123 (Bubble default), ?ref=ABC123 and ?referralcode=ABC123
 */
export function getReferralCodeFromURL(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  const params = new URLSearchParams(window.location.search);
  return (
    params.get('r') ??
    params.get('ref') ??
    params.get('referralcode') ??
    undefined
  );
}

/**
 * Builds the destination URL for the Bubble app.
 * Passes through the referral code if present.
 */
export function getQRCodeURL(referralCode?: string): string {
  const params = new URLSearchParams({ signup: 'yes' });
  if (referralCode) {
    params.set('r', referralCode);
  }
  return `${BUBBLE_APP_URL}?${params.toString()}`;
}

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
 * Handles CTA click based on device type.
 * Reads referral code from current URL and passes it through.
 * - Mobile: Direct redirect to Bubble app (with ?r= if present)
 * - Desktop: Returns false (caller should show QR modal)
 */
export function handleCTAClick(): { shouldShowQR: boolean } {
  const mobile = isMobileDevice();
  const referralCode = getReferralCodeFromURL();

  trackCTAClick(mobile ? 'mobile' : 'desktop', referralCode);

  if (mobile) {
    // Mobile: redirect directly into the app, preserving referral code
    window.location.href = getQRCodeURL(referralCode);
    return { shouldShowQR: false };
  }

  // Desktop: show QR modal (QRCodeModal reads referral code independently)
  return { shouldShowQR: true };
}

/**
 * Simple analytics tracking.
 * Cloudflare Web Analytics captures page views automatically.
 * This adds console logging for debug / optional integration later.
 */
function trackCTAClick(deviceType: 'mobile' | 'desktop', referralCode?: string) {
  console.log(
    `[AID UP] CTA clicked on ${deviceType} device${referralCode ? ` | ref: ${referralCode}` : ''}`
  );
}
