<template>
    <!-- LOADER -->
    <div id="preloader">
        <div class="preloader pulse">
            <i class="fa fa-heartbeat" aria-hidden="true"></i>
        </div>
    </div><!-- end loader -->
    <!-- END LOADER -->

    <!-- Start header -->
    <header class="top-header">
        <nav class="navbar header-nav navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#home"><img src="/images/logo_wedding.png" width="50px" height="auto"
                        alt="image"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd"
                    aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul class="navbar-nav">
                        <li><a class="nav-link active" href="#home">TRANG CHỦ</a></li>
                        <li><a class="nav-link" href="#gallery">ALBUM HÌNH CƯỚI</a></li>
                        <li><a class="nav-link" href="#events">SỰ KIỆN</a></li>
                        <li><a class="nav-link" href="#contact">THÔNG TIN</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- End header -->

    <!-- Start Banner -->
    <div id="home" class="ulockd-home-slider">
        <div class="container-fluid">
            <div class="row">
                <div class="pogoSlider" id="js-main-slider">
                    <div class="pogoSlider-slide" data-transition="zipReveal" data-duration="1500"
                        style="background-image:url(images/slider-01.jpg);">
                        <div class="lbox-caption">
                            <div class="lbox-details">
                                <h1>Đình Hiếu &hearts; Nguyễn Hoài</h1>
                                <h2>SAVE THE DATE</h2>
                                <p><strong> Ngày 09 Tháng 11 Năm 2024</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="pogoSlider-slide" data-transition="blocksReveal" data-duration="1500"
                        style="background-image:url(images/slider-02.jpg);">
                        <div class="lbox-caption">
                            <div class="lbox-details">
                                <h1>Đình Hiếu &hearts; Nguyễn Hoài</h1>
                                <h2>SAVE THE DATE</h2>
                                <p><strong> Ngày 09 Tháng 11 Năm 2024</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="pogoSlider-slide" data-transition="shrinkReveal" data-duration="2000"
                        style="background-image:url(images/slider-03.jpg);">
                        <div class="lbox-caption">
                            <div class="lbox-details">
                                <h1>Đình Hiếu &hearts; Nguyễn Hoài</h1>
                                <h2>SAVE THE DATE</h2>
                                <p><strong> Ngày 09 Tháng 11 Năm 2024</strong></p>
                            </div>
                        </div>

                    </div>
                </div><!-- .pogoSlider -->
            </div>
        </div>
    </div>
    <!-- End Banner -->

    <!-- Start Family -->
    <div id="invitation-card" class="invitation-card-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-box">
                        <h2>Thiệp Mời</h2>
                        <p>Trân trọng kính mời! </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="single-team-member">
                        <img @click="openModal('thiep.png', false, '')" class="img-fluid image-main"
                            src="/images/thiep.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Family -->

    <div id="SECTION2" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-box">
                        <h2>Chú Rể &nbsp;&&nbsp; Cô Dâu</h2>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-6">
                    <div class="custom-image text-center">
                        <img @click="openModal('thiep.png', false, '')" class="img-fluid mb-2" src="/images/thiep.png"
                            alt="" />
                        <h2>&hearts; Đình Hiếu</h2>
                        <h3 class="name-family">Con ông : <b>Nguyễn Đình Quỳnh</b></h3>
                        <h3 class="name-family">Con bà : <b>Lê Thị Lan</b></h3>
                    </div>
                </div>
                <div class="col-6">
                    <div class="custom-image text-center">
                        <img @click="openModal('thiep.png', false, '')" class="img-fluid mb-2" src="/images/thiep.png"
                            alt="" />
                        <h2>&hearts; Nguyễn Hoài</h2>
                        <h3 class="name-family">Con ông : <b>Nguyễn Đình Phương</b> <br></h3>
                        <h3 class="name-family">Con bà : <b>Ngô Thị Hoa</b></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Start Gallery -->
    <div id="gallery" class="gallery-box">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-box">
                        <h2>Album ảnh cưới</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <ul class="popup-gallery clearfix">
                    <li>
                        <a href="/images/gallery-01.jpg">
                            <img class="img-fluid" src="/images/gallery-01.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-02.jpg">
                            <img class="img-fluid" src="/images/gallery-02.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-03.jpg">
                            <img class="img-fluid" src="/images/gallery-03.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-04.jpg">
                            <img class="img-fluid" src="/images/gallery-04.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-05.jpg">
                            <img class="img-fluid" src="/images/gallery-05.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-06.jpg">
                            <img class="img-fluid" src="/images/gallery-06.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-07.jpg">
                            <img class="img-fluid" src="/images/gallery-07.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/images/gallery-08.jpg">
                            <img class="img-fluid" src="/images/gallery-08.jpg" alt="single image">
                            <span class="overlay"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Gallery -->

    <!-- Start Events -->
    <div id="events" class="events-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-box">
                        <h2>Lịch trình sự kiện</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="event-inner">
                        <img @click="openModal('time_line.png', false, '')" class="img-fluid image-main"
                            src="/images/time_line.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Events -->

    <!-- Start Contact -->
    <div id="contact" class="contact-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-box">
                        <h2>Sổ Lưu Bút</h2>
                        <p>Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="contact-block">
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name"
                                            placeholder="Nhập họ tên" required
                                            data-error="Vui lòng điền họ tên của bạn!">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" id="message" placeholder="Nhập lời chúc của bạn*"
                                            rows="8" data-error="Vui lòng nhập lời chúc của bạn!" required></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="submit-button text-center">
                                        <button class="btn btn-common" id="submit" type="submit">Gửi lời chúc</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Contact -->

    <div id="SECTION15" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-box">
                        <h2>Chúc Phúc</h2>
                        <p>Cảm ơn tất cả tình cảm của cô dì chú bác, bạn bè và anh chị em đã dành cho Hiếu &amp; Hoài
                        </p>
                    </div>
                </div>
            </div>

            <div class="row mb-4 qr-pc">
                <div class="col-6">
                    <div class="custom-image text-center">
                        <img @click="openModal('thiep.png', false, '')" class="img-fluid" src="/images/thiep.png"
                            alt="" />
                        <p style="margin-bottom: 10px !important;">Chú Rể</p>
                        <h2>Đình Hiếu</h2>
                        <button @click="openModal('qr-hieu.jpg', true, '0349673669')" type="button"
                            class="btn btn-primary w-100"
                            style="background-color: #63c7bd !important; border: none !important;">Mừng Cưới</button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="custom-image text-center">
                        <img @click="openModal('thiep.png', false, '')" class="img-fluid" src="/images/thiep.png"
                            alt="" />
                        <p style="margin-bottom: 10px !important;">Cô Dâu</p>
                        <h2>Nguyễn Hoài</h2>
                        <button @click="openModal('qr-hoai.jpg', true, '0382037962')" type="button"
                            class="btn btn-primary w-100"
                            style="background-color: #63c7bd !important; border: none !important;">Mừng Cưới</button>
                    </div>
                </div>
            </div>
            <div class="mt-2 qr-mobile">
                <div class="mb-4">
                    <h2 class="text-center">Mừng cưới đến chú rể</h2>
                    <p v-if="mobileCopied1" class="text-center mb-0" style="color: #10b307; font-size: 20px;">Đã sao chép số tài khoản!</p>
                    <div class="col-12 text-center wp-qr-image" style="font-family: 'FontAwesome';">
                        <img class="qr-image" width="100%" src="/images/qr-hieu.jpg" alt="">
                        <b>Ngân hàng: </b> VPBank <br>
                        <b>Số Tài Khoản: </b> 0349673669 <br>
                        <b>Tên tài khoản: </b> NGUYEN DINH HIEU
                    </div>
                    <div class="d-flex text-center justify-content-center mt-2">
                        <button @click="downloadImageMobile('qr-hieu.jpg')" type="button" class="btn btn-primary" style="padding: 5px 50px; margin-right: 10px; background-color: #63c7bd !important; border: none !important;">Tải Ảnh</button>
                        <button @click="copyAccountNumberMobile('0349673669')" type="button" class="btn btn-primary" style="padding: 5px 50px; margin-left: 10px; background-color: #63c7bd !important; border: none !important;">Coppy STK</button>
                    </div>
                </div>
                
                <div class="mt-4 mb-2">
                    <h2 class="text-center">Mừng cưới đến cô dâu</h2>
                    <p v-if="mobileCopied2" class="text-center mb-0" style="color: #10b307; font-size: 20px;">Đã sao chép số tài khoản!</p>
                    <div class="col-12 text-center wp-qr-image" style="font-family: 'FontAwesome';">
                        <img class="qr-image" width="100%" src="/images/qr-hoai.jpg" alt="">
                        <b>Ngân hàng: </b> MBBank<br>
                        <b>Số Tài Khoản: </b> 0382037962 <br>
                        <b>Tên tài khoản: </b> NGUYEN THI HOAI 
                    </div>
                    <div class="d-flex text-center justify-content-center mt-2">
                        <button @click="downloadImageMobile('qr-hoai.jpg')" type="button" class="btn btn-primary" style="padding: 5px 50px; margin-right: 10px; background-color: #63c7bd !important; border: none !important;">Tải Ảnh</button>
                        <button @click="copyAccountNumberMobile('0382037962')" type="button" class="btn btn-primary" style="padding: 5px 50px; margin-left: 10px; background-color: #63c7bd !important; border: none !important;">Coppy STK</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="thank" class="thank-box">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="event-inner">
                        <img width="100%"
                            src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/88b6d6c5cb36ccd3725c92f0e0b3d89b.jpeg"
                            alt="Hiếu &amp; Hoài Wedding site!">
                    </div>
                    <div class="title-box">
                        <h2 class="text-center">Forever our love, Thank you!</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Start Footer -->
    <footer class="footer-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="footer-company-name">Happy wedding. &copy; 2024 Design By : Nguyễn Đình Hiếu</p>
                </div>
            </div>
        </div>
    </footer>
    <div v-if="isModalVisible" class="wp-modal-image" @click="closeModalIfOutside">
        <p v-if="copied" class="text-center mb-0" style="color: #ecf3ec; font-size: 20px;">Đã sao chép số tài khoản!</p>
        <div class="modal-image">
            <span class="close" @click="closeModal">&times;</span>
            <img class="modal-content" :src="modalImageSrc" id="img01">
            <div v-if="checkBtn" class="d-flex text-center justify-content-center mt-2">
                <button @click="downloadImage" type="button" class="btn btn-primary"
                    style="padding: 5px 50px; margin-right: 10px;">Tải Ảnh</button>
                <button @click="copyAccountNumber" type="button" class="btn btn-primary"
                    style="padding: 5px 50px; margin-left: 10px;">Coppy STK</button>
            </div>
        </div>
    </div>
    <!-- End Footer -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isModalVisible = ref(false);
