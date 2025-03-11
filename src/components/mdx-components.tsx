import { MDXCodeBlock } from "@/components/ui/code-block";

export function useMDXComponents(
  components: Record<string, React.ComponentType>
) {
  return {
    ...components,
    pre: MDXCodeBlock,
  };
}
