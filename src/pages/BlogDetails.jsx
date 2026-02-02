import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function BlogDetails(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page blogdetails" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- sidebar-page-container -->
        <section class="sidebar-page-container pt_80 pb_80">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div class="blog-details-content">
                            <div class="news-block-one">
                                <div class="inner-box pb_15">
                                    <div class="image-box">
                                        <figure class="image"><img src="assets/images/news/news-18.jpg" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <div class="upper-box">
                                            <span class="category mr_15">Analytics</span>
                                            <ul class="post-info">
                                                <li>By <a href="/blog-details">Alex Beniwal</a></li>
                                                <li>March 20, 2023</li>
                                            </ul>
                                        </div>
                                        <h2>2024 Dodge Durango SRT 392 AlcHEMI Marks the End</h2>
                                        <p>The engine is the heart of the vehicle, responsible for converting fuel into mechanical energy. It consists of various components, including cylinders, pistons, crankshaft, camshaft, and more. Generates power by burning fuel and converts it into mechanical energy to drive the vehicle.</p>
                                        <p>The transmission, often referred to as the gearbox, transfers power from the engine to the wheels. It can be automatic or manual. The suspension system includes shocks, struts, springs, and control arms. It absorbs shocks, maintains tire contact with the road, and ensures a smooth ride. Controls the speed and torque of the vehicle by transmitting power from the engine to the wheels.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-one">
                                <blockquote class="mb_35">
                                    <div class="icon-box"><img src="assets/images/icons/icon-1.svg" alt=""></div>
                                    <p>Have you been monitoring how the self-driving car industry has been attempt to shape the regulatory around their vehicles?</p>
                                    <h4>Brooklyn Simmons</h4>
                                </blockquote>
                                <div class="text-box mb_40">
                                    <p>Wheels provide a means of mounting and affixing the tires to the vehicle through which the engine’s power is transferred to the ground. As the engine generates power, it moves through the drivetrain to the wheels, which bolt to the wheel hub and rotate around the axles For the wheels to turn and propel the car forward, you need to have friction provided by the tires in direct and constant contact with the ground under the car.</p>
                                </div>
                                <div class="two-column">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure class="image-box mb_25"><img src="assets/images/news/news-19.jpg" alt=""></figure>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure class="image-box mb_25"><img src="assets/images/news/news-20.jpg" alt=""></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-two mb_45">
                                <h3>Reports Highest Third Quarter Sales in Company History</h3>
                                <p>it's crucial to consider factors such as the shop's reputation, the availability of quality parts, pricing, and customer service. Reading reviews and checking the shop's policies can provide insights into the overall customer experience.</p>
                                <p>As the engine generates power, it moves through the drivetrain to the wheels, which bolt to the wheel hub and rotate around the axles For the wheels to turn and propel the car forward, you need to have friction provided by the tires in direct and constant contact with the ground under the car.</p>
                                <h6>Features :</h6>
                                <ul class="list-style-one mb_30 clearfix">
                                    <li>The engine's power output is measured in horsepower</li>
                                    <li>Modern engines often feature technologies such as direct injection </li>
                                    <li>Some suspension systems offer adjustable features</li>
                                    <li>Certain rims may have features that make them easier to clean and maintain.</li>
                                </ul>
                                <p>This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniries, childbirth or anything that makes a difference to their life.dolor sit and amet consectetur ander adipiscing elites eiusmod tempor incididunt labore et dolore magna aliqua</p>
                            </div>
                            <div class="post-share-option pb_50 mb_30">
                                <ul class="tags-list">
                                    <li><span>Tags:</span></li>
                                    <li><a href="/blog-details">Garage</a></li>
                                    <li><a href="/blog-details">Electronics</a></li>
                                    <li><a href="/blog-details">Tires</a></li>
                                    <li><a href="/blog-details">Gadgets</a></li>
                                </ul>
                                <ul class="social-links"> 
                                    <li><span>Share This :</span></li>
                                    <li><a href="/blog-details"><i class="icon-44"></i></a></li>
                                    <li><a href="/blog-details"><i class="icon-37"></i></a></li>
                                    <li><a href="/blog-details"><i class="icon-45"></i></a></li>
                                </ul>
                            </div>
                            <div class="author-box mb_50">
                                <figure class="thumb-box"><img src="assets/images/news/author-1.png" alt=""></figure>
                                <h4>Alex Janson</h4>
                                <span class="designation">UI/UX Desinger</span>
                                <p>Satisfied with them, not sure what else to say other than if you’re looking for a replacement. This sentiment is what makes the eternity band a perfect gift for couples</p>
                            </div>
                            <div class="comment-box">
                                <h2>Write Comment</h2>
                                <div class="form-inner">
                                    <form method="post" action="blog-details.html">
                                        <div class="row clearfix">
                                            <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div class="form-group">
                                                    <label>Name <span>*</span></label>
                                                    <input type="text" name="name">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div class="form-group">
                                                    <label>Email <span>*</span></label>
                                                    <input type="email" name="email">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div class="form-group">
                                                    <label>Message <span>*</span></label>
                                                    <textarea name="message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div class="check-box mb_35">
                                                    <input class="check" type="checkbox" id="checkbox1">
                                                    <label for="checkbox1">Save my name, email, and website in this browser for the next time I comment.</label>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div class="message-btn">
                                                    <button type="submit" class="theme-btn">Submit Review<span></span><span></span><span></span><span></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
