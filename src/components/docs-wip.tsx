import { AlertCircle, Info } from "lucide-react";
import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface DocsWIPProps {
  title: string;
  description?: string;
  isInstallation?: boolean;
}

export function DocsWIP({
  title,
  description,
  isInstallation = false,
}: DocsWIPProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <div>
        <h1>{title}</h1>
        <p className="lead">
          {description || "Documentation for this section is coming soon."}
        </p>
      </div>

      <Alert variant="default">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Work in Progress</AlertTitle>
        <AlertDescription>
          We&apos;re actively working on this documentation. Check back soon for
          updates.
        </AlertDescription>
      </Alert>

      {isInstallation && (
        <Alert
          variant="default"
          className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800"
        >
          <Info className="h-4 w-4 text-blue-500" />
          <AlertTitle>CLI Coming Soon</AlertTitle>
          <AlertDescription>
            We&apos;re developing a CLI tool to simplify the installation
            process. For now, installation requires manual setup and copying
            code from the examples.
          </AlertDescription>
        </Alert>
      )}

      <div>
        <h2>In the meantime</h2>
        <p>You might find these resources helpful:</p>
        <ul>
          <li>
            Check our{" "}
            <Link
              href="/docs"
              className="font-medium underline underline-offset-4"
            >
              introduction
            </Link>{" "}
            for an overview
          </li>
          <li>
            Visit our{" "}
            <Link
              href={siteConfig.links.github}
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              GitHub repository
            </Link>{" "}
            for the latest updates
          </li>
          <li>
            Consider{" "}
            <Link
              href="/docs/contributing"
              className="font-medium underline underline-offset-4"
            >
              contributing
            </Link>{" "}
            to this documentation
          </li>
        </ul>

        <div className="not-prose mt-8">
          <Button asChild>
            <Link href="/docs">Return to Documentation Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
