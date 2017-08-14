/**
 * a button changing location when clicked
 */

 class ClickButton {
    constructor($dom) {
        $dom.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        let state = new State(window.location.href);
        if (typeof state.params.click === 'undefined') {
            state.params.click = 0;
        }

        state.params.click = +state.params.click + 1;
        window.history.replaceState({}, 'click', state.generate());
    }
 }

 if (typeof module !== 'undefined') {
    module.exports = ClickButton;
 }