'use client';

type DemoAlertButtonProps = {
  label: string;
};

export function DemoAlertButton({ label }: DemoAlertButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      onClick={() => window.alert('button clicked!')}
    >
      {label}
    </button>
  );
}
