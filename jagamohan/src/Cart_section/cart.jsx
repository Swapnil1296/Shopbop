import React from "react";
import { Icon, Grid, Paper, Box } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import image from '../images/all-card.png'
// import "./cart.css";
import "./cart-style.css"
const productImage = "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/staud/staud3114818125/staud3114818125_1651767576287_2-0._QL95_UX184_.jpg"
const x = 1
const productTag = "STUD"
const productName = "Chiara Espadrille Heels"
const productPrice = "375"
const productColor = "Cream/Natural"
const size = "41"
const quantity = "1"
export default function Cart() {
    return (
        <>
            <Grid container pl={20} pr={20} pt={2}>
                <Grid item lg={8}  >
                    <Grid item lg={10} >
                        {/* <Item>x</Item> */}

                        <div className='flex logo-div'>
                            <div>
                                {/* <img src="" alt="cart-logo" /> */}
                                <ShoppingBagOutlinedIcon />


                            </div>

                            <div>
                                <span>
                                    <h4>  Shopping Bag - <span className='cart-count' > {x} items</span> </h4>
                                </span>
                                Items are saved to your bag, but availability is not guaranteed.
                            </div>

                        </div>

                    </Grid>
                    <Grid item lg={10} p={1} className='product-info'>
                        {/* <Paper> */}
                            <Grid container className="product-div">
                                <Grid container lg={6}>
                                    <Grid item lg={5} pr={1}>
                                        <img className='product-image' src={productImage} alt="product-image" />
                                    </Grid>
                                    <Grid item lg={7} className='product-details'>
                                        <Box>
                                            <h5 style={{ margin: 0 }}>{productTag}</h5>
                                            <span>{productName}</span>
                                            <p>$ {productPrice}</p>
                                            <p><b>Color :</b> {productColor}</p>
                                            <p><b>Size :</b>{size}</p>
                                            <b>Quantity</b> <br></br>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </Box>

                                    </Grid>


                                </Grid>
                                <Grid container p={1} className='flex-end'>

                                    <button>Edit</button>
                                    <button>Move To Whishlist</button>
                                </Grid>
                            </Grid>

                        {/* </Paper> */}


                    </Grid>
                    <Grid container lg={10}>
                        <hr />
                    </Grid>

                    <Grid container pt={3} lg={10}>
                        <Grid className='whishlist' p={2} >
                            <div className='flex'>
                                <div></div>
                                {/* logo */}
                                <div>
                                    <h4> My Wish List</h4>
                                    <p>To view your wish list or start saving,<a href='https://www.shopbop.com/ap/signin?clientContext=135-4625341-2328124&openid.pape.max_auth_age=1800&openid.return_to=https%3A%2F%2Fwww.shopbop.com%3A443%2Fauth%2Fafter%2Fauthportal&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=shopbop_us_aui&openid.mode=checkid_setup&siteState=g5DZo314Tnuy%2BJQL8p0ByLo8LJJPRcHD77358pjbTCptAAAAAQAAAABidiF9cmF3AAAAAD1aGrfyIF6IE%2BJ7i%2Fa6ow%3D%3D%7Chttps%3A%2F%2Fwww.shopbop.com%3A443%2Fcart&marketPlaceId=A2817T8MKXE20N&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=shopbop-desktop&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'><b>Sign In or Register</b></a> .</p>
                                </div>
                            </div>
                        </Grid>


                    </Grid>



                </Grid>
                <Grid item lg={4} className='checkout-div'>

                    <Paper>
                        <Grid item p={2}>
                            <h3>Order Summery</h3>
                            <div className='flex-b'>
                                <span>Products{x}</span><span>$98</span>
                            </div>
                            <div className='flex-b'>
                                <span>Shipping & Handling </span><span>FREE</span>
                            </div>
                            Promo code
                            <div className='promo-input' >
                                <input type="text" placeholder='Enter code' /> <button className='apply-btn'>Apply</button>
                            </div>
                            <hr></hr>
                            <div className='flex-b'>
                                <div><b>Subtotal</b>(before taxes)</div>
                                <div>$98</div>
                            </div>
                            <div className='checkout-btn'><button> Checkout</button></div>


                        </Grid>




                    </Paper>
                    <Grid p={2}>
                        <div className='flex'>
                            <div></div>
                            <div className='add-fee'><h4>Additional Fees May Apply</h4>
                                <p>Shipping options, Import fees, Return fees. Details</p>
                            </div>
                        </div>
                    </Grid>
                    <hr></hr>
                    <Grid container className='all-cart'  m='auto'>
                       <img className='all-cart-image' src={image} alt="all-cart" />
                       <p>Questions? <b>Contact Customer Service</b></p>
                    </Grid>
                    
                </Grid>


                    
            </Grid>
            <hr className='last-hr' />

        </>
    );
}














//  <div className='main-div'>

//                 <div className='cart-details'>

//                     <div className='cart-logo-text'>
//                         <div>
//                         <ShoppingBagOutlinedIcon />
//                         </div>
//                         <div><h4>Shopping Bag - <span>{x} items </span> </h4>
//                         <span>Items are saved to your bag, but availability is not guaranteed.</span>
//                         </div>
//                      </div>

//                     <div  className='product-data'>x</div>
//                     <div className='my-whishlist'>
//                         <h4>My Wish List</h4>
//                         <span>To view your wish list or start saving, <a href='https://www.shopbop.com/actions/loginPageAction.action?forceLogin=true'>Sign In or Register</a>.</span>
//                     </div>

//                 </div>
//                 <div className='order-summery'>t</div>
//  </div >
