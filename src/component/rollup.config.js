import typescript from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-css-only'
import png from "rollup-plugin-image"

// import pkg from './package.json' with assertion type json
// above importbut with assertion type json
import pkg from './package.json' assert { type: "json" };

export default {
    input: 'BotEmbed.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports:  'named',
        sourcemap: true,
        strict: false,
      }
    ],
    plugins: [
        css({ insert: true }),
        png(),
      typescript({ objectHashIgnoreUnknownHack: true })
    ],
    external: ['react', 'react-dom', 'react-icons']
  }