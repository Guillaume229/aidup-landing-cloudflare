// Device detection and CTA routing for AID UP
// Routes mobile users directly to the Bubble app,
// shows QR code for desktop users.

export const BUBBLE_APP_BASE = 'https://app.myaidup.com';
export const BUBBLE_APP_PATH = '/native_app_page';
export const BUBBLE_APP_URL = `${BUBBLE_APP_BASE}${BUBBLE_APP_PATH}`;
export const SIGNUP_URL = `${BUBBLE_APP_URL}?signup=yes`;

/**
 * Reads the version prefix from the landing page URL (?vp= param).
 * Set by the Cloudflare Worker when intercepting a Bubble referral link.
 * - /version-test  → test database
 * - /version-live  → live database  
 * - (empty)        → clean live URL, no prefix
 */
function getVersionPrefix(): string {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  const vp = params.get('vp');
  // Whitelist only known valid prefixes — never pass arbitrary path values
  if (vp === '/version-test' || vp === '/version-live') return vp;
  return '';
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
 * Preserves version prefix (version-test / version-live) and referral code.
 */
export function getQRCodeURL(referralCode?: string): string {
  const prefix = getVersionPrefix();
  const params = new URLSearchParams({ signup: 'yes' });
  if (referralCode) {
    params.set('r', referralCode);
  }
  return `${BUBBLE_APP_BASE}${prefix}${BUBBLE_APP_PATH}?${params.toString()}`;
}

/**
 * Detects if the current device is mobile.
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
 * Preserves version prefix and referral code through to Bubble.
 * - Mobile: Direct redirect to Bubble app (with correct version + ?r=)
 * - Desktop: Returns shouldShowQR: true (QRCodeModal handles the rest)
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
