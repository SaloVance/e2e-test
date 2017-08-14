let result = {};

/**
 * test runnder
 * @param {string} title
 * @param {function} spec
 */
window.test = (title, spec) => {
    try {
        spec();
        result[title] = true;
    } catch (e) {
        result[title] = false;
    }
};

/**
 * end e2e test, send result to local server
 */
window.end = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8888/report', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(result));
    window.close();
}