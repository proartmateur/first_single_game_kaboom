import k from "./kaboom";
import hello from "./scenes/hello";
console.log("Primer Juego Simple");

k.scene('hello', hello);

k.scene('main', () => {
    k.go('hello');
});

k.start('main');
