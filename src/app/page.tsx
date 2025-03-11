import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full space-y-6 py-6 md:pt-10 lg:py-32 flex justify-center items-center bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="flex max-w-[64rem] flex-col items-center gap-6 text-center w-full px-4 mx-auto">
              <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5">
                <Icons.gitHub className="h-4 w-4" />
                <Link
                  href={siteConfig.links.github}
                  className="hover:underline"
                  target="_blank"
                >
                  Follow along on GitHub
                </Link>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                NextJS Workflow Components
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                A collection of reusable server workflow components for NextJS
                applications. Open source. Community driven.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/docs" className="gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    className="gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full space-y-6 bg-slate-50 py-8 dark:bg-slate-900/30 md:py-12 lg:py-24 rounded-b-xl"
        >
          <div className="container mx-auto space-y-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Features
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Flow provides a collection of reusable workflow components for
                NextJS applications.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4 md:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Icons.user className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl">Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete authentication flows with various providers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Icons.fileText className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl">API Routes</h3>
                    <p className="text-sm text-muted-foreground">
                      Common API patterns and middleware for NextJS
                      applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Icons.creditCard className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl">Database</h3>
                    <p className="text-sm text-muted-foreground">
                      Database connection and ORM integration workflows.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Icons.check className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl">Form Handling</h3>
                    <p className="text-sm text-muted-foreground">
                      Form validation, submission, and error handling patterns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Icons.settings className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl">State Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Client and server state management solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Icons.arrowRight className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl">Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                      Deployment workflows and CI/CD integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="open-source" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container mx-auto max-w-[58rem] text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-4">
              Open Source
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              Flow is open source and powered by open source software.
            </p>

            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <Icons.gitHub className="h-6 w-6" />
                <span className="font-medium">
                  Xavier-IV/flow.zafranudin.my
                </span>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <Button asChild size="lg" className="rounded-full">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className="gap-2"
                >
                  <Icons.gitHub className="h-4 w-4" />
                  Star on GitHub
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              The code is available on{" "}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </Link>
              . Feel free to contribute!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
