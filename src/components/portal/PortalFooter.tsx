import { DnaIcon } from '@/components/icons/DnaIcon';

export function PortalFooter() {
  return (
    <footer className="bg-card border-t border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Powered by</span>
          <DnaIcon className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">HAMA co. Smart Portal</span>
        </div>
      </div>
    </footer>
  );
}
