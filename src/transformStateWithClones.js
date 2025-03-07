'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let newState = { ...state };

  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        newState = { ...newState, ...action.extraData };
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          const { [key]: _, ...rest } = newState;

          newState = rest;
        });
        break;

      case 'clear':
        newState = {};
        break;

      default:
        break;
    }
  });

  return [newState];
}

module.exports = transformStateWithClones;
