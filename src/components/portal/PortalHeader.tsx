import { LabConfig } from '@/types/portal';
import { DnaIcon } from '@/components/icons/DnaIcon';

interface PortalHeaderProps {
  config?: LabConfig;
  isLoading?: boolean;
}

export function PortalHeader({ config, isLoading }: PortalHeaderProps) {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-6">
        {/* Centered Logo */}
        <div className="flex justify-center">
          {isLoading ? (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl skeleton-pulse" />
          ) : config?.logoUrl ? (
            <img
              src={config.logoUrl}
              alt={config.title || 'Lab Logo'}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl border border-border shadow-sm"
            />
          ) : (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <DnaIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
