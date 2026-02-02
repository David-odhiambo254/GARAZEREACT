import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Index3(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page index3" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- banner-style-three -->
        <section class="banner-style-three p_relative">
            <div class="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">
                <div class="slide-item p_relative">
                    <div class="bg-layer" style="background-image: url(assets/images/shape/shape-7.png);"></div>
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div class="content-box p_relative d_block z_5">
                                    <span class="upper-text">Engine</span>
                                    <h2 class="p_relative d_block">Get All Original Parts for Your Car</h2>
                                    <h3>From <span>$83.99</span></h3>
                                    <div class="btn-box">
                                        <a href="/" class="theme-btn">Read More<span></span><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <figure class="image clearfix"><img src="assets/images/banner/banner-img-7.png" alt=""></figure>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="slide-item p_relative">
                    <div class="bg-layer" style="background-image: url(assets/images/shape/shape-8.png);"></div>
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div class="content-box p_relative d_block z_5">
                                    <span class="upper-text">Engine</span>
                                    <h2 class="p_relative d_block">Get All Original Parts for Your Car</h2>
                                    <h3>From <span>$83.99</span></h3>
                                    <div class="btn-box">
                                        <a href="/" class="theme-btn">Read More<span></span><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <figure class="image clearfix"><img src="assets/images/banner/banner-img-8.png" alt=""></figure>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <!-- banner-style-three end -->


        <!-- search-section -->
        <section class="search-section">
            <div class="outer-container">
                <form method="post" action="shop.html" class="clearfix">
                    <div class="form-group">
                        <div class="select-box">
                            <select class="wide">
                               <option data-display="Select Year">Select Year</option>
                               <option value="1">2021</option>
                               <option value="2">2022</option>
                               <option value="3">2023</option>
                               <option value="4">2024</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="select-box">
                            <select class="wide">
                               <option data-display="Select Brand">Select Brand</option>
                               <option value="1">Audi</option>
                               <option value="2">BMW</option>
                               <option value="3">Mercedes Benz</option>
                               <option value="4">Tesla Motors</option>
                               <option value="5">Volkswagen</option>
                               <option value="6">Porsche</option>
                               <option value="7">Hyundai</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="select-box">
                            <select class="wide">
                               <option data-display="Car Model">Car Model</option>
                               <option value="1">2021</option>
                               <option value="2">2022</option>
                               <option value="3">2023</option>
                               <option value="4">2024</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="select-box">
                            <select class="wide">
                               <option data-display="Select Engine">Select Engine</option>
                               <option value="1">1000 cc</option>
                               <option value="2">1500 cc</option>
                               <option value="3">2000 cc</option>
                               <option value="4">3000 cc</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="select-box">
                            <select class="wide">
                               <option data-display="Fuel Type">Fuel Type</option>
                               <option value="1">Diesel</option>
                               <option value="2">Biodiesel</option>
                               <option value="3">Gasoline</option>
                               <option value="4">Ethanol</option>
                               <option value="5">Natural gas</option>
                               <option value="6">Octane gasoline</option>
                               <option value="7">Lpg</option>
                            </select>
                        </div>
                    </div>
                    <div class="message-btn">
                        <button type="submit" class="theme-btn">Search Part<span></span><span></span><span></span><span></span></button>
                    </div>
                </form>
            </div>
        </section>
        <!-- search-section end -->


        <!-- category-section -->
        <section class="category-section pt_90 pb_70">
            <div class="large-container">
                <div class="sec-title mb_30">
                    <h2>Popular Categories</h2>
                    <a href="/">View All Category</a>
                </div>
                <div class="inner-container">
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
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-13.png" alt=""></figure>
                            <h4><a href="/">Oil Filters</a></h4>
                            <span class="text">5 items</span>
                        </div>
                    </div>
                    <div class="category-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/category-14.png" alt=""></figure>
                            <h4><a href="/">Wheel Rims</a></h4>
                            <span class="text">9 items</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- category-section end -->


        <!-- feature-section -->
        <section class="feature-section home-3 pb_70">
            <div class="large-container">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one">
                            <div class="inner-box">
                                <span class="text">Only for this month</span>
                                <h2><a href="/shop-details">Buy the Tires</a></h2>
                                <h4>From $99.99</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-5.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one">
                            <div class="inner-box">
                                <span class="text hot">Hot Sale</span>
                                <h2><a href="/shop-details">Premium oils</a></h2>
                                <h4 class="discount">Up to 35% Off</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-6.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one">
                            <div class="inner-box">
                                <span class="hot-product">Stock Clear</span>
                                <h2><a href="/shop-details">Cheap Brakes</a></h2>
                                <h4>From $23.99</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-7.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- feature-section end -->


        <!-- shop-section -->
        <section class="shop-section home-3-1 pb_90">
            <div class="large-container">
                <div class="inner-container">
                    <div class="ads-box">
                        <span class="text">Car Wheel</span>
                        <h3><a href="/shop-details">Get Branded Rims</a></h3>
                        <a href="/shop-details" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                        <figure class="image"><img src="assets/images/shop/shop-6.png" alt=""></figure>
                    </div>
                    <div class="content-box">
                        <div class="shop-carousel-2 owl-carousel owl-theme owl-dots-none owl-nav-none">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-26.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-26.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Outdoor</span>
                                        <h4><a href="/shop-details">17-Inch Performance Car Rims</a></h4>
                                        <h5><del>$92.99</del>$83.99</h5>
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
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Hot</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-27.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-27.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Outdoor</span>
                                        <h4><a href="/shop-details">Desinged for the best wheel Rim</a></h4>
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
                                        <div class="overlay-content">
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-28.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-28.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Outdoor</span>
                                        <h4><a href="/shop-details">White Car Rims Unleash the Power</a></h4>
                                        <h5>$85.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4.5)</span></li>
                                        </ul>
                                        <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                        <div class="overlay-content">
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-29.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-29.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">14" Urban X Phantom Wheel Rim Cover Set</a></h4>
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
                                        <div class="overlay-content">
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-30.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-30.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">Hyper Silver Alloy Wheels for Stylish</a></h4>
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
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end -->


        <!-- flash-sales-section -->
        <section class="flash-sales-section pb_70">
            <div class="large-container">
                <div class="sec-title mb_30">
                    <h2>Hot Deals</h2>
                    <a href="/index-2">View All Products</a>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-7.png" alt=""></figure>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-8.png" alt=""></figure>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-9.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Complete Front and Rear</a></h6>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-10.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Frameless Glass Car Door</a></h6>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-11.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Turbocharged Engine</a></h6>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-12.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Suspension Strut Assembly</a></h6>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-13.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Engine Air Filter Replace</a></h6>
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
                                        <li>Up to 200MB/s Transfer</li>
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
                    <div class="col-lg-3 col-md-6 col-sm-12 sales-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list">
                                        <li><button type="button"><i class="icon-6"></i></button></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/resource/sales-14.png" alt=""></figure>
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
                                        <li>Up to 200MB/s Transfer</li>
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


        <!-- shop-section -->
        <section class="shop-section home-3-2 pb_80">
            <div class="large-container">
                <div class="inner-container">
                    <div class="ads-box">
                        <span class="text">Car Steering</span>
                        <h3><a href="/shop-details">Premium Steerings</a></h3>
                        <a href="/shop-details" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                        <figure class="image"><img src="assets/images/shop/shop-31.png" alt=""></figure>
                    </div>
                    <div class="content-box">
                        <div class="shop-carousel-2 owl-carousel owl-theme owl-dots-none owl-nav-none">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-32.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-32.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Interior</span>
                                        <h4><a href="/shop-details">Premium 3-Spoke Car Steering Wheel</a></h4>
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
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Hot</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-33.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-33.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Interior</span>
                                        <h4><a href="/shop-details">Carbon Fiber High Performance Racing</a></h4>
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
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-34.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-34.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Interior</span>
                                        <h4><a href="/shop-details">Classic Wooden Car Steering Wheel</a></h4>
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
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-35.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-35.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">Luxury Leather  Steering Upgrade</a></h4>
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
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-36.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-36.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">Smart Touchscreen Car Steering Control</a></h4>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end -->


        <!-- shop-section -->
        <section class="shop-section home-3-3 pb_90">
            <div class="large-container">
                <div class="inner-container">
                    <div class="ads-box">
                        <span class="text">Car Steering</span>
                        <h3><a href="/shop-details">Premium Steerings</a></h3>
                        <a href="/shop-details" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                        <figure class="image"><img src="assets/images/shop/shop-37.png" alt=""></figure>
                    </div>
                    <div class="content-box">
                        <div class="shop-carousel-2 owl-carousel owl-theme owl-dots-none owl-nav-none">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-38.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-38.png" alt=""></figure>
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
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Hot</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-39.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-39.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Fuel</span>
                                        <h4><a href="/shop-details">High-Performance Brake Kit for Your Car</a></h4>
                                        <h5><del>$100.99</del>$90.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4)</span></li>
                                        </ul>
                                        <span class="product-stock"><i class="icon-40"></i>In Stock</span>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-40.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-40.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Fuel</span>
                                        <h4><a href="/shop-details">Sporty Brake System for Enhanced</a></h4>
                                        <h5>$85.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4.5)</span></li>
                                        </ul>
                                        <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">6% Off</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-41.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-41.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">Ensure Safe Stops with Power</a></h4>
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
                                    </div>
                                </div>
                            </div>
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-42.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-42.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Wheel</span>
                                        <h4><a href="/shop-details">High-Performance Brake Disc and Pad </a></h4>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end -->


        <!-- shop-section -->
        <section class="shop-section home-3-4 pt_70 pb_80">
            <div class="large-container">
                <div class="sortable-masonry">
                    <div class="title-box mb_30">
                        <div class="sec-title">
                            <h2>Today’s popular picks</h2>
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
                    <div class="items-container clearfix">
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7 cat-4">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="popular-product">Popular</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-43.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-43.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Engine</span>
                                        <h4><a href="/shop-details">High-Performance Coilover Suspension</a></h4>
                                        <h5>$25.99</h5>
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
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-5">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">New</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-44.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-44.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Interior</span>
                                        <h4><a href="/shop-details">Projector Style Headlights Enhance </a></h4>
                                        <h5><del>$92.99</del>$90.99</h5>
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
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-45.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-45.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Interior</span>
                                        <h4><a href="/shop-details">Premium Leather Car Key Holder Stylish</a></h4>
                                        <h5>$183.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4)</span></li>
                                        </ul>
                                        <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                        <div class="overlay-content">
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Sale</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-46.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-46.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Front</span>
                                        <h4><a href="/shop-details">Aluminum Manual Transmission Gear </a></h4>
                                        <h5><del>$102.99</del> $100.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                        <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                        <div class="overlay-content">
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7 cat-4">
                            <div class="shop-block-one">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Sale</span>
                                        <ul class="option-list-two">
                                            <li><a href="assets/images/shop/shop-47.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-47.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <span class="text">Front</span>
                                        <h4><a href="/shop-details">Halogen Headlight Replacement Set</a></h4>
                                        <h5>$80.99</h5>
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
                                            <div class="progress-box mb_20">
                                                <div class="bar mb_10">
                                                    <div class="bar-inner count-bar" data-percent="60%"></div>
                                                </div>
                                                <p>Available: <span>60%</span></p>
                                            </div>
                                            <div class="item-quantity mb_10">
                                                <input class="quantity-spinner" type="text" value="1" name="quantity">
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end --> 


        <!-- apps-section -->
        <section class="apps-section alternat-2 pt_80 pb_80">
            <div class="large-container">
                <div class="row clearfix">
                    <div class="col-lg-9 col-md-12 col-sm-12 content-column">
                        <div class="inner-container">
                            <div class="bg-layer" style="background-image: url(assets/images/background/apps-bg-2.jpg);"></div>
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
                    <div class="col-lg-3 col-md-12 col-sm-12 ads-column">
                        <div class="ads-box">
                            <span class="text">Car Wheel</span>
                            <h3><a href="/shop-details">Get Tires & Rims</a></h3>
                            <a href="/shop" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                            <figure class="image"><img src="assets/images/shop/shop-25.png" alt=""></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- apps-section end -->


        <!-- shop-section -->
        <section class="shop-section home-3-5 alternat-2 pb_100">
            <div class="large-container">
                <div class="inner-container">
                    <div class="ads-box">
                        <div class="bg-layer" style="background-image: url(assets/images/resource/ads-1.jpg);"></div>
                        <h2>-40%</h2>
                        <h4>Only This Week</h4>
                        <p>Fulfill your automotive fantasies without breaking the bank.</p>
                        <a href="/" class="theme-btn">View Products<span></span><span></span><span></span><span></span></a>
                    </div>
                    <div class="content-box clearfix">
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="discount-product">6% Off</span>
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-48.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-48.png" alt=""></figure>
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
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="overlay-content">
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="hot-product">Hot</span>
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-49.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-49.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Interior</span>
                                    <h4><a href="/shop-details">High-Performance Racing Clutch Kit</a></h4>
                                    <h5><del>$92.99</del>$83.99</h5>
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
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-50.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-50.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Brake</span>
                                    <h4><a href="/shop-details">Carbon Fiber Reinforced Brake Pad</a></h4>
                                    <h5>$33.99</h5>
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
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-51.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-51.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Light</span>
                                    <h4><a href="/shop-details">Ultra-Bright LED Headlight Bulbs</a></h4>
                                    <h5>$90.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(3)</span></li>
                                    </ul>
                                    <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                    <div class="overlay-content">
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="popular-product">Popular</span>
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-52.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-52.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Wheel</span>
                                    <h4><a href="/shop-details">Classic Alloy Wheels Timeless Elegance for</a></h4>
                                    <h5><del>$90.30</del> $85.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(2)</span></li>
                                    </ul>
                                    <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                    <div class="overlay-content">
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-53.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-53.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Wheel</span>
                                    <h4><a href="/shop-details">Remanufactured Diesel Engine</a></h4>
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
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-54.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-54.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Wheel</span>
                                    <h4><a href="/shop-details">Race-Ready Precision Carbon Fiber</a></h4>
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
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-55.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-55.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Brake</span>
                                    <h4><a href="/shop-details">Heavy Duty Portable Tool Box</a></h4>
                                    <h5><del>$45.99</del>$46.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                    <div class="overlay-content">
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-56.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-56.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Filter</span>
                                    <h4><a href="/shop-details">Oxygen Sensor Replacement</a></h4>
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
                                    <div class="overlay-content">
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <span class="hot-product">Sale</span>
                                    <ul class="option-list-two">
                                        <li><a href="assets/images/shop/shop-57.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                        <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                        <li><button type="button"><i class="icon-7"></i></button></li>
                                    </ul>
                                    <figure class="image"><img src="assets/images/shop/shop-57.png" alt=""></figure>
                                </div>
                                <div class="lower-content">
                                    <span class="text">Keys</span>
                                    <h4><a href="/shop-details">Alternator Maintain a Healthy Charging</a></h4>
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
                                    <div class="overlay-content">
                                        <div class="progress-box mb_20">
                                            <div class="bar mb_10">
                                                <div class="bar-inner count-bar" data-percent="60%"></div>
                                            </div>
                                            <p>Available: <span>60%</span></p>
                                        </div>
                                        <div class="item-quantity mb_10">
                                            <input class="quantity-spinner" type="text" value="1" name="quantity">
                                        </div>
                                        <div class="btn-box">
                                            <button type="button" class="theme-btn">Add to Cart<span></span><span></span><span></span><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-section end -->


        <!-- shop-style-two -->
        <section class="shop-style-two home-3 pb_70">
            <div class="large-container">
                <div class="sortable-masonry">
                    <div class="title-box mb_30">
                        <div class="sec-title">
                            <h2>Top Sold Products</h2>
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
                    <div class="items-container clearfix">
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7 cat-4">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">New</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-58.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-58.png" alt=""></figure>
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
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-5">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Sale</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-59.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-59.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Car LED Strip LED Headlight</a></h6>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <h5>$60.99</h5>
                                        <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="popular-product">Popular</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-60.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-60.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Dynamic Omuda Key Ring</a></h6>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4)</span></li>
                                        </ul>
                                        <h5>$83.99</h5>
                                        <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Sale</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-61.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-61.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Separator Catch Can Filter</a></h6>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <h5><del>$90.00</del> $83.99</h5>
                                        <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7 cat-4">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="hot-product">Sale</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-62.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-62.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Separator Catch Can Filter</a></h6>
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
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="popular-product">Popular</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-63.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-63.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Passenger Car Engine Oil</a></h6>
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
                        <div class="masonry-item small-column all cat-1 cat-3 cat-5 cat-7">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-64.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-64.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Car wheel best bumper</a></h6>
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
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount-product">New</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-65.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-65.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Fusion Charging Cable</a></h6>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <h5>$44.99</h5>
                                        <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="popular-product">Popular</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-66.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-66.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Air Filter Intake Induction Kit</a></h6>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <h5>$34.99</h5>
                                        <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="masonry-item small-column all cat-2 cat-4 cat-6 cat-7 cat-3">
                            <div class="shop-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="popular-product">Popular</span>
                                        <ul class="option-list">
                                            <li><a href="assets/images/shop/shop-67.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                        </ul>
                                        <figure class="image"><img src="assets/images/shop/shop-67.png" alt=""></figure>
                                    </div>
                                    <div class="content-box">
                                        <h6><a href="/shop-details">Air Filter Intake Induction Kit</a></h6>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(5)</span></li>
                                        </ul>
                                        <h5>$99.99</h5>
                                        <div class="cart-btn"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-style-two end -->


        <!-- instagram-section -->
        <section class="instagram-section">
            <div class="outer-container">
                <div class="instagram-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <div class="instagram-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/instagram-1.jpg" alt=""></figure>
                            <div class="text-box">
                                <a href="/index-3"><img src="assets/images/icons/icon-1.png" alt="">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/instagram-2.jpg" alt=""></figure>
                            <div class="text-box">
                                <a href="/index-3"><img src="assets/images/icons/icon-1.png" alt="">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/instagram-3.jpg" alt=""></figure>
                            <div class="text-box">
                                <a href="/index-3"><img src="assets/images/icons/icon-1.png" alt="">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/instagram-4.jpg" alt=""></figure>
                            <div class="text-box">
                                <a href="/index-3"><img src="assets/images/icons/icon-1.png" alt="">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/instagram-5.jpg" alt=""></figure>
                            <div class="text-box">
                                <a href="/index-3"><img src="assets/images/icons/icon-1.png" alt="">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-block-one">
                        <div class="inner-box">
                            <figure class="image-box"><img src="assets/images/resource/instagram-6.jpg" alt=""></figure>
                            <div class="text-box">
                                <a href="/index-3"><img src="assets/images/icons/icon-1.png" alt="">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- instagram-section end -->


        



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
    <script src="assets/js/jquery.bootstrap-touchspin.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/lenis.min.js"></script>
    <script src="assets/js/aos.js"></script>

    <!-- main-js -->
    <script src="assets/js/script.js"></script>


`}} />
  );
}
