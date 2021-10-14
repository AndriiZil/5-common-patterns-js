class Strategy {
    execute(a, b) {}
}

class ConcreteStrategyA {
    execute(a, b) {
        return a + b;
    }
}

class ConcreteStrategyB {
    execute(a, b) {
        return a - b;
    }
}

class ConcreteStrategyC {
    execute(a, b) {
        return a * b;
    }
}

class Context extends Strategy {
    constructor(strategy) {
        super();
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    doSomething(a, b) {
        this.strategy.execute(a, b);
    }
}

const context = new Context(new ConcreteStrategyA());
console.log(context.execute(1, 2));
