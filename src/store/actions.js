import {
	GET_HOME,
	GET_LIST,
	ADD_ITEM,
	DEL_ITEM,
	CLEAR_CHECKED,
	CHECK_ALL
} from './mutation-types';

import {
	getHome,
	getList
} from '../api'

export default {
	getHome({commit}) {
		commit(GET_HOME);
	},
	async getList({commit}) {
		const result = await getList();
		commit(GET_LIST, {list: result.data});
	},
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
