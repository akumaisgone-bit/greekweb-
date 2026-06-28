import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  style = {},
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium text-sm md:text-base transition-transform active:scale-[0.98] select-none rounded-full';
  
  const primaryShadow = '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';
  const secondaryShadow = '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

  const computedStyle: React.CSSProperties = { ...style };
  let variantClasses = '';

  if (variant === 'primary') {
    variantClasses = 'bg-[#051A24] text-white px-7 py-3 hover:bg-[#0c2f3f] transition-colors';
    computedStyle.boxShadow = primaryShadow;
  } else if (variant === 'secondary') {
    variantClasses = 'bg-white text-[#051A24] px-7 py-3 hover:bg-[#FAFBF9] transition-colors';
    computedStyle.boxShadow = secondaryShadow;
  } else if (variant === 'tertiary') {
    variantClasses = 'bg-white text-[#051A24] px-7 py-3 hover:bg-[#FAFBF9] transition-colors';
    computedStyle.boxShadow = secondaryShadow;
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        style={computedStyle}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses} 
      style={computedStyle}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
