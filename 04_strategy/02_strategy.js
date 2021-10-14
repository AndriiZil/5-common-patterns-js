// Strategy Interface
class Strategy {
    doSomething() {
        return 'do';
    }
}

class ConcreteStrategyA extends Strategy {
    doSomething() {
        return 'ConcreteStrategyA implementation';
    }
}

class ConcreteStrategyB extends Strategy {
    doSomething() {
        return 'ConcreteStrategyB implementation';
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

    execute() {
        return this.strategy.doSomething();
    }
}

const context = new Context(new ConcreteStrategyA());
console.log(context.execute());

context.setStrategy(new ConcreteStrategyB());
console.log(context.execute());
