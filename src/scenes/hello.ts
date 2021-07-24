import k from "../kaboom";

const helloScn = () => {
    console.log('hello world')
    k.add([
        k.text("Hello Game Dev js!", 8),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.origin('center')
    ]);
}

export default helloScn;