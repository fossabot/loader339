/**
 * @fileoverview The beta module.
 *
 * @author Derek Lewis <DerekNonGeneric@inf.is>
 * @license 0BSD
 * @module {module} beta
 */

/**
 * @param {number} operand
 *
 * @return {Promise<number>}
 */
async function addself(operand) {
  return operand + operand;
}

export default { addself };
