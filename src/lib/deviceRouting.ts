// Device detection and CTA routing for AID UP
// Routes mobile users directly to the Bubble app,
// shows QR code for desktop users.

// Bubble app base — handles all known URL patterns:
// app.myaidup.com/native_app_page
// app.myaidup.com/version-live/native_app_page
// app.myaidup.com/version-test/native_app_page
export const BUBBLE_APP_BASE = 'https://app.myaidup.com';
export const BUBBLE_APP_PATH = '/native_app_page';
export const BUBBLE_APP_URL = `${BUBBLE_APP_BASE}${BUBBLE_APP_PATH}`;
export const SIGNUP_URL = `${BUBBLE_APP_URL}?signup=yes`;

/**
 * Detects the correct Bubble app path from the referral URL.
 * Preserves version-test or version-live prefix if present in the
 * original shared link, falls back to /native_app_page for clean links.
 */
function getBubbleAppPath(): string {
  if (typeof window === 'undefined') return BUBBLE_APP_PATH;
  const path = window.location.pathname;

  // If landing page was reached via a version-specific referral redirect,
  // the version prefix is stored in sessionStorage by the Worker redirect.
  const storedPrefix = sessionStorage.getItem('bubble_version_prefix');
  if (storedPrefix) return `${storedPrefix}${BUBBLE_APP_PATH}`;

  return BUBBLE_APP_PATH;
}

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
 * Passes through the referral code and version prefix if present.
 */
export function getQRCodeURL(referralCode?: string): string {
  const appPath = getBubbleAppPath();
  const params = new URLSearchParams({ signup: 'yes' });
  if (referralCode) {
    params.set('r', referralCode);
  }
  return `${BUBBLE_APP_BASE}${appPath}?${params.toString()}`;
}

/**
 * Detects if the current device is mobile.
 * Uses multiple detection methods for accuracy.
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;

  const hasTouch =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;

  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUA = mobileRegex.test(navigator.userAgent);

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
    window.location.href = getQRCodeURL(referralCode);
    return { shouldShowQR: false };
  }

  return { shouldShowQR: true };
}

/**
 * Simple analytics tracking.
 */
function trackCTAClick(deviceType: 'mobile' | 'desktop', referralCode?: string) {
  console.log(
    `[AID UP] CTA clicked on ${deviceType} device${referralCode ? ` | ref: ${referralCode}` : ''}`
  );
}
