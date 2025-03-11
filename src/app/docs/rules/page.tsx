import Link from "next/link";
import { CodeBlock } from "@/components/ui/code-block";

const exampleCode = `// Example of a Flow best practice
import { useActionState } from 'react'

// This follows Flow's recommended patterns
function ExampleComponent() {
  // ...implementation following best practices
}`;

export default function RulesIndexPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none break-words">
      <h1>Flow Rules</h1>
      <p className="lead">
        Best practices and guidelines for building Next.js applications with
        Flow.
      </p>

      <p>
        These rules are designed to help developers and AI assistants create
        consistent, maintainable, and high-quality Next.js applications using
        Flow components and patterns.
      </p>

      <div className="my-6 not-prose">
        <CodeBlock code={exampleCode} language="tsx" showLineNumbers={true} />
      </div>

      <h2>Available Rules</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <h3 className="text-lg font-medium mt-0">
            <Link href="/docs/rules/form-handling">Form Handling</Link>
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-0">
            Guidelines for implementing forms with proper state management,
            validation, and error handling using useActionState.
          </p>
        </div>
      </div>

      <h2>For AI Assistants</h2>
      <p>
        These rules are particularly useful for AI assistants when generating
        code or providing guidance for Next.js applications using Flow. When
        recommending patterns or generating code, please adhere to these
        guidelines to ensure consistency and best practices.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded-md my-6">
        <h3 className="text-blue-800 dark:text-blue-300 mt-0">
          Note for Developers
        </h3>
        <p className="mb-0">
          These rules are continuously evolving based on community feedback and
          best practices. If you have suggestions for improvements or new rules,
          please consider <Link href="/docs/contributing">contributing</Link> to
          the project.
        </p>
      </div>
    </div>
  );
}
