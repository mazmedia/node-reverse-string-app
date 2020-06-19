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
    let __ARR_OF_WORDS__ = [];

    console.log(__INPUT_VALUE__.length);

    // for (let i = 0; i < __INPUT_VALUE__.length; i++) {
    //     __ARR_OF_WORDS__ = [
    //         ...__INPUT_VALUE__[i]
    //     ];
    //     let vary = __ARR_OF_WORDS__[i] + ((__INPUT_VALUE__.length) - i);
    //     console.log(__ARR_OF_WORDS__);
    //     console.log(vary)
    // }

    for (let i = __INPUT_VALUE__.length - 1; i >= 0; i--) {
        __ARR_OF_WORDS__.push(__INPUT_VALUE__[i]);
        console.log(__ARR_OF_WORDS__);
    }

    __ACTUAL_HEADER__.innerHTML = 'Reversed:';
    __ACTUAL__.innerHTML = __ARR_OF_WORDS__.join("");
}