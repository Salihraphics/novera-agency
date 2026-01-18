'use client';

import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    icon: string;
    description: string;
    features: string[];
    detailedDescription?: string;
  } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <>
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#a78bfa #f1f5f9'
             }}>
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 p-6 flex items-center justify-between rounded-t-xl z-10">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-purple-700/50 rounded-full p-2 transition-colors"
              aria-label="Kapat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Main Description */}
            <div className="mb-8">
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {service.description}
              </p>
              {service.detailedDescription && (
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-4">
                  {service.detailedDescription}
                </p>
              )}
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Hizmet Kapsamı:
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-purple-600 dark:text-purple-400 font-bold flex-shrink-0 text-xl mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
