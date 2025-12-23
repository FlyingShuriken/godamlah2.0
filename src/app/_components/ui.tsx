import React from "react";

// --- Modal ---
export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm duration-200">
      <div
        className="animate-in zoom-in-95 w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 transition-colors hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="no-scrollbar max-h-[80vh] overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Card ---
export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus:ring-emerald-500",
    secondary:
      "bg-indigo-500 text-white hover:bg-indigo-400 focus:ring-indigo-500",
    outline:
      "border border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800 focus:ring-slate-500",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50",
    danger:
      "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="mr-2 -ml-1 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => (
  <div className="space-y-1.5">
    {label && (
      <label className="block text-xs font-medium tracking-wider text-slate-400 uppercase">
        {label}
      </label>
    )}
    <input
      className={`w-full rounded-lg border bg-slate-950 px-3 py-2.5 text-sm text-white placeholder-slate-500 transition-all focus:ring-2 focus:ring-emerald-500/50 focus:outline-none ${
        error
          ? "border-red-500 focus:border-red-500"
          : "border-slate-800 focus:border-emerald-500"
      } ${className}`}
      {...props}
    />
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);

// --- Textarea ---
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  className = "",
  ...props
}) => (
  <div className="space-y-1.5">
    {label && (
      <label className="block text-xs font-medium tracking-wider text-slate-400 uppercase">
        {label}
      </label>
    )}
    <textarea
      className={`w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none ${className}`}
      {...props}
    />
  </div>
);

// --- Select ---
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  children,
  className = "",
  ...props
}) => (
  <div className="space-y-1.5">
    {label && (
      <label className="block text-xs font-medium tracking-wider text-slate-400 uppercase">
        {label}
      </label>
    )}
    <div className="relative">
      <select
        className={`w-full appearance-none rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-sm text-white transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none ${className}`}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  </div>
);
