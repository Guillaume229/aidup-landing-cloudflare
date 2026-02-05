import { useState } from 'react';
import { motion } from 'motion/react';
import { QRCodeModal } from './QRCodeModal';
import { handleCTAClick } from '../lib/deviceRouting';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: CTAButtonProps) {
  const [showQRModal, setShowQRModal] = useState(false);

  const handleClick = () => {
    const { shouldShowQR } = handleCTAClick();
    if (shouldShowQR) {
      setShowQRModal(true);
    }
    // If mobile, the redirect happens automatically in handleCTAClick
  };

  // Style variants
  const variants = {
    primary: 'bg-[#F57D48] hover:bg-[#FF9C7A] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-[#F57D48] border-2 border-[#F57D48] hover:bg-[#FFF8F0]',
    white: 'bg-white text-[#F57D48] shadow-2xl hover:shadow-3xl',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-sm rounded-lg',
    md: 'px-8 py-4 text-lg rounded-xl',
    lg: 'px-10 py-5 text-xl rounded-xl',
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={`${variants[variant]} ${sizes[size]} transition-all font-medium ${className}`}
      >
        {children}
      </motion.button>

      <QRCodeModal 
        isOpen={showQRModal} 
        onClose={() => setShowQRModal(false)} 
      />
    </>
  );
}
