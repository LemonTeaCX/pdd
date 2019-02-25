export default {
	checkedCount(state) {
		return state.data.reduce((total, item) => {
      return total + (item.finish ? 1 : 0); 
    }, 0);
	},
	dataLen(state) {
		return state.data.length;
	},
	checkedAll(state, getters) {
		let dataLen = getters.dataLen;
    return getters.checkedCount === dataLen && dataLen !== 0;
	}
}
