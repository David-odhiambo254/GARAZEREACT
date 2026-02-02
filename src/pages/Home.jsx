import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Home(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page home" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- banner-section -->
        <section class="banner-section p_relative">
            <div class="banner-carousel owl-theme owl-carousel owl-nav-none dots-style-one">
                <div class="slide-item p_relative">
                    <div class="bg-layer" style="background-image: url(assets/images/banner/banner-1.jpg);"></div>
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div class="content-box p_relative d_block z_5">
                                    <span class="upper-text">New Brand</span>
                                    <h2 class="p_relative d_block">Get all Brands of Engine Oils</h2>
                                    <p class="p_relative d_block">Fulfill your automotive fantasies without breaking the bank. Check our affordable car parts for an opulent yet</p>
                                    <div class="btn-box">
                                        <a href="/" class="theme-btn">Read More<span></span><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <div class="badge"><img src="assets/images/icons/badge-1.png" alt=""></div>
                                    <figure class="image clearfix"><img src="assets/images/banner/banner-img-1.png" alt=""></figure>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="slide-item p_relative">
                    <div class="bg-layer" style="background-image: url(assets/images/banner/banner-2.jpg);"></div>
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div class="content-box p_relative d_block z_5">
                                    <span class="upper-text">New Brand</span>
                                    <h2 class="p_relative d_block">Get all Brands of Engine Oils</h2>
                                    <p class="p_relative d_block">Fulfill your automotive fantasies without breaking the bank. Check our affordable car parts for an opulent yet</p>
                                    <div class="btn-box">
                                        <a href="/" class="theme-btn">Read More<span></span><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <figure class="image clearfix"><img src="assets/images/banner/banner-img-2.png" alt=""></figure>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="slide-item p_relative">
                    <div class="bg-layer" style="background-image: url(assets/images/banner/banner-3.jpg);"></div>
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div class="content-box p_relative d_block z_5">
                                    <span class="upper-text">New Brand</span>
                                    <h2 class="p_relative d_block">Get all Brands of Air Filters</h2>
                                    <p class="p_relative d_block">Fulfill your automotive fantasies without breaking the bank. Check our affordable car parts for an opulent yet</p>
                                    <div class="btn-box">
                                        <a href="/" class="theme-btn">Read More<span></span><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <figure class="image clearfix"><img src="assets/images/banner/banner-img-3.png" alt=""></figure>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <!-- banner-section end -->


        <!-- category-section -->
        <section class="category-section pt_90 pb_100">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Popular Categories</h2>
                    <a href="/">View All Category</a>
                </div>
                <div class="category-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-1.png" alt=""></figure>
                            <h4><a href="/">Light & Optics</a></h4>
                            <span class="text">3 items</span>
                        </div>
                    </div>
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-2.png" alt=""></figure>
                            <h4><a href="/">Braking System</a></h4>
                            <span class="text">5 items</span>
                        </div>
                    </div>
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-3.png" alt=""></figure>
                            <h4><a href="/">Exhaust System</a></h4>
                            <span class="text">3 items</span>
                        </div>
                    </div>
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-4.png" alt=""></figure>
                            <h4><a href="/">Cooling System</a></h4>
                            <span class="text">5 items</span>
                        </div>
                    </div>
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-5.png" alt=""></figure>
                            <h4><a href="/">Car Wheels</a></h4>
                            <span class="text">3 items</span>
                        </div>
                    </div>
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-6.png" alt=""></figure>
                            <h4><a href="/">Exterior Parts</a></h4>
                            <span class="text">2 items</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- category-section end -->


        <!-- shop-section -->
        <section class="shop-section pb_100">
            <div class="auto-container">
                <div class="sec-title mb_35">
                    <h2>Today’s popular picks</h2>
                </div>
                <div class="inner-container">
                    <div class="ads-box">
                        <span class="text">Car Wheel</span>
                        <h3><a href="/shop-details">Buy the Grills</a></h3>
                        <a href="/shop-details" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                        <figure class="image"><img src="assets/images/shop/shop-6.png" alt=""></figure>
                    </div>
                    <div class="content-box">
                        <div class="shop-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-2.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-13"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-2.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Interior</span>
                                        <h4><a href="/shop-details">Steering a car with a manual Wheel</a></h4>
                                        <h5><del>$92.99</del>$83.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                        <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Hot</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-3.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-13"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-3.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Front</span>
                                        <h4><a href="/shop-details">Toyota Starlet EP-82 HEAD Lights</a></h4>
                                        <h5><del>$100.99</del>$90.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                        <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-4.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-13"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-4.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Fuel</span>
                                        <h4><a href="/shop-details">Advance 10w30 full synthetic fuel</a></h4>
                                        <h5>$85.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4)</span></li>
                                        </ul>
                                        <span class="product-stock red"><i class="icon-39"></i>Stock Out</span>
                                        <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-5.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-13"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-5.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">14" Urban X Phantom Wheel Cover Set </a></h4>
                                        <h5>$80.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                        <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end -->


        <!-- feature-section -->
        <section class="feature-section pb_70">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div class="inner-box">
                                <span class="text">Only for this month</span>
                                <h2><a href="/shop-details">Buy the Tires</a></h2>
                                <h4>From $99.99</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-1.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div class="inner-box">
                                <span class="text hot">Hot Sale</span>
                                <h2><a href="/shop-details">Premium oils</a></h2>
                                <h4 class="discount">Up to 35% Off</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-2.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div class="inner-box">
                                <span class="hot-product">Stock Clear</span>
                                <h2><a href="/shop-details">Cheap Brakes</a></h2>
                                <h4>From $23.99</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-3.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- feature-section end -->


        <!-- deals-section -->
        <section class="deals-section pt_100 pb_70">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <div class="left-column">
                        <h2>Latest Deal of the week</h2>
                        <div class="timer">
                            <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                        </div>
                        <p>Remain until the end of the offer</p>
                    </div>
                    <div class="right-column">
                        <a href="/">View All Deals</a>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 deals-block">
                        <div class="deals-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="discount">-6%</span>
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/deals-1.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h4><a href="/shop-details">Quick start a car with a manual Battery Pack</a></h4>
                                    <h5><del>$22.99</del> $83.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <div class="progress-box">
                                        <div class="bar mb_10">
                                            <div class="bar-inner count-bar" data-percent="20%"></div>
                                        </div>
                                        <p>Available: <span>20%</span></p>
                                    </div>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart <span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 deals-block">
                        <div class="deals-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="discount">-7%</span>
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/deals-2.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h4><a href="/shop-details">1 X GENUINE 16” Ford Hydrolic Custom Steel </a></h4>
                                    <h5><del>$99.99</del> $75.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <div class="progress-box">
                                        <div class="bar mb_10">
                                            <div class="bar-inner green count-bar" data-percent="80%"></div>
                                        </div>
                                        <p>Available: <span>80%</span></p>
                                    </div>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart <span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- deals-section end -->


        <!-- brand-section -->
        <section class="brand-section pt_70 pb_80">
            <div class="pattern-layer">
                <div class="pattern-1" style="background-image: url(assets/images/shape/shape-2.png);"></div>
                <div class="pattern-2" style="background-image: url(assets/images/shape/shape-3.png);"></div>
            </div>
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Shop by Brands</h2>
                    <a href="/">View All Brands</a>
                </div>
                <div class="inner-container">
                    <div class="row clearfix">
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-1.png" alt=""></figure>
                                        <span>Audi</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-2.png" alt=""></figure>
                                        <span>BMW</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-3.png" alt=""></figure>
                                        <span>Mercedes Benz</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-4.png" alt=""></figure>
                                        <span>Tesla Motors</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-5.png" alt=""></figure>
                                        <span>Volkswagen</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-6.png" alt=""></figure>
                                        <span>Porsche</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-7.png" alt=""></figure>
                                        <span>Hyundai</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-8.png" alt=""></figure>
                                        <span>Volvo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-9.png" alt=""></figure>
                                        <span>Skoda</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-10.png" alt=""></figure>
                                        <span>Jaguar</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-11.png" alt=""></figure>
                                        <span>Ford</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12 brand-block">
                            <div class="brand-block-one">
                                <div class="inner-box">
                                    <a href="/">
                                        <figure class="image"><img src="assets/images/brands/brands-12.png" alt=""></figure>
                                        <span>Suzuki</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- brand-section end -->


        <!-- shop-section -->
        <section class="shop-section alternat-2 pb_100">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="ads-box">
                        <div class="bg-layer" style="background-image: url(assets/images/resource/ads-1.jpg);"></div>
                        <h2>-40%</h2>
                        <h4>Only This Week</h4>
                        <p>Fulfill your automotive fantasies without breaking the bank.</p>
                        <a href="/shop" class="theme-btn">View Products<span></span><span></span><span></span><span></span></a>
                    </div>
                    <div class="content-box clearfix">
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="discount-product">6% Off</span>
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-7.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-7.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Interior</span>
                                    <h4><a href="/shop-details">Starting a car with a manual transmission</a></h4>
                                    <h5><del>$92.99</del>$83.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(2)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="hot-product">Hot</span>
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-8.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-8.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Front</span>
                                    <h4><a href="/shop-details">Toyota Starlet EP-82 HEAD Lights</a></h4>
                                    <h5><del>$100.99</del>$90.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(3)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="popular-product">Popular</span>
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-9.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-9.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Fuel</span>
                                    <h4><a href="/shop-details">Advance 10w30 full synthetic fuel</a></h4>
                                    <h5>$85.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(2)</span></li>
                                    </ul>
                                    <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-10.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-10.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Wheel</span>
                                    <h4><a href="/shop-details">14" Urban X Phantom Wheel Cover Set </a></h4>
                                    <h5>$80.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-11.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-11.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Wheel</span>
                                    <h4><a href="/shop-details">Set of four 14" wheel trims made from</a></h4>
                                    <h5><del>$92.99</del>$83.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-12.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-12.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Brake</span>
                                    <h4><a href="/shop-details">BMW 740 Series best brake pad</a></h4>
                                    <h5><del>$100.99</del>$90.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="discount-product">New</span>
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-13.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-13.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Filter</span>
                                    <h4><a href="/shop-details">Fuel Filter Nitro Engine Parts</a></h4>
                                    <h5>$85.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="hot-product">Sale</span>
                                    <ul class="option-list">
                                        <li><a href="assets/images/shop/shop-14.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-14.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Keys</span>
                                    <h4><a href="/shop-details">Car Remote Key for Xhorse XKTO10EN</a></h4>
                                    <h5>$80.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(3)</span></li>
                                    </ul>
                                    <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end -->


        <!-- apps-section -->
        <section class="apps-section pb_90">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="bg-layer" style="background-image: url(assets/images/background/apps-bg.jpg);"></div>
                    <figure class="image-layer"><img src="assets/images/resource/mockup-1.png" alt=""></figure>
                    <div class="content-box">
                        <h2>Download Mobile App for your device</h2>
                        <p>Make sure to download apps only from official app stores to ensure the security of your device.</p>
                        <div class="download-btn">
                            <a href="/" class="apple-store mr_20">
                                <i class="fab fa-apple"></i>
                                <span>Download on</span>
                                App Store
                            </a>
                            <a href="/" class="apple-store">
                                <i class="fab fa-google-play"></i>
                                <span>Get it on</span>
                                Google Play
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- apps-section end -->


        <!-- shop-style-two -->
        <section class="shop-style-two pb_70">
            <div class="pattern-layer">
                <div class="pattern-1" style="background-image: url(assets/images/shape/shape-4.png);"></div>
                <div class="pattern-2" style="background-image: url(assets/images/shape/shape-5.png);"></div>
            </div>
            <div class="auto-container">
                <div class="sortable-masonry">
                    <div class="title-box mb_30">
                        <div class="sec-title">
                            <h2>Latest Products</h2>
                        </div>
                        <ul class="filter-tabs filter-btns clearfix">
                            <li class="active filter" data-role="button" data-filter=".all">All</li>
                            <li class="filter" data-role="button" data-filter=".cat-1">Brake</li>
                            <li class="filter" data-role="button" data-filter=".cat-2">Wheel</li>
                            <li class="filter" data-role="button" data-filter=".cat-3">Fuel</li>
                            <li class="filter" data-role="button" data-filter=".cat-4">Lights</li>
                            <li class="filter" data-role="button" data-filter=".cat-5">Filter</li>
                            <li class="filter" data-role="button" data-filter=".cat-6">Key</li>
                            <li class="filter" data-role="button" data-filter=".cat-7">Battery</li>
                        </ul>
                    </div>
                    <div class="inner-container">
                        <div class="items-container row clearfix">
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-1 cat-3 cat-5 cat-7 cat-4">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="discount-product">New</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-15.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-15.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-5">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="hot-product">Sale</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-16.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-16.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-1 cat-3 cat-5 cat-7">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="popular-product">Popular</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-17.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-17.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="hot-product">Sale</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-18.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-18.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-1 cat-3 cat-5 cat-7 cat-4">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="popular-product">Popular</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-19.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-19.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-20.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-20.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-1 cat-3 cat-5 cat-7">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="discount-product">New</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-21.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-21.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                                <div class="shop-block-two">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <span class="popular-product">Popular</span>
                                            <ul class="option-list">
                                                <li><a href="assets/images/shop/shop-22.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-22.png" alt=""></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6><a href="/shop-details">Super Bright Halogen Bulbs</a></h6>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(5)</span></li>
                                            </ul>
                                            <h5>$83.99</h5>
                                            <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-style-two end -->


        <!-- news-section -->
        <section class="news-section pb_65">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Latest News</h2>
                    <a href="/blog">View All News</a>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""></a></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="category">Analytics</span>
                                    <h3><a href="/blog-details">2024 Dodge Durango SRT 392 AlcHEMI Marks the End</a></h3>
                                    <ul class="post-info">
                                        <li>By <a href="/blog-details">Alex Beniwal</a></li>
                                        <li>March 20, 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""></a></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="category">Car Parts</span>
                                    <h3><a href="/blog-details">Gooloo Battery Jumpers For Sale at Buy Auto Parts</a></h3>
                                    <ul class="post-info">
                                        <li>By <a href="/blog-details">Adam Smith</a></li>
                                        <li>March 10, 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-3.jpg" alt=""></a></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="category">Car Fuel</span>
                                    <h3><a href="/blog-details">You can travel at your own pace in a car</a></h3>
                                    <ul class="post-info">
                                        <li>By <a href="/blog-details">Jos Butlar</a></li>
                                        <li>March 18, 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- news-section end -->


        <!-- highlights-section -->
        <section class="highlights-section pt_35 pb_5">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6 col-sm-12 single-column">
                        <div class="single-item">
                            <div class="icon-box"><i class="icon-14"></i></div>
                            <h5>100% Customer Satisfaction</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 single-column">
                        <div class="single-item">
                            <div class="icon-box"><i class="icon-15"></i></div>
                            <h5>Help and access is our mission</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 single-column">
                        <div class="single-item">
                            <div class="icon-box"><i class="icon-16"></i></div>
                            <h5>100% quality Car Accessories</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 single-column">
                        <div class="single-item">
                            <div class="icon-box"><i class="icon-17"></i></div>
                            <h5>24/7 Support for Clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- highlights-section end -->


        



        <!--Scroll to top-->
        <div class="scroll-to-top">
            <div>
                <div class="scroll-top-inner">
                    <div class="scroll-bar">
                        <div class="bar-inner"></div>
                    </div>
                    <div class="scroll-bar-text">Go To Top</div>
                </div>
            </div>
        </div>
        <!-- Scroll to top end -->
        
    </div>


    <!-- jequery plugins -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/validation.js"></script>
    <script src="assets/js/jquery.fancybox.js"></script>
    <script src="assets/js/appear.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/parallax-scroll.js"></script>
    <script src="assets/js/jquery.nice-select.min.js"></script>
    <script src="assets/js/language.js"></script>
    <script src="assets/js/countdown.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/lenis.min.js"></script>
    <script src="assets/js/aos.js"></script>

    <!-- main-js -->
    <script src="assets/js/script.js"></script>


`}} />
  );
}
