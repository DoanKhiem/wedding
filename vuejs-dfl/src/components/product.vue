<template>
    <div v-for="data in listData" class="item item-carousel">
        <div  class="products">
            <div class="product">
                <div class="product-image">
                    <div class="image" @click="detail(data.id)"><img src="src/assets/images/products/p1.jpg" alt="">
                    </div>
                    <!-- <div v-if="data % 2 == 0" class="tag new"><span>new</span></div>
                    <div v-else class="tag hot"><span>hot</span></div> -->
                </div>
                <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">{{  data.name }}</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> ${{  data.price }} </span> <span
                            class="price-before-discount">{{ data.sale }}%</span> </div>
                </div>
                <div class="cart clearfix animate-effect">
                    <div class="action">
                        <ul class="list-unstyled">
                            <li class="add-cart-button btn-group">
                                <button data-toggle="tooltip" class="btn btn-primary icon" type="button" title="Add Cart">
                                    <i class="fa fa-shopping-cart"></i> </button>
                                <button class="btn btn-primary cart-btn" type="button">Add to
                                    cart</button>
                            </li>
                            <li class="lnk wishlist"> <a data-toggle="tooltip" class="add-to-cart" href="detail.html"
                                    title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                            <li class="lnk" > 
                                <span @click="deleteProduct(data.id)" data-toggle="tooltip" class="add-to-cart" title="Compare"> 
                                    <i class="fa fa-trash"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- /.item -->
</template>
<script>
import { defineComponent, ref, watch, computed, getCurrentInstance } from "vue";
import axios from 'axios'
import router from '../router'
export default defineComponent({
    setup(props) {
        const deleteProduct = (productId) => {
            console.log(productId);
            axios({
                method: 'delete',
                url: `https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/${productId}`,
                responseType: 'stream'
            }).then(function (response) {
                console.log(response);
                alert('Xóa thành công')
                getList();
            })
        }
        const listData = ref([])
        // Truy xuất ảnh từ xa bằng GET request trong node.js
        const getList = () => {
            axios({
                method: 'get',
                url: 'https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products',
                responseType: 'stream'
            }).then(function (response) {
                console.log(response.data);
                listData.value = JSON.parse(response.data)
            })
        };
        getList();
        const detail = (id) => {
            router.push({ name: 'form', params: { id: id } })
        }   
        return {
            listData,
            deleteProduct,
            detail,
        }
    }
})
</script>

<style scoped>
.item.item-carousel {
    width: 20%;
}
</style>