/**
 * Base props that all components should extend
 */
export interface BaseComponentProps {
  /** Custom CSS class name */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Utility function to generate BEM class names
 * @param block - The block name (will be prefixed with 'cl-')
 * @param element - Optional element name
 * @param modifier - Optional modifier name(s)
 * @returns Generated BEM class name
 */
export const createBemClass = (
  block: string,
  element?: string,
  modifier?: string | string[]
): string => {
  let className = `cl-${block}`;
  
  if (element) {
    className += `__${element}`;
  }
  
  if (modifier) {
    const modifiers = Array.isArray(modifier) ? modifier : [modifier];
    for (const mod of modifiers) {
      if (mod) {
        className += `--${mod}`;
      }
    }
  }
  
  return className;
};