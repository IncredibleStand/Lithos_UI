/**
 * @fileoverview Lithos UI toast stack.
 * - Floats transient feedback outside the page flow so notifications never steal layout space.
 * - Uses explicit margins and fixed positioning to keep the stack predictable.
 * - Applies per-toast contrast and heavy borders so alerts read as hard objects.
 */

import { useState, useCallback } from 'react';
import { getContrastText } from '../../utils/yiq';
import { ToastContext } from '../../core/hooks/useToast';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback(({ message, type = 'default', color, title }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type, color, title }]);

    // - Auto-clear keeps the stack transient; it never becomes a second inbox.
    setTimeout(() => {
      removeToast(id);
    }, 5000);

    return id;
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* - Fixed corner stack uses explicit padding and margins, not gap, so each toast remains independently dismissible. */}
      <div className="fixed bottom-0 right-0 z-50 p-4 sm:p-6 md:p-8 pointer-events-none flex flex-col items-end w-full max-w-md">
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem = ({ toast, onRemove }) => {
  const { id, message, type, color, title } = toast;
  
  const typeColors = {
    success: '#00FF00', // Neon Green
    error: '#FF0000',   // Red
    warning: '#FFFF00', // Yellow
    info: '#00FFFF',    // Cyan
    default: '#FFFFFF'  // White
  };
  
  const bgColor = color || typeColors[type] || typeColors.default;
  const textColor = getContrastText(bgColor);

  return (
    <>
      <style>{`
        /* - Per-toast override keeps contrast local to the alert tile. */
        .toast-override-${id} {
          background-color: ${bgColor} !important;
          color: ${textColor} !important;
          border-color: ${textColor} !important;
        }
      `}</style>
      
      {/* - 6px border + 8px shadow turns the alert into a hard plaque, not a soft card. */}
      {/* - Stack spacing uses explicit margins so each toast keeps its own exit path. */}
      <div 
        role="alert"
        className={`toast-override-${id} pointer-events-auto border-[6px] shadow-[8px_8px_0px_0px_var(--lithos-shadow)] p-4 sm:p-6 mb-6 w-full flex flex-row items-start transition-all duration-300 ease-out animate-[slide-up_0.3s_ease-out_forwards]`}
      >
        <div className="flex-1 mr-4">
          {title && <h4 className="font-black text-xl uppercase tracking-tighter leading-none mb-3 m-0">{title}</h4>}
          <p className="font-bold text-base leading-tight m-0">{message}</p>
        </div>
        
        {/* - Close control keeps the same hard-edge language as the card. */}
        <button 
          onClick={onRemove}
          className="ml-4 shrink-0 p-3 border-4 border-inherit bg-transparent cursor-pointer transition-transform duration-150 ease-out hover:scale-110 active:scale-95 shadow-[4px_4px_0px_0px_var(--lithos-shadow)] hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)]"
          aria-label="Close notification"
          style={{ borderColor: textColor }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="4" className="block">
            <path d="M2 2L14 14M14 2L2 14" />
          </svg>
        </button>
      </div>
    </>
  );
};
