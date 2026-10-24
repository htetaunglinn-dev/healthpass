'use client';

import { useAuth } from '@/context/AuthContext';
import AuthModal from './AuthModal';

export default function AuthModalWrapper() {
  const { isAuthModalOpen, authMode, closeAuthModal } = useAuth();

  // Keyed by mode so "Log in" and "Get started" always open on the right form.
  return (
    <AuthModal
      key={`${authMode}-${isAuthModalOpen}`}
      isOpen={isAuthModalOpen}
      onClose={closeAuthModal}
      initialMode={authMode}
    />
  );
}
