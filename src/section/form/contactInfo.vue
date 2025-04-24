<template>
  <div>
  <div class="contact-info-img relative">
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
   <!--  <div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div> 
    <Logo data-aos="zoom-in" data-aos-delay="0" />
    <img src="@/section/s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0" > 
    <img src="@/section/s2/logo2.svg" class="logo"> -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
        <img src="//h35.banner.tw/img//form/phone.svg" alt="電話" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="//h35.banner.tw/img//form/messenger.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center btfanpage" @click="open()">
        <img src="//h35.banner.tw/img//form/fb.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap address" v-if="info.address">
      <div class="flex contact-item justify-center items-center add">
        <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h35.banner.tw/img//form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>

  </div>
</div>

  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="//h35.banner.tw/img//form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="//h35.banner.tw/img//form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img//form/pen.svg" alt="我要預約" srcset="" />
      <div>我要預約</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="//h35.banner.tw/img//form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img//form/messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '預約專線' : modalType == 'fb' ? 'Facebook Messenger' :
      `${info.address2?info.address2:'導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
      `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="modalType != 'phone'" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.bg-color1{background-color: #446A75;}
.hover\:bg-color2:hover{background-color:#254c57;}


.contact-info-img{
  height: 0;z-index: 52;
}
.contact-info {
  padding: 3em 0 2.5em 0;
  position: relative;
  z-index: 50;
  width: size(1000);
  min-width: 750px;
  font-size:16px;

  .logo {position: relative;
    width: size(572);
    margin: size(30) auto size(30);
  }
  .en{width:size(450);margin-bottom: size(30);}

  .contact-item-box {
    position: relative;
    margin-top:1.25em;
    gap: 1.25em;
   // width: size(920);
    // min-width: 680px;

    .contact-item {
      background: #446A75;
      color: #FFF;
      width: 100%;
      flex: 1;
      padding: 1.1em 0;
   // border-radius: .6em;
      line-height: 1.6;//3.8
      letter-spacing: 0em;
     // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      //border: 1px solid #C29267;
      gap: 1em;

      &:hover {
        background: #254c57;
        color: #FFF;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        max-width: 1.35em;
        height: auto;
        max-height: 1.35em;
        filter: brightness(0) invert(1);
        transition: all .5s;
        margin: 0;
      }

    }
    &.address {
        background-color: #FFF;
      // border-radius: .6em;

      .contact-item {
        &.add{
          background: none;
        color: #000;
        cursor: text;
        flex:2.10;

        }
    }
    }
    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{filter:invert(17%) sepia(32%) saturate(3185%) hue-rotate(213deg) brightness(106%) contrast(116%);
  }
}

@media screen and (max-width:768px) {


  .mo-contact-info {
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.501);
    background:#154675;

    .contact-item {
      height: 100%;      
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-left:1px solid #fff9;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }
      &:first-child{
      border-left:0;}

    }
  }

  .contact-info {
    width: 100%;
    min-width:0;
    // height: sizem(400);
    // border-radius: sizem(68);
    //padding: sizem(0) sizem(0);
    padding: sizem(50) 0 sizem(50) 0;
    margin-top: sizem(0);
    position: relative;
    justify-content: space-between;
  background-size: sizem(450) auto;

    .logo {
      width: sizem(290);
    margin: sizem(20) auto sizem(20) auto;
     // margin-bottom: sizem(47);
    }
    .en{width:sizem(220);margin-bottom: sizem(20);}

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(15);
      flex-direction: column;
    width: sizem(310);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin: 0;
        display: none;

        img {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }
        div{
          text-indent: 2em;
        }
/*
        &.address {
          font-size: sizem(15);
          border-radius: sizem(0) sizem(0) 0 0;
          padding: 1.1em 0;
          margin-top: sizem(25);
          //font-size: .9em;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }
        &.address+div {
          border-radius: 0 0 sizem(0) sizem(0);
        }
      &.googlemap {
        border-top-width: 0;
      border-left-width:0;
      }
*/
      }
      &.address {
        margin:sizem(15) 0 0 0 ;
        .contact-item {
        display: block;
          &.add{text-align: center;
            padding: 1.1em 0;
          div{text-indent: 0em;}
          }
        }
      }

      &.no-gap {
        gap: 0 !important;
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
     setTimeout(() => {
       window.location.href = "phoneThanks";
     }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
