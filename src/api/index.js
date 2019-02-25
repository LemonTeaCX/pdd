import ajax from './ajax';

export function getHome() {
	return ajax({
		url: '/api/getHome'
	});
}
