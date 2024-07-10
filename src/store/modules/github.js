import apiClient from '@/services/api';

const state = {
    user: null,
    followingUsers: null,
    error: null,
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_FOLLOWING_USERS(state, following) {
        state.followingUsers = following;
    },
    SET_ERROR(state, error) {
        state.error = error;
    }
};

const actions = {
    async fetchUserAndFollowing({ commit }, username) {
        const response = await apiClient.get(`/user/${username}`);

        if (response.data.error) {
            commit('SET_ERROR', response.data.error);
        } else {
            commit('SET_USER', response.data.user);
            commit('SET_FOLLOWING_USERS', response.data.following);
        }
        
    },
};

const getters = {
    user: (state) => state.user,
    followingUsers: (state) => state.followingUsers,
    error: (state) => state.error,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
