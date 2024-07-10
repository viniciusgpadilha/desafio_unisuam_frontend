<template>
     <div class="container">
        <div class="row">
            <div v-if="error" class="alert alert-danger mt-2 text-center">{{ error }}</div>

            <div class="col-3">
                <UserCard v-if="user" :user="user"></UserCard>
            </div>
            <div class="col-9">
                <FollowingList v-if="followingUsers" :followingUsers="followingUsers"></FollowingList>
            </div>
            
        </div> 
    </div>
  </template>
  
<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/desafio.css';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import UserCard from '../components/UserCard.vue';
import FollowingList from '../components/FollowingList.vue';

  
export default {
    components: { UserCard, FollowingList },

    setup() {
        const store = useStore();
        const route = useRoute();
  
        const user = computed(() => store.getters.user);
        const followingUsers = computed(() => store.getters.followingUsers);
        const error = computed(() => store.getters.error)

        const fetchUserAndFollowing = async () => {
        const username = route.params.username;
        await store.dispatch('fetchUserAndFollowing', username);
      };
  
      onMounted(() => {
        fetchUserAndFollowing();
      });
  
      return {
        user,
        followingUsers,
        error
      };
    },
};
</script>
  