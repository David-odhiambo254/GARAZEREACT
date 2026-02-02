import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Index4(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page index4" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- banner-style-two -->
        <section class="banner-style-two home-4 pt_60 pb_10 p_relative">
            <div class="pattern-layer" style="background-image: url(assets/images/shape/shape-6.png);"></div>
            <div class="auto-container">
                <div class="inner-container">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div class="content-two content-box">
                                <div class="inner-box">
                                    <h2>Get the Fuel</h2>
                                    <h4>From $83.99</h4>
                                    <a href="/shop" class="theme-btn">Shop now<span></span><span></span><span></span><span></span></a>
                                </div>
                                <figure class="image"><img src="assets/images/banner/banner-img-9.png" alt=""></figure>
                            </div>
                            <div class="content-three content-box">
                                <div class="inner-box">
                                    <span class="popular-product">Super Sale</span>
                                    <h2>Premium <span>Rim</span></h2>
                                    <h4>From <span>$83.99</span></h4>
                                    <div class="timer">
                                        <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                    </div>
                                </div>
                                <figure class="image"><img src="assets/images/banner/banner-img-10.png" alt=""></figure>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div class="content-one content-box">
                                <div class="inner-box">
                                    <span class="popular-product">New Brand</span>
                                    <h2>Get all Original Auto Parts</h2>
                                    <h3>From <span>$83.99</span></h3>
                                    <a href="/contact" class="theme-btn">Get in Touch<span></span><span></span><span></span><span></span></a>
                                </div>
                                <figure class="image"><img src="assets/images/banner/banner-img-11.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner-style-two end -->


        <!-- highlights-section -->
        <section class="highlights-section alternat-2 pb_80">
            <div class="auto-container">
                <div class="inner-container">
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
            </div>
        </section>
        <!-- highlights-section end -->


        <!-- category-style-three -->
        <section class="category-style-three pb_50">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                        <div class="category-block-three">
                            <div class="inner-box">
                                <div class="title-box">
                                    <h4><a href="/index-4">Lights and Optics</a></h4>
                                    <span>20 Products</span>
                                </div>
                                <div class="feature-box">
                                    <ul class="feature-list clearfix mb_25">
                                        <li>Fog Lights</li>
                                        <li>LED Tail Lights</li>
                                        <li>Cornering Lights</li>
                                        <li>Halogen Headlights</li>
                                        <li>Xenon Headlights</li>
                                        <li>Projector Beam</li>
                                    </ul>
                                    <div class="link"><a href="/index-4">View All</a></div>
                                </div>
                                <figure class="image-box"><img src="assets/images/resource/category-15.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                        <div class="category-block-three">
                            <div class="inner-box">
                                <div class="title-box">
                                    <h4><a href="/index-4">Tires and Rims</a></h4>
                                    <span>32 Products</span>
                                </div>
                                <div class="feature-box">
                                    <ul class="feature-list clearfix mb_25">
                                        <li>Winter Tires</li>
                                        <li>Performance Tires</li>
                                        <li>Touring Tires</li>
                                        <li>Off-Road Tires</li>
                                        <li>Run-Flat Tires</li>
                                        <li>Mud-Terrain Tires</li>
                                    </ul>
                                    <div class="link"><a href="/index-4">View All</a></div>
                                </div>
                                <figure class="image-box"><img src="assets/images/resource/category-16.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                        <div class="category-block-three">
                            <div class="inner-box">
                                <div class="title-box">
                                    <h4><a href="/index-4">Braking System</a></h4>
                                    <span>14 Products</span>
                                </div>
                                <div class="feature-box">
                                    <ul class="feature-list clearfix mb_25">
                                        <li>Brake Pads</li>
                                        <li>Brake Rotors (Discs)</li>
                                        <li>Brake Calipers</li>
                                        <li>Brake Lines</li>
                                        <li>Brake Cylinder</li>
                                        <li>Brake Booster</li>
                                    </ul>
                                    <div class="link"><a href="/index-4">View All</a></div>
                                </div>
                                <figure class="image-box"><img src="assets/images/resource/category-17.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                        <div class="category-block-three">
                            <div class="inner-box">
                                <div class="title-box">
                                    <h4><a href="/index-4">Engine Spares</a></h4>
                                    <span>25 Products</span>
                                </div>
                                <div class="feature-box">
                                    <ul class="feature-list clearfix mb_25">
                                        <li>Serpentine Belt</li>
                                        <li>Water Pump</li>
                                        <li>Thermostat</li>
                                        <li>Ignition Coil</li>
                                        <li>Timing Belt</li>
                                        <li>Oxygen Sensor</li>
                                    </ul>
                                    <div class="link"><a href="/index-4">View All</a></div>
                                </div>
                                <figure class="image-box"><img src="assets/images/resource/category-18.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                        <div class="category-block-three">
                            <div class="inner-box">
                                <div class="title-box">
                                    <h4><a href="/index-4">Steering Dashboard</a></h4>
                                    <span>12 Products</span>
                                </div>
                                <div class="feature-box">
                                    <ul class="feature-list clearfix mb_25">
                                        <li>Instrument Cluster</li>
                                        <li>Speedometer</li>
                                        <li>Tachometer</li>
                                        <li>Fuel Gauge</li>
                                        <li>Temperature Gauge</li>
                                        <li>Odometer</li>
                                    </ul>
                                    <div class="link"><a href="/index-4">View All</a></div>
                                </div>
                                <figure class="image-box"><img src="assets/images/resource/category-19.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 category-block">
                        <div class="category-block-three">
                            <div class="inner-box">
                                <div class="title-box">
                                    <h4><a href="/index-4">Engine Oil and Fuel</a></h4>
                                    <span>22 Products</span>
                                </div>
                                <div class="feature-box">
                                    <ul class="feature-list clearfix mb_25">
                                        <li>Unleaded Gasoline</li>
                                        <li>Diesel Fuel</li>
                                        <li>E85 (Ethanol Fuel)</li>
                                        <li>0W-20 Engine Oil</li>
                                        <li>5W-30 Engine Oil</li>
                                        <li>10W-40 Engine Oil</li>
                                    </ul>
                                    <div class="link"><a href="/index-4">View All</a></div>
                                </div>
                                <figure class="image-box"><img src="assets/images/resource/category-20.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- category-style-three end -->


        <!-- cta-style-two -->
        <section class="cta-style-two pb_90">
            <div class="auto-container">
                <div class="inner-container">
                    <figure class="image-layer"><img src="assets/images/resource/cta-1.png" alt=""></figure>
                    <div class="content-box">
                        <span class="text">Engine Oil</span>
                        <h2>Elevate Your Drive Authenticity. Get <span>Original Car Parts</span></h2>
                        <p>Fulfill your automotive fantasies without breaking the bank.</p>
                        <a href="/index-4" class="theme-btn">Get All Deals <span></span><span></span><span></span><span></span></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta-style-two end -->


        <!-- flash-sales-two -->
        <section class="flash-sales-two pb_80">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Greatest Flash Sale</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-12 col-sm-12 ads-column">
                        <div class="ads-box">
                            <span class="text">Brake Plates</span>
                            <h3><a href="/shop-details">Hydraulic Brakes</a></h3>
                            <a href="/shop-details" class="theme-btn">View All <span></span><span></span><span></span><span></span></a>
                            <figure class="image"><img src="assets/images/shop/shop-68.png" alt=""></figure>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12 col-sm-12 content-column">
                        <div class="content-box">
                            <div class="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                                <div class="shop-block-one">
                                    <div class="inner-box">
                                        <div class="timer mb_20">
                                            <p>Sale ends in</p>
                                            <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                        </div>
                                        <div class="image-box">
                                            <ul class="option-list">
                                                <li><button type="button"><i class="icon-6"></i><span>Add to Cart</span></button></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-69.png" alt=""></figure>
                                        </div>
                                        <div class="lower-content">
                                            <span class="text">Interior</span>
                                            <h4><a href="/shop-details">Premium 3-Spoke Car Steering Wheel</a></h4>
                                            <h5>$90.99</h5>
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
                                        <div class="timer mb_20">
                                            <p>Sale ends in</p>
                                            <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                        </div>
                                        <div class="image-box">
                                            <ul class="option-list">
                                                <li><button type="button"><i class="icon-6"></i><span>Add to Cart</span></button></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-70.png" alt=""></figure>
                                        </div>
                                        <div class="lower-content">
                                            <span class="text">Wheel</span>
                                            <h4><a href="/shop-details">14" Urban X Phantom Wheel Cover Set </a></h4>
                                            <h5>$55.00</h5>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                            <span class="product-stock red"><i class="icon-40"></i>Stock Out</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-block-one">
                                    <div class="inner-box">
                                        <div class="timer mb_20">
                                            <p>Sale ends in</p>
                                            <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                        </div>
                                        <div class="image-box">
                                            <ul class="option-list">
                                                <li><button type="button"><i class="icon-6"></i><span>Add to Cart</span></button></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-71.png" alt=""></figure>
                                        </div>
                                        <div class="lower-content">
                                            <span class="text">Wheel</span>
                                            <h4><a href="/shop-details">Ensure Safe Stops with Power</a></h4>
                                            <h5>$70.99</h5>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(4.5)</span></li>
                                            </ul>
                                            <span class="product-stock"><i class="icon-39"></i>In Stock</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-block-one">
                                    <div class="inner-box">
                                        <div class="timer mb_20">
                                            <p>Sale ends in</p>
                                            <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                        </div>
                                        <div class="image-box">
                                            <ul class="option-list">
                                                <li><button type="button"><i class="icon-6"></i><span>Add to Cart</span></button></li>
                                                <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                <li><button type="button"><i class="icon-7"></i></button></li>
                                            </ul>
                                            <figure class="image"><img src="assets/images/shop/shop-72.png" alt=""></figure>
                                        </div>
                                        <div class="lower-content">
                                            <span class="text">Filter</span>
                                            <h4><a href="/shop-details">Air Filter Intake Induction kit</a></h4>
                                            <h5>$23.99</h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- flash-sales-two end -->


        <!-- deals-style-two -->
        <section class="deals-style-two pt_75 pb_50">
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Today’s Best Deal</h2>
                    <a href="/index-4">View All Deals</a>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 deals-block">
                        <div class="deals-block-two block-one">
                            <div class="inner-box">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <div class="bxslider">
                                            <div class="slider-content">
                                                <div class="image-inner">
                                                    <div class="image-box">
                                                        <span class="discount">-6%</span>
                                                        <ul class="option-list">
                                                            <li><a href="assets/images/shop/shop-73.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                                        </ul>
                                                        <figure class="image"><img src="assets/images/shop/shop-73.png" alt=""></figure>
                                                    </div>
                                                    <div class="slider-pager">
                                                        <ul class="thumb-box">
                                                            <li>
                                                                <a class="active" data-slide-index="0" href="#"><figure><img src="assets/images/shop/thumb-1.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="1" href="#"><figure><img src="assets/images/shop/thumb-2.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="2" href="#"><figure><img src="assets/images/shop/thumb-3.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="3" href="#"><figure><img src="assets/images/shop/thumb-4.png" alt=""></figure></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="slider-content">
                                                <div class="image-inner">
                                                    <div class="image-box">
                                                        <span class="discount">-6%</span>
                                                        <ul class="option-list">
                                                            <li><a href="assets/images/shop/shop-73.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                                        </ul>
                                                        <figure class="image"><img src="assets/images/shop/shop-73.png" alt=""></figure>
                                                    </div>
                                                    <div class="slider-pager">
                                                        <ul class="thumb-box">
                                                            <li>
                                                                <a class="active" data-slide-index="0" href="#"><figure><img src="assets/images/shop/thumb-1.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="1" href="#"><figure><img src="assets/images/shop/thumb-2.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="2" href="#"><figure><img src="assets/images/shop/thumb-3.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="3" href="#"><figure><img src="assets/images/shop/thumb-4.png" alt=""></figure></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="slider-content">
                                                <div class="image-inner">
                                                    <div class="image-box">
                                                        <span class="discount">-6%</span>
                                                        <ul class="option-list">
                                                            <li><a href="assets/images/shop/shop-73.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                                        </ul>
                                                        <figure class="image"><img src="assets/images/shop/shop-73.png" alt=""></figure>
                                                    </div>
                                                    <div class="slider-pager">
                                                        <ul class="thumb-box">
                                                            <li>
                                                                <a class="active" data-slide-index="0" href="#"><figure><img src="assets/images/shop/thumb-1.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="1" href="#"><figure><img src="assets/images/shop/thumb-2.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="2" href="#"><figure><img src="assets/images/shop/thumb-3.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="3" href="#"><figure><img src="assets/images/shop/thumb-4.png" alt=""></figure></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="slider-content">
                                                <div class="image-inner">
                                                    <div class="image-box">
                                                        <span class="discount">-6%</span>
                                                        <ul class="option-list">
                                                            <li><a href="assets/images/shop/shop-73.png" class="lightbox-image" data-fancybox="gallery"><i class="icon-12"></i></a></li>
                                                            <li><a href="/shop-details"><i class="icon-1"></i></a></li>
                                                            <li><button type="button"><i class="icon-7"></i></button></li>
                                                        </ul>
                                                        <figure class="image"><img src="assets/images/shop/shop-73.png" alt=""></figure>
                                                    </div>
                                                    <div class="slider-pager">
                                                        <ul class="thumb-box">
                                                            <li>
                                                                <a class="active" data-slide-index="0" href="#"><figure><img src="assets/images/shop/thumb-1.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="1" href="#"><figure><img src="assets/images/shop/thumb-2.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="2" href="#"><figure><img src="assets/images/shop/thumb-3.png" alt=""></figure></a>
                                                            </li>
                                                            <li>
                                                                <a data-slide-index="3" href="#"><figure><img src="assets/images/shop/thumb-4.png" alt=""></figure></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                                        <div class="content-box">
                                            <h3><a href="/shop-details">Advance 10w 40 Full Synthetic Fuel</a></h3>
                                            <h4><del>$92.99</del>$83.99</h4>
                                            <ul class="rating"> 
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><i class="icon-41"></i></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                            <div class="timer mb_30">
                                                <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                            </div>
                                            <div class="cart-btn"><button type="button" class="theme-btn">Add to Cart <span></span><span></span><span></span><span></span></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 deals-block">
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="assets/images/shop/shop-74.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Efficiency Car Charging</a></h6>
                                    <h5>$283.99</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(4)</span></li>
                                    </ul>
                                    <ul class="list-style-one clearfix">
                                        <li>Standard household outlets</li>
                                        <li>Optimizes based on rates</li>
                                        <li>Up to 200MB/s Transfer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="sales-block-one">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="assets/images/shop/shop-75.png" alt=""></figure>
                                </div>
                                <div class="content-box">
                                    <h6><a href="/shop-details">Suspension Strut Assembly </a></h6>
                                    <h5>$190.00</h5>
                                    <ul class="rating"> 
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><i class="icon-41"></i></li>
                                        <li><span>(5)</span></li>
                                    </ul>
                                    <ul class="list-style-one clearfix">
                                        <li>Fully tested, Fully Functional</li>
                                        <li>With Bluetooth and Full Touch</li>
                                        <li>Up to 200MB/s Transfer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- deals-style-two end -->


        <!-- brand-section -->
        <section class="brand-section pt_70 pb_50">
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


        <!-- feature-section -->
        <section class="feature-section home-4 pb_40">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one">
                            <div class="inner-box">
                                <span class="text hot">Hot Sale</span>
                                <h2><a href="/shop-details">Premium oils</a></h2>
                                <h4 class="discount">Up to 35% Off</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-8.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one">
                            <div class="inner-box">
                                <span class="hot-product">Stock Clear</span>
                                <h2><a href="/shop-details">Cheap Fuel</a></h2>
                                <h4>From $23.99</h4>
                                <div class="btn-box"><a href="/shop-details" class="theme-btn">Shop now <span></span><span></span><span></span><span></span></a></div>
                                <figure class="image"><img src="assets/images/resource/feature-9.png" alt=""></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- feature-section end -->


        <!-- flash-sales-three -->
        <section class="flash-sales-three pb_80">
            <div class="pattern-layer">
                <div class="pattern-1" style="background-image: url(assets/images/shape/shape-10.png);"></div>
                <div class="pattern-2" style="background-image: url(assets/images/shape/shape-11.png);"></div>
            </div>
            <div class="auto-container">
                <div class="sec-title mb_30">
                    <h2>Flash Sales</h2>
                    <a href="/index-2">View All Products</a>
                </div>
                <div class="inner-container">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-12 col-sm-12 sales-block">
                            <div class="sales-block-two">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <span class="discount">-6%</span>
                                        <figure class="image"><img src="assets/images/resource/sales-15.png" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <h4><a href="/shop-details">Quick start a car with the manual Engine kit Pack</a></h4>
                                        <h5><del>$92.99</del>$83.99</h5>
                                        <ul class="rating"> 
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><i class="icon-41"></i></li>
                                            <li><span>(4)</span></li>
                                        </ul>
                                        <div class="timer">
                                            <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                        </div>
                                        <div class="link"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 big-column">
                            <div class="big-content">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 sales-block">
                                        <div class="sales-block-one">
                                            <div class="inner-box">
                                                <div class="image-box">
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
                                                    <div class="timer">
                                                        <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                                    </div>
                                                    <div class="link"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 sales-block">
                                        <div class="sales-block-one">
                                            <div class="inner-box">
                                                <div class="image-box">
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
                                                    <div class="timer">
                                                        <div class="cs-countdown" data-countdown="04/06/2024 05:06:59"></div>
                                                    </div>
                                                    <div class="link"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 sales-block">
                                        <div class="sales-block-one">
                                            <div class="inner-box">
                                                <div class="image-box">
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
                                                    <div class="timer">
                                                        <div class="cs-countdown" data-countdown="04/15/2024 05:06:59"></div>
                                                    </div>
                                                    <div class="link"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 sales-block">
                                        <div class="sales-block-one">
                                            <div class="inner-box">
                                                <div class="image-box">
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
                                                    <div class="timer">
                                                        <div class="cs-countdown" data-countdown="05/06/2024 05:06:59"></div>
                                                    </div>
                                                    <div class="link"><button type="button">Add to Cart<i class="icon-27"></i></button></div>
                                                </div>
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
        <!-- flash-sales-three -->


        <!-- apps-section -->
        <section class="apps-section alternat-2 pb_80">
            <div class="large-container">
                <div class="inner-container">
                    <div class="bg-layer" style="background-image: url(assets/images/background/apps-bg-3.jpg);"></div>
                    <figure class="image-layer"><img src="assets/images/resource/mockup-2.png" alt=""></figure>
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
                                                <<li><i class="icon-41"></i></li>
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


        <!-- testimonial-section -->
        <section class="testimonial-section pb_75">
            <div class="auto-container">
                <div class="sec-title centred mb_30">
                    <h2>Love from Clients</h2>
                </div>
                <div class="three-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <ul class="rating">
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li><i class="icon-41"></i></li>
                                <li class="light"><i class="icon-41"></i></li>
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


        <!-- cta-style-three -->
        <section class="cta-style-three centred pb_70">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="image-layer">
                        <figure class="image-1"><img src="assets/images/resource/cta-2.png" alt=""></figure>
                        <figure class="image-2"><img src="assets/images/resource/cta-3.png" alt=""></figure>
                    </div>
                    <div class="content-box">
                        <h2>Super Discount on <span>First Purchase</span></h2>
                        <a href="/shop">View Shop<i class="icon-27"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta-style-three end -->


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
    <script src="assets/js/bxslider.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/lenis.min.js"></script>
    <script src="assets/js/aos.js"></script>

    <!-- main-js -->
    <script src="assets/js/script.js"></script>


`}} />
  );
}
