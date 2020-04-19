const dev = process.env.ROLLUP_WATCH

export default {
  input: './src/main.js',
  output: {
    format: 'es',
    name: 'app',
    file: 'public/bundle.js',
    sourcemap: dev
  },
  plugins: [
    require('rollup-plugin-svelte')({
      dev,
      css: (css) => css.write('public/bundle.css', false),
      preprocess: require('svelte-preprocess')({ postcss: true }),
    }),
    require('@rollup/plugin-node-resolve')({
      browser: true,
      dedupe: (importee) =>
        importee === 'svelte' || importee.startsWith('svelte/'),
      customResolveOptions: {
        moduleDirectory: ['src', 'node_modules'],
        extensions: ['.svelte', '/index.svelte', '.mjs', '.js', '.json'],
      },
    }),
    require('@rollup/plugin-typescript')(),
    require('@rollup/plugin-commonjs')(),
    dev && require('rollup-plugin-serve')('public'),
    dev && require('rollup-plugin-livereload')('public'),
	!dev && require('rollup-plugin-terser').terser(),
	!dev && require('rollup-plugin-analyzer')({
		summaryOnly: true
	})
  ]
}
