// glslify.d.ts
declare module 'glslify' {
  function glsl(literals: TemplateStringsArray, ...placeholders: any[]): string
  export = glsl
}
