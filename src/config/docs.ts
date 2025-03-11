import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "GitHub",
      href: siteConfig.links.github,
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Usage",
          href: "/docs/usage",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Authentication",
          href: "/docs/components/authentication",
          items: [],
        },
        {
          title: "API Routes",
          href: "/docs/components/api-routes",
          items: [],
        },
        {
          title: "Database",
          href: "/docs/components/database",
          items: [],
        },
        {
          title: "Form Handling",
          href: "/docs/components/form-handling",
          items: [],
        },
        {
          title: "State Management",
          href: "/docs/components/state-management",
          items: [],
        },
        {
          title: "Deployment",
          href: "/docs/components/deployment",
          items: [],
        },
      ],
    },
    {
      title: "Rules",
      items: [
        {
          title: "Form Handling",
          href: "/docs/rules/form-handling",
          items: [],
        },
      ],
    },
    {
      title: "Contributing",
      items: [
        {
          title: "How to Contribute",
          href: "/docs/contributing",
          items: [],
        },
        {
          title: "Code of Conduct",
          href: "/docs/code-of-conduct",
          items: [],
        },
      ],
    },
  ],
};
