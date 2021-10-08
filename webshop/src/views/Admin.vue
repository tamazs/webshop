<template>
    <div>
        <AdminInfoRow/>
        <AdminButtons/>
    </div>
</template>

<script>
import AdminButtons from '../components/admin/AdminButtons.vue'
import AdminInfoRow from '../components/admin/AdminInfoRow.vue'
export default {
  components: { AdminInfoRow, AdminButtons },
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

template {
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
}
</style>