const modalImageSrc = ref('');
const checkBtn = ref(false);
const bankNumber = ref('');
const copied = ref(false);
const mobileCopied1 = ref(false);
const mobileCopied2 = ref(false);

const openModal = (nameImage: string, checkBtnModal: boolean, stk: string) => {
    modalImageSrc.value = '/images/' + nameImage;
    isModalVisible.value = true;
    checkBtn.value = checkBtnModal;
    bankNumber.value = stk;
};

const closeModal = () => {
    isModalVisible.value = false;
};

const downloadImage = () => {
    const link = document.createElement('a');
    link.href = modalImageSrc.value;
    link.download = 'wedding' + modalImageSrc.value;
    link.click();
};

// Hàm sao chép STK
const copyAccountNumber = () => {
    const input = document.createElement('input');
    input.value = bankNumber.value;
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');

    document.body.removeChild(input);

    copied.value = true;

    setTimeout(() => {
        copied.value = false;
    }, 2000);
};

const closeModalIfOutside = (event: MouseEvent) => {
    const modalContent = document.querySelector('.modal-image');

    if (!modalContent?.contains(event.target as Node)) {
        closeModal();
    }
};

const downloadImageMobile = (namQrImage: string) => {
    const link = document.createElement('a');
    link.href = '/images/'+namQrImage;
    link.download = 'wedding' + '/images/'+namQrImage;
    link.click();
}

const copyAccountNumberMobile = (nameStk: string) => {
    const input = document.createElement('input');
    input.value = nameStk;
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');

    document.body.removeChild(input);
    if (nameStk == '0349673669') {
        mobileCopied1.value = true;
        setTimeout(() => {
            mobileCopied1.value = false;
        }, 2000);
    } else {
        mobileCopied2.value = true;
        setTimeout(() => {
            mobileCopied2.value = false;
        }, 2000);
    }
}
</script>


<style scoped></style>
