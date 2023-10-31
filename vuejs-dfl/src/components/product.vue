<template>
    <div v-for="data in listData" class="item item-carousel">
        <div  class="products">
            <div class="product">
                <div class="product-image">
                    <div class="image"> <a href="detail.html"><img src="src/assets/images/products/p1.jpg" alt=""></a>
                    </div>

                    <!-- <div v-if="data % 2 == 0" class="tag new"><span>new</span></div>
                    <div v-else class="tag hot"><span>hot</span></div> -->
                </div>

                <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span
                            class="price-before-discount">$800</span> </div>


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
        return {
            listData,
            deleteProduct,
        }
    }
})
</script>

<style scoped>
.item.item-carousel {
    width: 20%;
}
</style>