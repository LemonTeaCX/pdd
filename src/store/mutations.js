import {
	GET_HOME,
	GET_LIST,
	ADD_ITEM,
	DEL_ITEM,
	CLEAR_CHECKED,
	CHECK_ALL
} from './mutation-types';

import {getHome} from '../api'

export default {
	[GET_HOME](state) {
		getHome().then(home => state.home = home);
	},
	[GET_LIST](state, {list}) {
		state.list = list;
	},
	[ADD_ITEM](state, {text, log}) {
		state.data.unshift({ text, finish: false });
		console.log('this is log......' + log);
	},
	[DEL_ITEM](state, {index}) {
		state.data.splice(index, 1);
	},
	[CLEAR_CHECKED](state) {
		state.data = state.data.filter(item => !item.finish);
	},
	[CHECK_ALL](state, {value}) {
		state.data.forEach(item => {
      item.finish = value;
    });
	}
}
