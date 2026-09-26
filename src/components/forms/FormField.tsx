import * as React from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  hint?: string;
}

export function FormField({
  label,
  required,
  error,
  children,
  id,
  className = "",
  hint,
}: FormFieldProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-slate-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {hint && (
          <span className="text-[11px] text-slate-400">
            {hint}
          </span>
        )}
      </div>

      {children}

      {error && (
        <p className="text-xs text-red-600 animate-in fade-in duration-150">
          {error}
        </p>
      )}
    </div>
  );
}
