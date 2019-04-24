const _forOwn = (obj, cb) => {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        cb(obj[key], key); // eslint-disable-line callback-return
    }
};

const $ = (...args) => document.querySelector(...args);
const $$ = (...args) => [...document.querySelectorAll(...args)];
const create = (type, attrs, props, children) => {
    const elem = document.createElement(type);
    _forOwn(attrs, (val, key) => elem.setAttribute(key, val));
    _forOwn(props, (val, key) => {
        if (val === false) { return; }
        elem[key] = val;
    });
    if (children) {
        children.filter(Boolean).forEach(child => elem.appendChild(child));
    }
    return elem;
};

export {
    $, $$, create,
};
