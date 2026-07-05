import {sum} from './sum.js';

export function App() {
    const result = sum(2, 3);

    return (
        <div>
            <p>Sum of 2 and 3 is: {result}</p>
        </div>
    );
}