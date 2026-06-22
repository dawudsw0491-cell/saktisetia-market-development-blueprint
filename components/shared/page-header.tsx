interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}