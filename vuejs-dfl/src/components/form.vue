<template>
    <div class="row" style="width: 100%; margin-left: 50px;">
        <!-- create a new account -->
        {{ formData }}
        <div class="col-md-6 col-sm-6 create-new-account">
            <h4 class="checkout-subtitle">Create a new product</h4>
            <p class="text title-tag-line">Create your new product.</p>
            <form class="register-form outer-top-xs" role="form">
                <div class="form-group">
                    <label class="info-title">Name <span>*</span></label>
                    <input type="text" v-model="formData.name" class="form-control unicase-form-control text-input">
                </div>
                <div class="form-group">
                    <label class="info-title">Price <span>*</span></label>
                    <input type="number" v-model="formData.price" class="form-control unicase-form-control text-input">
                </div>
                <div class="form-group">
                    <label class="info-title">Sale <span>*</span></label>
                    <input type="number" v-model="formData.sale" class="form-control unicase-form-control text-input">
                </div>
                <button @click="submit" type="button"
                 class="btn-upper btn btn-primary checkout-page-button">
                 {{ status == 0 ? "Thêm mới" : "Sửa thông tin"}}</button>
            </form>
        </div>
        <!-- create a new account -->
    </div><!-- /.row -->
</template>
<script>
import { defineComponent, ref, watch, computed, getCurrentInstance } from "vue";
import axios from 'axios'
import router from '../router'
import { useRoute } from 'vue-router'
export default defineComponent({
    setup(props) {
        const route = useRoute()
        
        const formData = ref({
            name: '',
            price: 0,
            sale: 0
        })
        console.log(route.params);
        const getDetail = (id) => {
            axios.get(`https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/${id}`)
                .then(function (response) {
                    console.log(response);
                    formData.value.name = response.data.name
                    formData.value.price = response.data.price
                    formData.value.sale = response.data.sale
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const status = ref(0);
        if (route.params.id != 'create') {
            status.value = 1
            console.log(route.params.id);
            getDetail(route.params.id)
        }
        
        const submit = () => {
            if (status.value == 0) {
                add()
            } else {
                update()
            }
        }
        const update = () => {
            axios.put(`https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/${route.params.id}`, formData.value)
                .then(function (response) {
                    alert('Sửa thành công')
                    router.replace({ path: '/' })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        const add = () => {
            axios.post('https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products', formData.value)
                .then(function (response) {
                    alert('Thêm mới thành công')
                    router.replace({ path: '/' })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        return {
            formData,
            submit,
            status
        }
    }
})
</script>