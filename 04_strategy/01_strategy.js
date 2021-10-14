class StrategyManager {
    constructor() {
        this.strategies = [];
    }

    addStrategy(strategy) {
        this.strategies = [...this.strategies, strategy];
    }

    getStrategy(name) {
        return this.strategies.find(strategy => strategy.name === name);
    }
}

class Strategy {
    constructor(name, handler) {
        this.name = name;
        this.handler = handler;
    }

    doAction() {
        this.handler();
    }
}

const strategyManager = new StrategyManager();
const strategy1 = new Strategy('strategy1', () => console.log('Strategy1'));
const strategy2 = new Strategy('strategy2', () => console.log('Strategy2'));

strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

const strategyA = strategyManager.getStrategy('strategy1');
strategyA.doAction();

const strategyB = strategyManager.getStrategy('strategy2');
strategyB.doAction();

const strategyC = strategyManager.getStrategy('strategy3');

try {
    strategyC.doAction();
} catch (err) {
    console.error('Caught Error');
    console.error(err);
}
