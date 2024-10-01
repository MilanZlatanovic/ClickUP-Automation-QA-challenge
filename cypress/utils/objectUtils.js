
function removeField(obj, path) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((o, key) => o[key], obj);
    delete lastObj[lastKey];
}

module.exports = {
    removeField
};
