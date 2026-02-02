import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import { spawn } from 'child_process';
import { string } from 'rollup-plugin-string'
import svgo from 'rollup-plugin-svgo';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/app/app.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'anideskMain',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production
            },
            onwarn: (warning, handler) => {
                if (warning.code === "css_unused_selector") return;
                if (warning.code === "a11y_click_events_have_key_events") return;
                if (warning.code === "a11y_no_static_element_interactions") return;
                if (warning.code === "a11y_consider_explicit_label") return;
                if (warning.code === "a11y_img_redundant_alt") return;
                if (warning.code === "a11y_no_noninteractive_tabindex") return;
                handler(warning);
            }
        }),
        svgo(),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        string({
            include: 'src/icons/*.svg',
          }),
        css({ output: 'bundle.css' }),
        commonjs(),
        !production && serve(),
        !production && livereload('public'),
        production && terser(),
        
    ],
    watch: {
        clearScreen: false
    }
};