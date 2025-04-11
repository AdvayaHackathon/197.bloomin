import * as React from "react"
import { cn } from "@/lib/utils"

// Create a context for tooltip state
type TooltipContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
};

const TooltipContext = React.createContext<TooltipContextType | undefined>(undefined);

const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);
  if (context === undefined) {
    throw new Error("Tooltip components must be used within a Tooltip component");
  }
  return context;
};

const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const Tooltip = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState<React.ReactNode>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const value = React.useMemo(() => ({
    open,
    setOpen,
    content,
    setContent
  }), [open, content]);

  return (
    <TooltipContext.Provider value={value}>
      <div 
        className="inline-block relative" 
        onMouseLeave={() => setOpen(false)}
        ref={tooltipRef}
        {...props}
      >
        {children}
        {open && content && (
          <div className="absolute z-50 top-full mt-1 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-md border bg-popover text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
            {content}
          </div>
        )}
      </div>
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { tooltipContent?: React.ReactNode }
>(({ className, tooltipContent, onMouseEnter, ...props }, ref) => {
  const { setOpen, setContent } = useTooltipContext();

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (tooltipContent) {
      setContent(tooltipContent);
    }
    setOpen(true);
    onMouseEnter?.(e);
  };

  return (
    <button
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    />
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { setContent } = useTooltipContext();
  
  // Set the content when the component mounts
  React.useEffect(() => {
    setContent(children);
  }, [children, setContent]);

  return (
    <div
      ref={ref}
      className={cn("hidden", className)} // Hidden because it's only used to set content
      {...props}
    />
  );
});
TooltipContent.displayName = "TooltipContent";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
