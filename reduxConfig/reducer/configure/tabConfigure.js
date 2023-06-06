import { typeReducer } from "../../../utilities/constants";

const initState = 0;

/**
 * tabConfigure:
 * 0. dashboard
 * 1. system setting
 * 2. storage
 * 3. language
 * 4. dictionary
 * 5. user
 * 6. metadata
 * 7. folder
 * 8. tag
 * 9. asset
 * 10. face
 * 11. storage assignment
 * 12. ingest
 * 13. outgest
 * 14. task
 *
 */

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.tabConfigure:
			return action.payload;
		default:
			return state;
	}
};
