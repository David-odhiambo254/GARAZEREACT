import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Cart(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page cart" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- page-title -->
        <section class="page-title-two centred">
            <div class="auto-container">
                <div class="content-box">
                    <h1>Your Cart</h1>
                </div>
            </div>
        </section>
        <!-- page-title end -->


        <!-- cart section -->
        <section class="cart-section pb_80">
            <div class="auto-container">
                <div class="table-outer mb_30">
                    <table class="cart-table">
                        <thead class="cart-header">
                            <tr>
                                <th>product</th>
                                <th>color</th>
                                <th>size</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total</th>
                                <th>&nbsp;</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td class="product-column">
                                    <div class="product-box">
                                        <figure class="image-box"><img src="assets/images/shop/cart-1.png" alt=""></figure>
                                        <h6><a href="/shop-details">Car LED Strip LED Headlight</a></h6>    
                                    </div>
                                </td>
                                <td><span class="color black"></span></td>
                                <td>Medium</td>
                                <td>$133</td>
                                <td class="qty">
                                    <div class="item-quantity">
                                        <input class="quantity-spinner" type="text" value="2" name="quantity">
                                    </div>
                                </td>
                                <td>$266</td>
                                <td><button class="cancel-btn"><i class="icon-38"></i></button></td>
                            </tr>
                            <tr>
                                <td class="product-column">
                                    <div class="product-box">
                                        <figure class="image-box"><img src="assets/images/shop/cart-2.png" alt=""></figure>
                                        <h6><a href="/shop-details">Fuel Filter Nitro Engine Parts</a></h6>    
                                    </div>
                                </td>
                                <td><span class="color yellow"></span></td>
                                <td>Large</td>
                                <td>$167.98</td>
                                <td class="qty">
                                    <div class="item-quantity">
                                        <input class="quantity-spinner" type="text" value="1" name="quantity">
                                    </div>
                                </td>
                                <td>$167.98</td>
                                <td><button class="cancel-btn"><i class="icon-38"></i></button></td>
                            </tr>
                            <tr>
                                <td class="product-column">
                                    <div class="product-box">
                                        <figure class="image-box"><img src="assets/images/shop/cart-3.png" alt=""></figure>
                                        <h6><a href="/shop-details">BMW 740 Series best brake padMedium</a></h6>    
                                    </div>
                                </td>
                                <td><span class="color brown"></span></td>
                                <td>Medium</td>
                                <td>$143</td>
                                <td class="qty">
                                    <div class="item-quantity">
                                        <input class="quantity-spinner" type="text" value="1" name="quantity">
                                    </div>
                                </td>
                                <td>$143</td>
                                <td><button class="cancel-btn"><i class="icon-38"></i></button></td>
                            </tr>
                            <tr>
                                <td class="product-column">
                                    <div class="product-box">
                                        <figure class="image-box"><img src="assets/images/shop/cart-4.png" alt=""></figure>
                                        <h6><a href="/shop-details">BMW 740 Series best brake padMedium</a></h6>    
                                    </div>
                                </td>
                                <td><span class="color black"></span></td>
                                <td>Small</td>
                                <td>$150</td>
                                <td class="qty">
                                    <div class="item-quantity">
                                        <input class="quantity-spinner" type="text" value="1" name="quantity">
                                    </div>
                                </td>
                                <td>$150</td>
                                <td><button class="cancel-btn"><i class="icon-38"></i></button></td>
                            </tr>
                        </tbody>    
                    </table>
                </div>
                <div class="lower-content">
                    <div class="row clearfix">
                        <div class="col-lg-8 col-md-12 col-sm-12 coupon-column">
                            <div class="coupon-box">
                                <div class="form-group">
                                    <input type="text" name="" placeholder="Apply Coupon">
                                    <button type="button"><i class="icon-27"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 cart-column">
                            <div class="total-cart">
                                <div class="title-box">
                                    <h4>Subtotal</h4>
                                    <h5>$726.98</h5>
                                </div>
                                <div class="shipping-cost mb_40">
                                    <h4>Shipping</h4>
                                    <ul class="cost-list">
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="radio" id="checkbox1" name="same" checked>
                                                <label for="checkbox1">Free Shipping</label>
                                            </div>
                                            <span class="price">+$00.00</span>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="radio" id="checkbox2" name="same">
                                                <label for="checkbox2">Flat Rate</label>
                                            </div>
                                            <span class="price">+$10.00</span>
                                        </li>
                                        <li>
                                            <div class="check-box">
                                                <input class="check" type="radio" id="checkbox3" name="same">
                                                <label for="checkbox3">Local Delivery</label>
                                            </div>
                                            <span class="price">+$20.00</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="shipping-calculator">
                                    <h4>Calculate Shipping</h4>
                                    <div class="form-group">
                                        <div class="select-box">
                                            <select class="wide">
                                               <option data-display="Select Country">Select Country</option>
                                               <option value="1">Australia</option>
                                               <option value="2">Belgium</option>
                                               <option value="3">Canada</option>
                                               <option value="4">China</option>
                                               <option value="5">France</option>
                                               <option value="6">Germany</option>
                                               <option value="7">Malaysia</option>
                                               <option value="8">Mexico</option>
                                               <option value="9">Russia</option>
                                               <option value="10">Switzerland</option>
                                               <option value="11">Turkey</option>
                                               <option value="12">United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="zip" placeholder="Postcode / ZIP">
                                    </div>
                                    <div class="form-group">
                                        <button class="theme-btn cart-btn" type="button">Update Cart <span></span><span></span><span></span><span></span></button>
                                    </div>
                                </div>
                                <div class="total-box">
                                    <h4>Total</h4>
                                    <h5>$756.98</h5>
                                </div>
                                <div class="btn-box">
                                    <button class="theme-btn" type="button">Proceed to Checkout<span></span><span></span><span></span><span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- cart section end -->


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
    <script src="assets/js/bxslider.js"></script>
    <script src="assets/js/lenis.min.js"></script>
    <script src="assets/js/aos.js"></script>


    <!-- main-js -->
    <script src="assets/js/script.js"></script>


`}} />
  );
}
