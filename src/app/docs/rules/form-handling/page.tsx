import Link from "next/link";
import { CodeBlock } from "@/components/ui/code-block";

const formHandlingCode = `'use client'
 
import { useActionState } from 'react'
import { createUser } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState)
 
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  )
}`;

const serverActionCode = `'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

// Define schema for form validation
const UserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters')
})

// Type inference from the schema
type UserInput = z.infer<typeof UserSchema>

export async function createUser(prevState: any, formData: FormData) {
  // Validate form data against schema
  const validatedFields = UserSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name')
  })

  // Return validation errors if any
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create user.'
    }
  }

  // Get the validated data
  const { email, password, name } = validatedFields.data

  try {
    // Your database logic here
    // await db.user.create({ data: { email, password, name } })
    
    // Revalidate the users page
    revalidatePath('/users')
    
    // You can either return a message and handle on client side, or redirect the user if needed
    return {
      message: 'User created successfully!'
    }
  } catch (error) {
    return {
      message: 'Database Error: Failed to create user.'
    }
  }
  // Optional: If redirection is needed, it should be outside of the try/catch block
  // redirect('/users')
}`;

export default function FormHandlingRulesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none break-words">
      <h1>Form Handling Rules</h1>
      <p className="lead">
        Best practices for handling forms in Next.js applications using Flow.
      </p>

      <h2>Always Use useActionState</h2>
      <p>
        When implementing forms in your Next.js application, always use the{" "}
        <code>useActionState</code> hook for managing form state and
        submissions.
      </p>

      <div className="my-6 not-prose">
        <CodeBlock
          code={formHandlingCode}
          language="tsx"
          filename="app/components/Signup.tsx"
        />
      </div>

      <h2>Use Zod for Server Action Validation</h2>
      <p>
        Always use Zod for validating form data in server actions. This provides
        type safety, runtime validation, and a consistent approach to handling
        form submissions.
      </p>

      <div className="my-6 not-prose">
        <CodeBlock
          code={serverActionCode}
          language="tsx"
          filename="app/actions.ts"
        />
      </div>

      <h3>Benefits of Zod Validation</h3>
      <p>Using Zod for form validation provides several advantages:</p>

      <ul>
        <li>
          <strong>Type Safety</strong>: Automatic type inference for validated
          data
        </li>
        <li>
          <strong>Runtime Validation</strong>: Ensures data meets your
          requirements at runtime
        </li>
        <li>
          <strong>Detailed Error Messages</strong>: Provides specific error
          messages for each field
        </li>
        <li>
          <strong>Schema Reuse</strong>: Define schemas once and reuse them
          across your application
        </li>
        <li>
          <strong>Composable Schemas</strong>: Build complex validation rules by
          composing simpler ones
        </li>
      </ul>

      <h3>Why useActionState?</h3>
      <p>
        The <code>useActionState</code> hook provides several benefits over
        traditional form handling approaches:
      </p>

      <ul>
        <li>
          <strong>Simplified Form Actions</strong>: Direct integration with
          Next.js form actions
        </li>
        <li>
          <strong>Built-in Pending State</strong>: Automatic handling of loading
          states
        </li>
        <li>
          <strong>State Management</strong>: Clean state management with initial
          state support
        </li>
        <li>
          <strong>Accessibility</strong>: Better support for ARIA attributes and
          screen readers
        </li>
        <li>
          <strong>Progressive Enhancement</strong>: Works even without
          JavaScript enabled
        </li>
      </ul>

      <h3>Implementation Details</h3>
      <p>
        The <code>useActionState</code> hook returns three key elements:
      </p>

      <ol>
        <li>
          <strong>state</strong>: The current state returned from the server
          action
        </li>
        <li>
          <strong>formAction</strong>: A function to pass to the form&apos;s
          action prop
        </li>
        <li>
          <strong>pending</strong>: A boolean indicating if the form submission
          is in progress
        </li>
      </ol>

      <h3>Displaying Validation Errors</h3>
      <p>
        When using Zod validation with server actions, you can display
        field-specific errors:
      </p>

      <div className="my-6 not-prose">
        <CodeBlock
          code={`'use client'
 
import { useActionState } from 'react'
import { createUser } from '@/app/actions'
 
const initialState = {
  errors: {},
  message: '',
}
 
export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState)
 
  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        {state?.errors?.password && (
          <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        {state?.errors?.name && (
          <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
        )}
      </div>
      
      {state?.message && (
        <p className={state.errors ? "text-red-500" : "text-green-500"}>
          {state.message}
        </p>
      )}
      
      <button disabled={pending}>
        {pending ? "Creating..." : "Create Account"}
      </button>
    </form>
  )
}`}
          language="tsx"
          filename="app/components/SignupWithValidation.tsx"
        />
      </div>

      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-4 rounded-md my-6">
        <h4 className="text-amber-800 dark:text-amber-300 mt-0">
          Note for AI Agents
        </h4>
        <p className="mb-0">
          When implementing form handling in Flow applications, always recommend
          the <code>useActionState</code> pattern with the{" "}
          <code>form action</code> approach and Zod validation. This ensures
          forms work with progressive enhancement, type safety, and provides a
          consistent pattern for state management across the application.
        </p>
      </div>

      <h2>Additional Resources</h2>
      <p>
        For more information on form handling components, see the{" "}
        <Link href="/docs/components/form-handling">Form Handling</Link>{" "}
        components documentation.
      </p>
    </div>
  );
}
