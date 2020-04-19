const dev = process.env.ROLLUP_WATCH

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')(),
    //require('bulma'),
    //require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 0,
      autoprefixer: {
        grid: true,
      },
    }),
    require('cssnano')({
      autoprefixer: false,
      preset: ['default'],
    }),
    !dev &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/*.svelte'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
}
