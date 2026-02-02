import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Index2(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page index2" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- banner-style-two -->
        <section class="banner-style-two pt_60 pb_70 p_relative">
            <div class="pattern-layer" style="background-image: url(assets/images/shape/shape-6.png);"></div>
            <div class="auto-container">
                <div class="inner-container">
                    <div class="row clearfix">
                        <div class="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div class="content-one content-box">
                                <div class="inner-box">
                                    <span class="popular-product">New Brand</span>
                                    <h2>Get all Original Auto Parts</h2>
                                    <h3>From <span>$83.99</span></h3>
                                    <a href="/contact" class="theme-btn">Get in Touch<span></span><span></span><span></span><span></span></a>
                                </div>
                                <figure class="image"><img src="assets/images/banner/banner-img-4.png" alt=""></figure>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div class="content-two content-box">
                                <div class="inner-box">
                                    <h2>Get the Brakes</h2>
                                    <h4>From $83.99</h4>
                                    <a href="/shop" class="theme-btn">Shop now<span></span><span></span><span></span><span></span></a>
                                </div>
                                <figure class="image"><img src="assets/images/banner/banner-img-5.png" alt=""></figure>
                            </div>
                            <div class="content-three content-box">
                                <div class="inner-box">
                                    <span class="popular-product">Super Sale</span>
                                    <h2>Premium <span>oils</span></h2>
                                    <h4>From <span>$83.99</span></h4>
                                    <div class="timer">
                                        <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                    </div>
                                </div>
                                <figure class="image"><img src="assets/images/banner/banner-img-6.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner-style-two end -->


        <!-- brand-section -->
        <section class="brand-section pb_90">
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


        <!-- highlights-style-two -->
        <section class="highlights-style-two centred pb_55">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div class="highlights-block-one">
                            <div class="inner-box">
                                <div class="icon-box"><i class="icon-22"></i></div>
                                <h3>Free Shipping</h3>
                                <p>Include information about free shipping in your email campaigns to keep existing customers informed and attract new ones.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div class="highlights-block-one">
                            <div class="inner-box">
                                <div class="icon-box"><i class="icon-24"></i></div>
                                <h3>Earn Points</h3>
                                <p>Include information about free shipping in your email campaigns to keep existing customers informed and attract new ones.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div class="highlights-block-one">
                            <div class="inner-box">
                                <div class="icon-box"><i class="icon-23"></i></div>
                                <h3>Money Back Guarantee</h3>
                                <p>Include information about free shipping in your email campaigns to keep existing customers informed and attract new ones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- highlights-style-two end -->


        <!-- shop-style-two -->
        <section class="shop-style-two pb_100">
            <div class="auto-container">
                <div class="sec-title mb_35">
                    <h2>Today’s popular picks</h2>
                </div>
                <div class="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                    <div class="shop-block-one">
                        <div class="inner-box">
                            <div class="image-box">
                                <span class="discount-product">6% Off</span>
                                <ul class="option-list-two">
                                    <li><a href="assets/images/shop/shop-5.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                    <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                    <li><button type="button"><i class="icon-7"></i></button></li>
                                </ul>
                                <figure class="image"><img src="assets/images/shop/shop-5.png" alt=""></figure>
                            </div>
                            <div class="lower-content">
                                <span class="text">Wheel</span>
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
                                <div class="overlay-content">
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                        <li>With Bluetooth and Full Touch</li>
                                    </ul>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop-block-one">
                        <div class="inner-box">
                            <div class="image-box">
                                <span class="hot-product">Hot</span>
                                <ul class="option-list-two">
                                    <li><a href="assets/images/shop/shop-2.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                    <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                    <li><button type="button"><i class="icon-7"></i></button></li>
                                </ul>
                                <figure class="image"><img src="assets/images/shop/shop-2.png" alt=""></figure>
                            </div>
                            <div class="lower-content">
                                <span class="text">Interior</span>
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
                                <div class="overlay-content">
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                        <li>With Bluetooth and Full Touch</li>
                                    </ul>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop-block-one">
                        <div class="inner-box">
                            <div class="image-box">
                                <ul class="option-list-two">
                                    <li><a href="assets/images/shop/shop-23.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                    <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                    <li><button type="button"><i class="icon-7"></i></button></li>
                                </ul>
                                <figure class="image"><img src="assets/images/shop/shop-23.png" alt=""></figure>
                            </div>
                            <div class="lower-content">
                                <span class="text">Wheel</span>
                                <h4><a href="/shop-details">Advance 10w30 full synthetic fuel</a></h4>
                                <h5>$85.99</h5>
                                <ul class="rating"> 
                                    <li><i class="icon-41"></i></li>
                                    <li><i class="icon-41"></i></li>
                                    <li><i class="icon-41"></i></li>
                                    <li><i class="icon-41"></i></li>
                                    <li><i class="icon-41"></i></li>
                                    <li><span>(5)</span></li>
                                </ul>
                                <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                <div class="overlay-content">
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                        <li>With Bluetooth and Full Touch</li>
                                    </ul>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop-block-one">
                        <div class="inner-box">
                            <div class="image-box">
                                <ul class="option-list-two">
                                    <li><a href="assets/images/shop/shop-24.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                    <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                    <li><button type="button"><i class="icon-7"></i></button></li>
                                </ul>
                                <figure class="image"><img src="assets/images/shop/shop-24.png" alt=""></figure>
                            </div>
                            <div class="lower-content">
                                <span class="text">Front</span>
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
                                <div class="overlay-content">
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                        <li>With Bluetooth and Full Touch</li>
                                    </ul>
                                    <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-style-two end -->


        <!-- category-style-two -->
        <section class="category-style-two pb_70">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Popular Categories</h2>
                    <a href="/index-2">View All Categories</a>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-5 col-md-12 col-sm-12 ads-column">
                        <div class="feature-block-one">
                            <div class="inner-box">
                                <span class="popular-product mb_20">Best Choice</span>
                                <h2><a href="/shop-details">Buy Engine Oil</a></h2>
                                <h4>From $83.99</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-4.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div class="content-box">
                            <div class="row clearfix">
                                <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                                    <div class="category-block-two">
                                        <div class="inner-box">
                                            <h4><a href="/shop-details">Light & Optics</a></h4>
                                            <span class="text">20 Items</span>
                                            <figure class="image"><img src="assets/images/resource/category-7.png" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                                    <div class="category-block-two">
                                        <div class="inner-box">
                                            <h4><a href="/shop-details">Braking System</a></h4>
                                            <span class="text">12 Items</span>
                                            <figure class="image"><img src="assets/images/resource/category-8.png" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                                    <div class="category-block-two">
                                        <div class="inner-box">
                                            <h4><a href="/shop-details">Car Wheels</a></h4>
                                            <span class="text">30 Items</span>
                                            <figure class="image"><img src="assets/images/resource/category-9.png" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                                    <div class="category-block-two">
                                        <div class="inner-box">
                                            <h4><a href="/shop-details">Exhaust System</a></h4>
                                            <span class="text">10 Items</span>
                                            <figure class="image"><img src="assets/images/resource/category-10.png" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                                    <div class="category-block-two">
                                        <div class="inner-box">
                                            <h4><a href="/shop-details">Cooling System</a></h4>
                                            <span class="text">16 Items</span>
                                            <figure class="image"><img src="assets/images/resource/category-11.png" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                                    <div class="category-block-two">
                                        <div class="inner-box">
                                            <h4><a href="/shop-details">Exterior Parts</a></h4>
                                            <span class="text">08 Items</span>
                                            <figure class="image"><img src="assets/images/resource/category-12.png" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- category-style-two end -->


        <!-- shop-style-two -->
        <section class="shop-style-two pt_110 pb_70">
            <div class="bg-layer" style="background-image: url(assets/images/background/shop-bg.png);"></div>
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


        <!-- flash-sales-section -->
        <section class="flash-sales-section pt_90 pb_70">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Flash Sales</h2>
                    <a href="/index-2">View All Products</a>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-1.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Steel 22 inch Car Wheel Rim</a></h6>
                                    <h5>$483.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lower-box">
                                <div class="timer">
                                    <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                </div>
                                <p>Remain until the end of the offer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-2.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Mercedes Engine oil Filter</a></h6>
                                    <h5>$283.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lower-box">
                                <div class="timer">
                                    <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                </div>
                                <p>Remain until the end of the offer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-3.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Extra Key for Bugatti Chiron</a></h6>
                                    <h5>$53.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4.5)</span></li>
                                    </ul>
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lower-box">
                                <div class="timer">
                                    <div class="cs-countdown" data-countdown="04/06/2024 05:06:59"></div>
                                </div>
                                <p>Remain until the end of the offer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-4.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Black 24 inch Car Wheel Rim</a></h6>
                                    <h5>$353.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lower-box">
                                <div class="timer">
                                    <div class="cs-countdown" data-countdown="05/10/2024 05:06:59"></div>
                                </div>
                                <p>Remain until the end of the offer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-5.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Quick start Battery Pack 12V</a></h6>
                                    <h5>$173.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lower-box">
                                <div class="timer">
                                    <div class="cs-countdown" data-countdown="04/15/2024 05:06:59"></div>
                                </div>
                                <p>Remain until the end of the offer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-6.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Classic 20W-40W Engine oil</a></h6>
                                    <h5>$121.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4.5)</span></li>
                                    </ul>
                                    <ul class="feature-list clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer Speed</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lower-box">
                                <div class="timer">
                                    <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                </div>
                                <p>Remain until the end of the offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- flash-sales-section -->


        <!-- cta-section -->
        <section class="cta-section pb_100">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="bg-layer" style="background-image: url(assets/images/background/cta-bg.jpg);"></div>
                    <div class="content-box">
                        <h2>Elevate Your Drive Authenticity. Get <span>Original Car Parts</span></h2>
                        <p>Fulfill your automotive fantasies without breaking the bank.</p>
                        <a href="/index-2">Get in Touch<i class="icon-27"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta-section end -->


        <!-- shop-section -->
        <section class="shop-section home-2 pb_100">
            <div class="auto-container">
                <div class="sec-title mb_35">
                    <h2>Today’s popular picks</h2>
                </div>
                <div class="inner-container">
                    <div class="ads-box">
                        <span class="text">Get Tires & Rims</span>
                        <h3><a href="/shop-details">Buy the Grills</a></h3>
                        <a href="/shop" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                        <figure class="image"><img src="assets/images/shop/shop-25.png" alt=""></figure>
                    </div>
                    <div class="content-box">
                        <div class="shop-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-2.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
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
                                            <li><a href="assets/images/shop/shop-3.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
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
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-4.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
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
                                            <li><a href="assets/images/shop/shop-5.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
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
                                            <li><span>(2)</span></li>
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


        <!-- testimonial-section -->
        <section class="testimonial-section pb_100">
            <div class="auto-container">
                <div class="sec-title centred mb_30">
                    <h2>Love from Clients</h2>
                </div>
                <div class="three-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                <h4>Floyd Miles</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""></figure>
                                <h4>Cody Fisher</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt=""></figure>
                                <h4>Courtney Henry</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                <h4>Floyd Miles</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""></figure>
                                <h4>Cody Fisher</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt=""></figure>
                                <h4>Courtney Henry</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                <h4>Floyd Miles</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""></figure>
                                <h4>Cody Fisher</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt=""></figure>
                                <h4>Courtney Henry</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                <h4>Floyd Miles</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""></figure>
                                <h4>Cody Fisher</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li><i class="icon-29"></i></li>
                                <li class="light"><i class="icon-29"></i></li>
                            </ul>
                            <p>“Suspendisse est imperdiet pellentesque nulla vulputate eu pharetra pharetra massa amet ac semper et pellentesque dolor tincidunt sodales”</p>
                            <div class="author-box">
                                <figure class="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt=""></figure>
                                <h4>Courtney Henry</h4>
                                <span class="designation">UI Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial-section end -->


        



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
