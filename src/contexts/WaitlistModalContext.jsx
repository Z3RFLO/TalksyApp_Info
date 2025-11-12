/**
 * WAITLIST MODAL CONTEXT
 * 
 * Manages the global state for the waitlist modal
 * Allows opening/closing from any component
 */

import { createContext, useContext, useState, useEffect } from 'react';

const WaitlistModalContext = createContext();

export function WaitlistModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Listen for a global event so non-React parts (or other components) can open the modal
  useEffect(() => {
    function handleOpen() {
      setIsOpen(true);
    }

    window.addEventListener('open-waitlist', handleOpen);
    return () => window.removeEventListener('open-waitlist', handleOpen);
  }, []);

  return (
    <WaitlistModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </WaitlistModalContext.Provider>
  );
}

export function useWaitlistModal() {
  const context = useContext(WaitlistModalContext);
  if (!context) {
    throw new Error('useWaitlistModal must be used within WaitlistModalProvider');
  }
  return context;
}
