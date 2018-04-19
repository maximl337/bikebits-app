export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(user, token) {
	return {
		type: SET_AUTHED_USER,
		token,
		user
	}
}