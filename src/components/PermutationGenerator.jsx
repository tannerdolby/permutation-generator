import { useState } from 'react';
import getPermutations from '../helpers/permutations';

export default function PermutationGenerator() {
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    return (
        <div className="permutation-generator">
            <div className="input-control">
                <label htmlFor="permutation-input">Enter some text</label>
                <input
                    id="permutation-input"
                    type="text"
                    placeholder="[1, 2, 3]"
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        if (userInput[0] == '[' && userInput[userInput.length - 1] == ']') {
                            const arr = JSON.parse(userInput);
                            const permutations = getPermutations(arr);
                            setOutput(JSON.stringify(permutations));
                        } else {
                            const words = userInput.split(' ');
                            if (words.length > 1) {
                                setOutput("Error! Only word or array is allowed to be permutated at a time");
                                return;
                            }
                            const permutations = [];
                            for (const word of words) {
                                permutations.push(...getPermutations(word.split('')));
                            };
                            setOutput(JSON.stringify(permutations));
                        }}}
                    >
                        Permute
                    </button>
                </div>
                {output.length ?
                    <div>
                        <pre className="permutation-output"><code>{output}</code></pre>
                        <button onClick={(e) => {
                            writeToClipboard(output);
                        }}>Copy</button>
                    </div>
                : ''}
        </div>
    );
}

async function writeToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error(err.message);
    }
}
