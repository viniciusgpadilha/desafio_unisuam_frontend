<template>
    <div class="mt-3 card">
        <img :src="user.avatar_url" class="card-img-top" alt="User Avatar">
        <div class="card-body">
            <h5 class="card-title text-center">{{ user.name }}</h5>
            <p class="card-text text-center">{{ user.login }}</p>
            <p class="card-text mt-3"><i class="fa-solid fa-building"></i> {{ user.company }}</p>
            <p class="card-text"><i class="fa-solid fa-location-dot"></i> {{ user.location }}</p>
            <p class="card-text"><i class="fa-solid fa-book-bookmark"></i> Repositório Públicos: {{ user.public_repos }}</p>
            <p class="card-text"><i class="fa-solid fa-users"></i> Seguidores: {{ user.followers }}</p>
            <p class="card-text"><i class="fa-solid fa-user-plus"></i> Seguindo: {{ user.following }}</p>
            <a :href="user.html_url" class="card-text me-3"><i class="fa-brands fa-github me-1"></i>GitHub</a>
            <a :href="user.blog" class="card-text"><i class="fa-solid fa-link me-1"></i>Blog</a>
        </div>
        <button class="btn btn-secondary text-center" v-if="user.bio !== null" @click="showModal = true">Abrir Bio</button>
    </div>
    <Modal :isVisible="showModal" @close="showModal = false">
        <h1>Bio</h1>
        <p>{{ user.bio }}.</p>
    </Modal>
</template>

<script>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';

export default {
    props: ['user'],

    components: {
        Modal
    },

    setup() {
        const showModal = ref(false);

        return { showModal };
    }
}
</script>