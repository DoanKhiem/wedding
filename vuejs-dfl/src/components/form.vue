<template>
    <div class="row" style="width: 100%; margin-left: 50px;">
        <!-- create a new account -->
        {{  formData }}
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
                
                <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
            </form>
        </div>
        <!-- create a new account -->
    </div><!-- /.row -->
</template>
<script>
import { defineComponent, ref, watch, computed, getCurrentInstance } from "vue";
import axios from 'axios'
export default defineComponent({
    setup(props) {
        const formData = ref({
            name: '',
            price: 0,
            sale: 0
        })
        return {
            formData
        }
    }
})
</script>