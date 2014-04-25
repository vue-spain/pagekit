var require = (function(win, doc) {

    var i, base, vers, script = '', config = {}, metas = doc.getElementsByTagName('meta');

    if (metas) {
        for (i = 0; i < metas.length; i += 1) {

            base = metas[i].getAttribute('data-base');
            vers = metas[i].getAttribute('data-version');

            if (base && vers) {

                if (win.location.pathname.indexOf('index.php') > 0) {
                    script = 'index.php/';
                }

                config = {
                    baseUrl: base,
                    paths: {
                        'jquery':          'vendor/assets/jquery/jquery.js?ver=2.1.0',
                        'codemirror':      'vendor/assets/codemirror/codemirror.js?ver=3.22',
                        'marked':          'vendor/assets/marked/marked.js?ver=0.3.1',
                        'mustache':        'vendor/assets/mustache/mustache.js?ver=0.8.1',
                        'md5':             'vendor/assets/requirejs/plugins/md5.js?ver=0.0.5',
                        'uikit':           'vendor/assets/uikit/js/uikit.min',
                        'htmleditor':      'vendor/assets/uikit/js/addons/htmleditor.min',
                        'rowselect':       'extensions/system/assets/js/rowselect.js?ver=' + vers,
                        'finder':          'extensions/system/assets/js/finder.js?ver=' + vers,
                        'link':            'extensions/system/assets/js/link.js?ver=' + vers,
                        'linkpicker':      'extensions/system/assets/js/linkpicker.js?ver=' + vers,
                        'locale':          'extensions/system/assets/js/locale.js?ver=' + vers,
                        'editor.html':     'extensions/system/assets/js/editor/editor.html.js?ver=' + vers
                    },
                    shim: {
                        'uikit': {
                            deps: ['jquery']
                        },
                        'codemirror': {
                            deps: ['css!vendor/assets/codemirror/codemirror', 'css!vendor/assets/codemirror/hint']
                        },
                        'htmleditor': {
                            deps: ['uikit', 'marked', 'codemirror']
                        },
                        'editor.html': {
                            deps: ['htmleditor']
                        }
                    },
                    config: {
                        'uikit': {
                            base: 'vendor/assets/uikit/'
                        },
                        'tmpl': {
                            url: script + 'system/tmpl/'
                        },
                        'finder': {
                            url: script + 'system/finder/'
                        }
                    }
                };

                break;
            }
        }
    }

    return config;

})(window, document);
