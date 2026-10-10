/**
 * ============================================================================
 * CLIPBOARD UTILITY
 * ============================================================================
 *
 * Copies text to the user's clipboard using navigator.clipboard, with a fallback
 * to a temporary <textarea> element for unsupported environments / iframes.
 * Provides temporary visual feedback on triggering buttons ("Copied!").
 */

/**
 * Copies text to the clipboard and gives button feedback if provided.
 *
 * @param text - The string to copy
 * @param button - Optional HTML button element to receive temporary "Copied" feedback
 */
export function copyToClipboard(text: string, button?: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
    const showSuccess = () => {
      if (button) {
        const originalText = button.dataset.originalText || button.textContent || '';
        button.dataset.originalText = originalText;
        button.textContent = 'Copied';
        setTimeout(() => {
          button.textContent = originalText;
        }, 1300);
      }
      resolve();
    };

    const fallbackCopy = () => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.warn('Fallback copy failed:', err);
      }
      textarea.remove();
      showSuccess();
    };

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(showSuccess, fallbackCopy);
    } else {
      fallbackCopy();
    }
  });
}

/**
 * Self-contained version serialized into guide & type guide pages.
 * Keep this self-contained with no external imports!
 */
export const copyTxtFnString = `function copyTxt(t,b){const done=()=>{const o=b.dataset.o||b.textContent;b.dataset.o=o;b.textContent='Copied';setTimeout(()=>{b.textContent=o},1300)},fb=()=>{const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove();done()};try{navigator.clipboard.writeText(t).then(done,fb)}catch(e){fb()}}`;
