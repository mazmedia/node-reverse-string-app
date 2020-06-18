const randomWord = () =>  {
    const words = [
        'Good thing to know',
        'AWESOME!!!',
        'Wat?',
        '<<',
        'reverse',
        'back up'
    ];
    const randomNumber = Math.floor(Math.random() * 6);
    const sentance = words[randomNumber];
    const __wordp__ = document.querySelector('#wordp');

    __wordp__.innerHTML = sentance;
    console.log(sentance)
};

const main = () => {
    const __INPUT_VALUE__ = document.querySelector('#input').value;
    const __ACTUAL_HEADER__ = document.querySelector('#actual-header');
    const __ACTUAL__ = document.querySelector('#actual');

    __ACTUAL_HEADER__.innerHTML = 'Reversed:';
    __ACTUAL__.innerHTML = __INPUT_VALUE__;
}