import React from 'react';
import {Grid} from '@mui/material'
import './Footer.css'


export default function Footer(){
  return(
    <>
      <footer>
        <Grid container spacing={5} clssName={'main'} >
          <Grid item className={'item'} >
          
            <ul>
              <h4>SERVICES</h4>
              <li>
              <a  href="/ci/aboutShopBop/customerservice.html#cs=ov=183633523430,os=4,link=footerSvcsCustomerService" data-at="customerService">
                Customer Service
              </a>
              </li>
              <li>Gift Certificates</li>
              <li>Give Us Your Feedback</li>
            </ul>
          </Grid>
          <Grid item className={'item'} >
            
            <ul>
              <h4>INFORMATION</h4>
              <li>About Us</li>
              <li>Careers</li>
              <li>Affiliate Program</li>
            </ul>
          </Grid>
          <Grid item className={'item'}>
            
            <ul>
              <h4>PERSONALIZE</h4>
              <li>Account</li>
              <li>My Loyalty</li>
              <li><a href="/s/hearts#cs=ov=183633523430,os=4,link=footerPersonalizeMyHearts" data-at="myHearts" rel="nofollow" aria-label="My Hearts">
                    My&nbsp;<img src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/footer/rebrand_heart_small_filled_1-0.png" alt="Heart" />s
                  </a>
              </li>
              <li>My Wish List</li>
              <li>My Designers</li>
              <li>My Reviews</li>
            </ul>
          </Grid>
          <Grid item className={'item'}>
            
            <ul>
              <h4>CONNECT</h4>
              <li>Mobile</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
              <li>Weibo</li>
              <li>Sign up for Shopbop emails</li>
            </ul>
          </Grid>
          <Grid item className={'item'}>
            
            <ul>
              <h4>LOCATION</h4>
              <li>India (change)</li>
              <li>FREE express international</li>
              <li>delivery</li>
              <li>+ easy returns</li>
              
            </ul>
            
          </Grid>


        </Grid>
        <div className={'copyright'}>
            <h4>© 1999-2022 BOP LLC. All Rights Reserved.<a class="link" data-at="privacy" href="/ci/aboutShopBop/privacypolicy.html#cs=ov=183675728200,os=1,link=footerPrivacyPolicyEN">Privacy Notice</a> <a class="link" data-at="condOfUse" href="/ci/aboutShopBop/conditions.html#cs=ov=183633523430,os=4,link=footerCopyrightEN">Conditions of Use</a></h4>
            中文版 Shopbop！使用您最熟悉的语言尽享精彩购物体验。
        </div>
      </footer>
    </>
  )
}