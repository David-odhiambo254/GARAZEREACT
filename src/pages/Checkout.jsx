import React, { useEffect } from 'react';
import { initPlugins } from '../utils/initPlugins';

export default function Checkout(){
  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);
  return (
    <div class="page checkout" dangerouslySetInnerHTML={{__html: `


    <div class="boxed_wrapper ltr">


        


        


        <!-- page-title -->
        <section class="page-title-two centred">
            <div class="auto-container">
                <div class="content-box">
                    <h1>Checkout</h1>
                </div>
            </div>
        </section>
        <!-- page-title end -->


        <!-- checkout-section -->
        <section class="checkout-section pb_80">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-7 col-md-12 col-sm-12 billing-column">
                        <div class="billing-content">
                            <h3>Billing Details</h3>
                            <div class="form-inner">
                                <form method="post" action="checkout.html">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>First Name<span>*</span></label>
                                                <input type="text" name="fname">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Last Name<span>*</span></label>
                                                <input type="text" name="lname">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Email Address<span>*</span></label>
                                                <input type="email" name="email">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Phone Number<span>*</span></label>
                                                <input type="text" name="phone">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Country<span>*</span></label>
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
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Address<span>*</span></label>
                                                <input type="text" name="address">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Town / City<span>*</span></label>
                                                <input type="text" name="city">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 field-column">
                                            <div class="form-group">
                                                <label>Postcode / ZIP<span>*</span></label>
                                                <input type="text" name="zip">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 field-column">
                                            <div class="form-group">
                                                <div class="check-box">
                                                    <input class="check" type="checkbox" id="checkbox1">
                                                    <label for="checkbox1">Create an account?</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="other-address">
                                <h3>Shipping Address</h3>
                                <div class="check-box">
                                    <input class="check" type="checkbox" id="checkbox2">
                                    <label for="checkbox2">Ship to a different address</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 order-column">
                        <div class="order-box">
                            <h3>Order Summary</h3>
                            <div class="order-info">
                                <div class="title-box">
                                    <span class="text">PROduct</span>
                                    <span class="text">total</span>
                                </div>
                                <div class="order-product">
                                    <div class="single-item">
                                        <div class="product-box">
                                            <figure class="image-box"><img src="assets/images/shop/checkout-1.png" alt=""></figure>
                                            <h6>Advance 10w30 full <br />synthetic fuel <span>x 1</span></h6>
                                        </div>
                                        <h4>$33.99</h4>
                                    </div>
                                    <div class="single-item">
                                        <div class="product-box">
                                            <figure class="image-box"><img src="assets/images/shop/checkout-2.png" alt=""></figure>
                                            <h6>Steering a car with a <br />manual Wheel <span>x 1</span></h6>
                                        </div>
                                        <h4>$45.99</h4>
                                    </div>
                                    <div class="single-item">
                                        <div class="product-box">
                                            <figure class="image-box"><img src="assets/images/shop/checkout-3.png" alt=""></figure>
                                            <h6>Car Remote Key for <br />Xhorse XKTO10EN <span>x 1</span></h6>
                                        </div>
                                        <h4>$66.99</h4>
                                    </div>
                                </div>
                                <ul class="cost-box">
                                    <li><h4><span>Subtotal</span></h4><h4>$146.97</h4></li>
                                    <li><h4><span>Free Shipping</span></h4><h4><span>$0</span></h4></li>
                                </ul>
                                <div class="total-box">
                                    <h4><span>Total</span></h4>
                                    <h4>$726.98</h4>
                                </div>
                                <div class="payment-option">
                                    <div class="bank-payment">
                                        <div class="check-box mb_12">
                                            <input class="check" type="radio" id="checkbox3" name="same" checked>
                                            <label for="checkbox3">Direct Bank Transfer</label>
                                        </div>
                                        <p>Make your payment directly into our bank account. Please use your Order ID as payment reference.</p>
                                    </div>
                                    <ul class="other-payment">
                                        <li>
                                            <div class="check-box mb_12">
                                                <input class="check" type="radio" id="checkbox4" name="same">
                                                <label for="checkbox4">Cash on Delivery</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="check-box mb_12">
                                                <input class="check" type="radio" id="checkbox5" name="same">
                                                <label for="checkbox5">Credit/Debit Cards or Paypal</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="btn-box pt_30">
                                    <button type="submit" class="theme-btn">Proceed to Checkout<span></span><span></span><span></span><span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- checkout-section end -->


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
