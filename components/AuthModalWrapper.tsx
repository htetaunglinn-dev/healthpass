'use client';

import { useAuth } from '@/context/AuthContext';
import AuthModal from './AuthModal';

export default function AuthModalWrapper() {
  const { isAuthModalOpen, authMode, closeAuthModal } = useAuth();

  return (
    <AuthModal
      isOpen={isAuthModalOpen}
      onClose={closeAuthModal}
      initialMode={authMode}
    />
  );
}
