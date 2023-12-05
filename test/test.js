import { Function } from "../dist/node";

console.log(`sqrt(sq(3)) = ${Function.of(x => x * x).dot(Math.sqrt).call(3)}`)