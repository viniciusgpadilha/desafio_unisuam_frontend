<template>
    <div class="form-floating mt-3">
        <input type="text" v-model="search" placeholder="Pesquisar usuário" class="form-control" id="floatingInput">
        <label for="floatingInput">Pesquisar usuário</label>
    </div>
    <div class="mt-3">
        <ul class="list-group">
            <li v-for="followingUsers in filteredFollowing" :key="followingUsers.id" class="list-group-item border-bottom border-top-0 border-end-0 border-start-0 p-3">
                <img :src="followingUsers.avatar_url" alt="followingUsers Avatar" class="img-list">
                <a :href="followingUsers.html_url" class="link-secondary">{{ followingUsers.login }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['followingUsers'],
    data() {
        return {
            search: ''
        }
    },
    computed: {
        filteredFollowing() {
            return this.followingUsers.filter(f => f.login.includes(this.search));
        }
    }
}
</script>
