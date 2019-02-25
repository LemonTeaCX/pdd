import {
	ADD_ITEM,
	DEL_ITEM,
	CLEAR_CHECKED,
	CHECK_ALL
} from './mutation-types';

export default {
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
