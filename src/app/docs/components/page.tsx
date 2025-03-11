import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Components</h1>
      <p className="lead">Explore the workflow components available in Flow.</p>

      <div className="not-prose grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Link
          href="/docs/components/authentication"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary"
        >
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-xl">
                Authentication
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete authentication flows with various providers.
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/docs/components/api-routes"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary"
        >
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-xl">API Routes</h3>
              <p className="text-muted-foreground text-sm">
                Common API patterns and middleware for NextJS applications.
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/docs/components/database"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary"
        >
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-xl">Database</h3>
              <p className="text-muted-foreground text-sm">
                Database connection and ORM integration workflows.
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/docs/components/form-handling"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary"
        >
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-xl">
                Form Handling
              </h3>
              <p className="text-muted-foreground text-sm">
                Form validation, submission, and error handling patterns.
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/docs/components/state-management"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary"
        >
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-xl">
                State Management
              </h3>
              <p className="text-muted-foreground text-sm">
                Client and server state management solutions.
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/docs/components/deployment"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary"
        >
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-xl">Deployment</h3>
              <p className="text-muted-foreground text-sm">
                Deployment workflows and CI/CD integration.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
