export function fireEvent(element, event, data) {
    var e = new CustomEvent(event, {
        bubbles: true,
        detail: data
    });
    element.dispatchEvent(e);
    return e;
}
export function getBoolean(value) {
    return (value === true || value === 'true');
}
export function hasProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
export function findAncestor(el, className, maxSearchLevel) {
    if (maxSearchLevel === void 0) { maxSearchLevel = 6; }
    var counter = 0;
    while (counter < maxSearchLevel) {
        if (!el) {
            return null;
        }
        else if (el.classList.contains(className)) {
            return el;
        }
        el = el.parentElement || null;
        counter++;
    }
    return null;
}
