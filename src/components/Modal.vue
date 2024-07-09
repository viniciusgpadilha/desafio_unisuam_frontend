<template>
    <div class="modal" v-if="isVisible">
        <div class="modal-content">
            <span class="close me-3" @click="closeModal">&times;</span>
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Modal',
    
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    
    methods: {
        closeModal() {
        
        this.$emit('close');
        }
    }
}
</script>