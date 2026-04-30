import { useState, useCallback } from 'react';
import { getContrastText } from '../utils/yiq';
import { ToastContext } from '../hooks/useToast';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback(({ message, type = 'default', color, title }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type, color, title }]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);

    return id;
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* Container for toasts - relying on explicit margins, not gap */}
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
        /* 3. !important global override variables for background colors */
        .toast-override-${id} {
          background-color: ${bgColor} !important;
          color: ${textColor} !important;
          border-color: ${textColor} !important;
        }
      `}</style>
      
      {/* 4. High-contrast, thick borders (min 4px) and hard drop shadows */}
      {/* 2. Zero-gap architecture: using flex and explicit margins inside */}
      <div 
        role="alert"
        className={`toast-override-${id} pointer-events-auto border-[6px] shadow-[8px_8px_0px_0px_var(--lithos-shadow)] p-4 sm:p-6 mb-6 w-full flex flex-row items-start transition-all duration-300 ease-out animate-[slide-up_0.3s_ease-out_forwards]`}
      >
        <div className="flex-1 mr-4">
          {title && <h4 className="font-black text-xl uppercase tracking-tighter leading-none mb-3 m-0">{title}</h4>}
          <p className="font-bold text-base leading-tight m-0">{message}</p>
        </div>
        
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
