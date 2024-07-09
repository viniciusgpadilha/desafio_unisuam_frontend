import apiClient from '@/services/api';

const state = {
    user: {},
    followingUsers: [],
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_FOLLOWING_USERS(state, following) {
        state.followingUsers = following;
    },
};

const actions = {
    async fetchUserAndFollowing({ commit }, username) {
        const response = await apiClient.get(`/user/${username}`);

        commit('SET_USER', response.data.user);
        commit('SET_FOLLOWING_USERS', response.data.following);

    },
};

const getters = {
    user: (state) => state.user,
    followingUsers: (state) => state.followingUsers,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
