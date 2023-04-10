import dictionary from './js/dictionary.js';


export const getWord = () => dictionary[Math.floor( dictionary.length * Math.random() )]


export const isInDictionary = (word) => {
    return dictionary.includes(word);
};

//export const isInDictionary = (word) =>    return dictionary.includes(word);
