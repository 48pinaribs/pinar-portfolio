import type { MDXComponents } from "mdx/types";

// This file allows customizing built-in MDX components, e.g. to style
// headings/paragraphs consistently with the design system on /work/[slug].
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
