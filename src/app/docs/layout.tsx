import { DocsSidebarNav } from "@/components/docs-sidebar-nav";
import { docsConfig } from "@/config/docs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1">
        <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <div className="relative h-full py-6 pl-8 pr-6 lg:py-8">
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </div>
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_100px]">
            <div className="mx-auto w-full min-w-0">
              <div className="pb-12">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
