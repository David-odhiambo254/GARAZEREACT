import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Blog(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page blog" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- sidebar-page-container -->
        <section class="sidebar-page-container pt_80 pb_80">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div class="blog-grid-content">
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-11.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Analytics</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Alex Beniwal</a></li>
                                                        <li>March 20, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">2024 Dodge Durango SRT 392 AlcHEMI Marks the End</a></h3>
                                                <p>The internal structure of a tyre can affect every aspect of its performance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-12.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Service</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Rox Amel</a></li>
                                                        <li>March 19, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">Warning lights indicating activation of various systems</a></h3>
                                                <p>Warning lights in a car's dashboard indicate the activation of various systems or alert the driver to</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-4.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Car Parts</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Alex Hel</a></li>
                                                        <li>March 18, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">Gooloo Battery Jumpers For Sale at Buy Auto Parts</a></h3>
                                                <p>If you have a sticking brake, one wheel that locks up consistently before the others and uneven brake pad</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-13.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Service</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Ema Watsn</a></li>
                                                        <li>March 17, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">You can travel at your own pace in a car</a></h3>
                                                <p>Diesel is losing popularity in Europe for several reasons, and this trend has been ongoing for several years.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-5.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Analytics</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Haris Gulati</a></li>
                                                        <li>March 16, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">Wheel balancing or repair and change car tire at auto service.</a></h3>
                                                <p>All Wheels and furnaces need to be replaced eventually, but the good news is that some Wheel</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-6.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Service</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Alex Benwal</a></li>
                                                        <li>March 15, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">selling car rims Stand for sale of alloy wheels.</a></h3>
                                                <p>This is a very explosive process resulting in the temperature and pressure values in the cylinder to</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-7.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Analytics</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Gol Tame</a></li>
                                                        <li>March 14, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">Reports Highest Third Quarter Sales in Company History</a></h3>
                                                <p>During the power stroke of an internal combustion engine, the energy that is contained in the fuel is</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-8.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Service</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Bna Nyjer</a></li>
                                                        <li>March 13, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">Auto Repair Shop Interior with Mechanic in Background</a></h3>
                                                <p>We’ll repair some of the most common problems and identify the best solutions to fix them.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-9.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Analytics</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Jhon Alex</a></li>
                                                        <li>March 12, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">rolling tire at repairing service garage background. Technician</a></h3>
                                                <p>The internal structure of a tyre can affect every aspect of its performance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                    <div class="news-block-one">
                                        <div class="inner-box">
                                            <div class="image-box">
                                                <figure class="image"><a href="/blog-details"><img src="assets/images/news/news-10.jpg" alt=""></a></figure>
                                            </div>
                                            <div class="lower-content">
                                                <div class="upper-box">
                                                    <span class="category mr_15">Service</span>
                                                    <ul class="post-info">
                                                        <li>By <a href="/blog-details">Ema Watsn</a></li>
                                                        <li>March 11, 2023</li>
                                                    </ul>
                                                </div>
                                                <h3><a href="/blog-details">Warning lights indicating activation of various systems</a></h3>
                                                <p>Warning lights in a car's dashboard indicate the activation of various systems or alert the driver to</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination-wrapper pt_25">
                                <ul class="pagination clearfix">
                                    <li><a href="/blog"><i class="fal fa-angle-left"></i></a></li>
                                    <li><a href="/blog" class="current">1</a></li>
                                    <li><a href="/blog">2</a></li>
                                    <li><a href="/blog">3</a></li>
                                    <li><a href="/blog"><i class="fal fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div class="blog-sidebar ml_20">
                            <div class="sidebar-widget search-widget mb_50">
                                <div class="search-form">
                                    <form method="post" action="blog.html">
                                        <div class="form-group">
                                            <input type="search" name="search-field" placeholder="Search" required>
                                            <button type="submit"><i class="icon-9"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="sidebar-widget category-widget mb_45">
                                <div class="widget-title mb_16">
                                    <h3>Categories</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="category-list clearfix">
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox1">
                                                <label for="checkbox1">Car Audio Systems</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox2">
                                                <label for="checkbox2">Analytics</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox3">
                                                <label for="checkbox3">Suspension</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox4">
                                                <label for="checkbox4">Car Repair Parts</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox5">
                                                <label for="checkbox5">Batteries Power</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox6">
                                                <label for="checkbox6">Wheels And Tyres</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox7">
                                                <label for="checkbox7">Lighting</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="checkbox" id="checkbox8">
                                                <label for="checkbox8">Car Fuel</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget post-widget mb_40">
                                <div class="widget-title mb_25">
                                    <h3>Latest News</h3>
                                </div>
                                <div class="post-inner">
                                    <div class="post">
                                        <figure class="post-thumb"><a href="/blog-details"><img src="assets/images/news/post-1.jpg" alt=""></a></figure>
                                        <div class="text">
                                            <h5><a href="/blog-details">Gooloo Battery Jumpers For Sale at Buy Auto</a></h5>
                                            <span class="post-date">Apr 17, 2022</span>
                                        </div>
                                    </div>
                                    <div class="post">
                                        <figure class="post-thumb"><a href="/blog-details"><img src="assets/images/news/post-2.jpg" alt=""></a></figure>
                                        <div class="text">
                                            <h5><a href="/blog-details">You can travel at your own pace in a car</a></h5>
                                            <span class="post-date">Apr 16, 2022</span>
                                        </div>
                                    </div>
                                    <div class="post">
                                        <figure class="post-thumb"><a href="/blog-details"><img src="assets/images/news/post-3.jpg" alt=""></a></figure>
                                        <div class="text">
                                            <h5><a href="/blog-details">Reports Highest Third Quarter Sales in</a></h5>
                                            <span class="post-date">Apr 15, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-widget archives-widget mb_45">
                                <div class="widget-title mb_20">
                                    <h3>Archives</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="archives-list clearfix">
                                        <li><a href="/blog-details"><i class="far fa-angle-right"></i>March 20, 2023</a></li>
                                        <li><a href="/blog-details"><i class="far fa-angle-right"></i>April 20, 2023</a></li>
                                        <li><a href="/blog-details"><i class="far fa-angle-right"></i>July 20, 2023</a></li>
                                        <li><a href="/blog-details"><i class="far fa-angle-right"></i>Aguest 20, 2023</a></li>
                                        <li><a href="/blog-details"><i class="far fa-angle-right"></i>November 20, 2023</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget gallery-widget mb_40">
                                <div class="widget-title mb_25">
                                    <h3>Photo Gallery</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="image-list clearfix">
                                        <li>
                                            <figure class="image"><a href="assets/images/news/gallery-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-1.jpg" alt=""></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image"><a href="assets/images/news/gallery-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-2.jpg" alt=""></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image"><a href="assets/images/news/gallery-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-3.jpg" alt=""></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image"><a href="assets/images/news/gallery-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-4.jpg" alt=""></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image"><a href="assets/images/news/gallery-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-5.jpg" alt=""></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image"><a href="assets/images/news/gallery-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-6.jpg" alt=""></a></figure>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget tags-widget">
                                <div class="widget-title mb_25">
                                    <h3>Popular Tags</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="tags-list clearfix">
                                        <li><a href="/blog-details">Garage</a></li>
                                        <li><a href="/blog-details">Electronics</a></li>
                                        <li><a href="/blog-details">Quality</a></li>
                                        <li><a href="/blog-details">Promotion</a></li>
                                        <li><a href="/blog-details">Lighting</a></li>
                                        <li><a href="/blog-details">Tires</a></li>
                                        <li><a href="/blog-details">Gadgets</a></li>
                                        <li><a href="/blog-details">Envato</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- sidebar-page-container end -->


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
    <script src="assets/js/product-filter.js"></script>
    <script src="assets/js/jquery.bootstrap-touchspin.js"></script>
    <script src="assets/js/lenis.min.js"></script>
    <script src="assets/js/aos.js"></script>


    <!-- main-js -->
    <script src="assets/js/script.js"></script>


`}} />
  );
}
