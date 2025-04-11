import * as React from "react"
import { cn } from "@/lib/utils"

// Improved tabs implementation that properly handles tab switching
const Tabs = ({ 
  defaultValue, 
  children, 
  className,
  ...props 
}: { 
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  // Create a context to share the active tab state
  const tabsContext = React.useMemo(() => ({
    activeTab,
    setActiveTab: (value: string) => setActiveTab(value),
  }), [activeTab, setActiveTab]);

  return (
    <TabsContext.Provider value={tabsContext}>
      <div className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Create a context for tabs state
type TabsContextType = {
  activeTab?: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component");
  }
  return context;
};

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    value: string;
  }
>(({ className, value, ...props }, ref) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-background text-foreground shadow-sm",
        className
      )}
      onClick={() => setActiveTab(value)}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    value: string;
  }
>(({ className, value, ...props }, ref) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      ref={ref}
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent }
