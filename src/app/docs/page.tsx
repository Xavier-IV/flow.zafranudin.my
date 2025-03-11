import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Introduction</h1>
      <p className="lead">Welcome to the Flow documentation.</p>

      <h2>What is Flow?</h2>
      <p>
        Flow is a collection of reusable workflow components for NextJS
        applications. It provides a set of common patterns and solutions for
        building modern web applications.
      </p>
      <p>
        If we have shadcn/ui for frontend components, Flow aims to be the
        equivalent for backend and full-stack workflows in NextJS applications.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Authentication workflows with various providers</li>
        <li>API route patterns and middleware solutions</li>
        <li>Database connection and ORM integration</li>
        <li>Form handling with validation and error management</li>
        <li>State management solutions for client and server</li>
        <li>Deployment workflows and CI/CD integration</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To get started with Flow, check out the{" "}
        <Link href="/docs/installation">installation guide</Link>.
      </p>
    </div>
  );
}
