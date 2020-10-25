interface Test {
    lil: number
};
class Lol<T> {
    constructor(lol: T) {
        Object.assign<Lol<T>, T>(this, lol)
    }
    load() {}
}

type ViewModel<T> = Lol<T> & T;
const ViewModel = Lol as new <T>(props: T) => ViewModel<T>;

const policy = new ViewModel<Test>({lil: 123})

type test1 = new <T>(params:T) => ViewModel<T>;

const func1 = ViewModel;

const lllll1 = new func1<Test>({lil: 123}) 
