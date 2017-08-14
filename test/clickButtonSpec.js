let state = new State(window.location.href);
let prevClick = state.params.click;
let clickbutton = new ClickButton(document.querySelector('button'));
var expect = chai.expect;

/*
 * 浏览器的console.assert 跟node 里的 console.assert实现机制不同
 * 浏览器内的console.assert 不抛出异常，只打印错误，无法捕获
 */
test('first click ok', () => {
    clickbutton.onClick();
    state = new State(window.location.href);
    expect(+state.params.click).to.equal(1);
    // console.assert(state.params.click * 1 === (prevClick || 0) * 1 + 1);
});

test('second click ok', () => {
    prevClick = state.params.click;
    clickbutton.onClick();
    state = new State(window.location.href);
    expect(+state.params.click).to.equal(2);
    // console.assert(state.params.click * 1 === (prevClick || 0) * 1 + 2);
});

end();