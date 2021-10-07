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