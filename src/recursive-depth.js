import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let result = 1;
       
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        console.log(arr[i])
        depth = depth + this.calculateDepth(arr[i]);
      }
      
      result = Math.max(result, depth);
      depth = 1;
    }  
      return result;
    }
  }
 