/**
 * a helper state object to parse/generate url
 */

class State {
    constructor(url) {
        this.base = '';
        this.params = {};
        this.parse(url);
    }

    parse(url) {
        let seg = url.split('?');
        this.base = seg[0];

        if (seg.length < 2) {
            return;
        }

        seg[1].split('&').forEach(chunk => {
            let pair = chunk.split('=');
            if (pair.length) {
                this.params[pair[0]] = pair[1];
            }
        });

        return this;
    }

    generate() {
        return this.base + '?' + Object.keys(this.params).map(key => `${key}=${this.params[key]}`).join('&');
    }
}

if (typeof module !== 'undefined') {
    module.exports = State;
}