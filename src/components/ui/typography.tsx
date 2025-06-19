export const H1 = ({ children, className = "" }) => (
  <h1 className={`text-3xl font-bold text-[--color-text] ${className}`}>{children}</h1>
);

export const Paragraph = ({ children, className = "" }) => (
  <p className={`text-sm text-[--color-secondary-text] ${className}`}>{children}</p>
);
