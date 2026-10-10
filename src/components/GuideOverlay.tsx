/**
 * ============================================================================
 * COMPONENT: GUIDE OVERLAY & IFRAME MODAL (#ov)
 * ============================================================================
 *
 * Full-screen accessible modal dialog containing an embedded iframe.
 * Renders style guides and typography guides with full interactivity.
 * Features back-and-forth navigation arrows to flip between styles smoothly,
 * Escape key closing, focus trapping, and background scroll locking.
 */

import React, { useEffect, useRef } from 'react';

interface GuideOverlayProps {
  isOpen: boolean;
  title: string;
  htmlContent: string;
  cssVars?: Record<string, string>;
  lineCap?: 'round' | 'square';
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const GuideOverlay: React.FC<GuideOverlayProps> = ({
  isOpen,
  title,
  htmlContent,
  cssVars = {},
  lineCap = 'round',
  onClose,
  onPrev,
  onNext,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const callbacksRef = useRef({ onClose, onPrev, onNext });
  useEffect(() => {
    callbacksRef.current = { onClose, onPrev, onNext };
  });

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    document.documentElement.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callbacksRef.current.onClose();
      } else if (e.key === 'ArrowLeft' && callbacksRef.current.onPrev) {
        callbacksRef.current.onPrev();
      } else if (e.key === 'ArrowRight' && callbacksRef.current.onNext) {
        callbacksRef.current.onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflow = '';
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const styleObj: React.CSSProperties = {
    ...cssVars,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--lc' as any]: lineCap,
  };

  const handleOpenNewTab = () => {
    const newWin = window.open('', '_blank');
    if (newWin && newWin.document) {
      newWin.document.write(htmlContent);
      newWin.document.close();
    }
  };

  return (
    <div id="ov" role="dialog" aria-modal="true" aria-labelledby="on" style={styleObj}>
      {/* Floating side navigation arrows for effortless flipping anywhere on page */}
      {onPrev && (
        <button
          type="button"
          className="ob-side-arrow prev"
          aria-label="Previous guide (Left Arrow)"
          title="Previous guide (Left Arrow)"
          onClick={onPrev}
        >
          &#8249;
        </button>
      )}
      {onNext && (
        <button
          type="button"
          className="ob-side-arrow next"
          aria-label="Next guide (Right Arrow)"
          title="Next guide (Right Arrow)"
          onClick={onNext}
        >
          &#8250;
        </button>
      )}

      <div className="ob">
        <div className="ob-nav">
          {onPrev && (
            <button
              type="button"
              className="ar ob-arrow"
              aria-label="Previous guide"
              title="Previous guide (Left Arrow)"
              onClick={onPrev}
            >
              &#8249;
            </button>
          )}
          <span id="on">{title}</span>
          {onNext && (
            <button
              type="button"
              className="ar ob-arrow"
              aria-label="Next guide"
              title="Next guide (Right Arrow)"
              onClick={onNext}
            >
              &#8250;
            </button>
          )}
        </div>

        <div className="ob-actions">
          <button
            type="button"
            className="ob-action-btn"
            title="Open in new window"
            aria-label="Open in new window"
            onClick={handleOpenNewTab}
          >
            &#x2197;
          </button>
          <button
            ref={closeButtonRef}
            type="button"
            id="cl"
            aria-label="Close guide (Escape)"
            title="Close guide (Escape)"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5L19 19M19 5L5 19" />
            </svg>
          </button>
        </div>
      </div>
      <iframe id="fr" title={title} srcDoc={htmlContent} />
    </div>
  );
};
