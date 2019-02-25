import {
	ADD_ITEM,
	DEL_ITEM,
	CLEAR_CHECKED,
	CHECK_ALL
} from './mutation-types';

export default {
	addItem({commit}, text, log) {
		commit(ADD_ITEM, {text, log});
	},
	delItem({commit}, index) {
		commit(DEL_ITEM, {index});
	},
	clearChecked({commit}) {
		commit(CLEAR_CHECKED);
	},
	checkAll({commit}, value) {
		commit(CHECK_ALL, {value});
	}
}
