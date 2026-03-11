import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, QrCode, Copy, Check } from 'lucide-react';
import { getQRCodeURL } from '../lib/deviceRouting';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralCode?: string;
}

export function QRCodeModal({ isOpen, onClose, referralCode }: QRModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const qrUrl = getQRCodeURL(referralCode);

  useEffect(() => {
    if (isOpen) {
      setQrDataUrl('');
      generateQRCode(qrUrl).then(setQrDataUrl);
    }
  }, [isOpen, qrUrl]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that block clipboard without user gesture
      const textarea = document.createElement('textarea');
      textarea.value = qrUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal - top-centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-8 md:top-16 -translate-x-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#F57D48] to-[#FF9C7A] p-6 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="w-8 h-8" />
                  <h2 className="text-2xl font-semibold">Get the App</h2>
                </div>
                <p className="text-white/90">Scan with your phone camera to continue</p>
              </div>

              {/* QR Code Section */}
              <div className="p-8 flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl border-2 border-[#F57D48]/20 shadow-inner">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="Scan to open AID UP app"
                      className="w-48 h-48"
                    />
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-gray-300 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Referral badge - only shown when referral code is present */}
                {referralCode && (
                  <div className="mt-3 px-3 py-1 bg-[#F57D48]/10 rounded-full">
                    <p className="text-xs text-[#F57D48] font-medium">
                      Referral code: <span className="font-bold">{referralCode}</span>
                    </p>
                  </div>
                )}

                {/* URL Display */}
                <div className="mt-4 text-center w-full">
                  <p className="text-sm text-gray-500 mb-2">QR Code URL:</p>
                  <code className="text-xs bg-gray-100 px-3 py-1.5 rounded-lg text-gray-700 break-all block">
                    {qrUrl}
                  </code>
                </div>

                {/* Instructions */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">
                    Point your phone camera at the QR code
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Works with iPhone & Android</p>
                </div>

                {/* Copy Link Button with feedback */}
                <button
                  onClick={handleCopy}
                  className="mt-4 flex items-center gap-2 text-[#F57D48] hover:text-[#FF9C7A] text-sm font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Or copy link to clipboard →
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Generate QR code as data URL
 */
async function generateQRCode(text: string): Promise<string> {
  try {
    const QRCode = await import('qrcode');
    const dataUrl = await QRCode.toDataURL(text, {
      width: 200,
      margin: 2,
      color: {
        dark: '#1a1a1a',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    });
    return dataUrl;
  } catch (error) {
    console.error('QR code generation failed:', error);
    return generateQRFallback(text);
  }
}

/**
 * Fallback QR generation using external API
 */
function generateQRFallback(text: string): string {
  const encoded = encodeURIComponent(text);
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`;
}
