/**
 * INSTRUMENTME(loader339): monkey patch `export default ...` with IIFE wrapper
 */

/**
 * @param {number} operand
 * @return {number}
 */
function addself(operand) {
  return operand + operand;
}

export default addself;
