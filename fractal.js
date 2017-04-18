'use strict';

/* Fractalのインスタンスの作成とエクスポート */
const fractal = module.exports = require('@frctl/fractal').create();

const mandelbrot = require('@frctl/mandelbrot'); 
const myCustomisedTheme = mandelbrot({
  skin: "white",
  "nav": ["docs", "components"]
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme);

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'Sizucca Component Library');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/src/css');

// builder
fractal.web.set('builder.dest', __dirname + '/public');
fractal.web.set('builder.ext', '.html');

fractal.components.set('statuses', {
    prototype: {
        label: "Prototype",
        description: "Do not implement.",
        color: "#FF3333"
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution.",
        color: "#FF9233"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: "#29CC29"
    }
});

fractal.docs.set('statuses', {
    draft: {
        label: 'Draft',
        description: 'Work in progress.',
        color: '#FF3333'
    },
    ready: {
        label: 'Ready',
        description: 'Ready for referencing.',
        color: '#29CC29'
    }
});
