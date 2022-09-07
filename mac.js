$(document).ready(function () {
    $("#fullpage").fullpage({
        anchors: ["firstPage", "secondPage", "thirdPage"],
        menu: "#menu",
        autoScrolling: false
        // responsiveWidth: 750
    });
});




// ScrollMagic: init controller
var controller = new ScrollMagic.Controller();

// Tween - Section 2
var scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})
    // animate color and top border in relation to scroll position
    .setTween("#bg img", {
        maxWidth: "1200px",
        top: "70%",
        left: "80%",
        opacity: 0.25
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({ name: "2 (duration: 100)" }) // add indicators (requires plugin)
    .addTo(controller);






// Tween - Section 3
var scene = new ScrollMagic.Scene({
    triggerElement: "#section3",
    duration: 300
})

    // animate color and top border in relation to scroll position
    .setTween("#bg img", {
        top: "20%"
    }) // the tween duration can be omitted and defaults to 1

    // Add indicators (required plugin)
    .addTo(controller);



















    // .sec9 {
    //     width: 100%;
    //     /* height: 400vh; */
    //     /* height: 100vh; */
    //     /* background: grey; */
    //     margin-top: 10px !important;
    // }
    
    // .sec9-grid {
    //     display: flex;
    //     justify-content: center;
    //     width: 100%;
    //     margin-top: 10px !important;
    //     /* background: #1c1c36; */
    // }
    
    // .sec9-img {
    //     width: 50%;
    //     height: 580px;
    //     /* background: #2997ff; */
    //     /* margin: 10px; */
    //     color: #000000;
    //     transition: .3s ease-in-out;
    //     /* opacity: .9; */
    //     /* box-shadow: -1px 2px 20px rgb(192, 192, 192); */
    
    // }
    
    // .sec9-img:hover {
    //     box-shadow: -1px 2px 20px rgb(24, 24, 24);
    //     /* opacity: 1; */
    //     /* border-radius: 40px; */
    //     /* filter: brightness(140%); */
    
    //     filter: saturate(4);
    
    // }
    
    // .sec9-grid .img1 {
    //     margin: 0px 10px 0px 10px;
    //     background: url(./images/macbox1a-01.jpg);
    //     /* background: #fafafa; */
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     padding: 20px;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     /* border-top-left-radius: 30px;
    //     border-bottom-left-radius: 30px; */
    // }
    
    
    // .sec9-grid .img2 {
    //     margin: 0 10px 0 0px;
    //     background: url(./images/macbox1a-01.jpg);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    //     /* border-top-right-radius: 30px;
    //     border-bottom-right-radius: 30px; */
    // }
    
    // .sec9-img h1 {
    //     font-size: 40px;
    //     line-height: 1.1 !important;
    //     font-weight: 600;
    //     letter-spacing: 0em;
    //     font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //     margin-top: 65px !important;
    // }
    
    // .sec9-img b {
    //     color: black;
    //     margin-top: 13px !important;
    //     font-size: 21px;
    //     line-height: 1.2381 !important;
    //     font-weight: 400;
    //     letter-spacing: .016em;
    //     font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    // }
    
    // .sec9-img strong {
    //     font-size: 48px;
    //     line-height: 1.0834933333;
    //     font-weight: 600;
    //     letter-spacing: -0.003em;
    //     font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    // }
    
    // .sec9-img p {
    //     padding: 20px 30px;
    //     font-size: 21px;
    //     line-height: 1.381002381;
    //     font-weight: 400;
    //     letter-spacing: .011em;
    //     font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    // }
    
    // .bg-link-container4 {
    //     /* display: flex; */
    //     margin-bottom: 47px !important;
    //     margin-top: 10px !important;
    //     font-size: 17px;
    //     line-height: 1.23536 !important;
    //     font-weight: 400;
    //     /* letter-spacing: -.022em; */
    //     font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //     /* margin-top: 0 !important.7em; */
    //     /* text-align: center; */
    // }
    
    // .bg-link-container4 a {
    //     color: #2997ff;
    //     margin: 10px;
    // }
    
    // .img1 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: rgb(0, 0, 0);
    // }
    
    // .img2 p {
    //     color: #1d1d1f;
    // }
    
    // .img2 h1 {
    //     margin-top: 58px !important;
    //     background: url(./images/watch.png);
    //     background-size: cover;
    //     width: 146px;
    //     height: 56px;
    //     background-size: 146px 56px;
    //     background-repeat: no-repeat;
    //     background-position: center;
    // }
    
    // .img2 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: #1d1d1f;
    // }
    
    // @media (max-width:1000px) {
    //     .sec9-img {
    //         width: 50%;
    //         height: 550px;
    //         /* background: #2997ff; */
    //         /* margin: 10px; */
    //         color: white;
    //     }
    
    //     .sec9-img h1 {
    //         font-size: 30px;
    //         line-height: 1.125 !important;
    //         font-weight: 600;
    //         letter-spacing: .002em;
    //         font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //         margin-top: 42px !important;
    //     }
    
    //     .sec9-img p {
    //         font-size: 19px;
    //         line-height: 1.21053 !important;
    //         font-weight: 400;
    //         letter-spacing: .012em;
    //         font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //         margin-top: 4px !important;
    //     }
    // }
    
    // @media (max-width:750px) {
    //     .sec9-grid {
    //         display: block;
    //     }
    
    //     .sec9-grid .img1,
    //     .img2 {
    //         margin: 0;
    //     }
    
    //     .sec9-img {
    //         width: 100%;
    //         /* margin: 0; */
    //     }
    // }
    
    // .sec9-grid .img3 {
    //     margin: 0px 10px 0px 10px;
    //     background: url(./images/ipad.jpg);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    // }
    
    // .img3 p {
    //     color: #ffffff;
    // }
    
    // .img3 h1 {
    //     margin-top: 62px !important;
    //     background: url(./images/ipadair.png);
    //     background-size: cover;
    //     background-repeat: no-repeat;
    //     background-position: center;
    //     width: 133px;
    //     height: 37px;
    //     background-size: 133px 37px;
    // }
    
    // .img3 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: #fff;
    // }
    
    // .sec9-grid .img4 {
    //     margin: 0px 10px 0px 0px;
    //     background: url(./images/mac.png);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    // }
    
    // .img4 h1 {
    //     font-size: 40px;
    //     line-height: 1.1 !important;
    //     font-weight: 600;
    //     letter-spacing: 0em;
    //     font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //     margin-top: 53px !important;
    // }
    
    // .img4 p {
    //     margin-top: 4px !important;
    //     width: 191px;
    //     height: 31px;
    //     background-size: 191px 31px;
    //     background-repeat: no-repeat;
    //     background-image: url(./images/super.png);
    //     background-position: center;
    // }
    
    // .img4 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: #1d1d1f;
    // }
    
    // .sec9-grid .img {
    //     margin: 0px 10px 0px 0px;
    //     background: url(./images/mac.png);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    // }
    
    // .img4 h1 {
    //     font-size: 40px;
    //     line-height: 1.1 !important;
    //     font-weight: 600;
    //     letter-spacing: 0em;
    //     font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //     margin-top: 53px !important;
    // }
    
    // .img4 p {
    //     margin-top: 4px !important;
    //     width: 191px;
    //     height: 31px;
    //     background-size: 191px 31px;
    //     background-repeat: no-repeat;
    //     background-image: url(./images/super.png);
    //     background-position: center;
    // }
    
    // .img4 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: #1d1d1f;
    // }
    
    // @media (max-width:750px) {
    
    //     .sec9-grid .img3,
    //     .img4 {
    //         margin: 0;
    //     }
    // }
    
    
    // /* ---------------------------- */
    
    // .sec9-grid .img5 {
    //     margin: 0px 10px 0px 10px;
    //     background: url(./images/macbook.jpg);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    // }
    
    // .img5 p {
    //     width: 223px;
    //     height: 51px;
    //     background-size: 223px 51px;
    //     background-repeat: no-repeat;
    //     background-image: url(./images/superS.png);
    //     background-position: center;
    //     margin-top: 0px !important;
    //     margin-left: 25px !important;
    //     /* left: 11px; */
    // }
    
    // .img5 h1 {
    //     font-size: 40px;
    //     line-height: 1.1 !important;
    //     font-weight: 600;
    //     letter-spacing: 0em;
    //     font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //     margin-top: 53px !important;
    //     color: #f5f5f7;
    // }
    
    // .img5 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: #fff;
    //     /* left: 11px; */
    // }
    
    // .sec9-grid .img6 {
    //     margin: 0px 10px 0px 0px;
    //     background: url(./images/car.jpg);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    // }
    
    // .img6 h1 {
    //     width: 108px;
    //     height: 33px;
    //     background-size: 108px 33px;
    //     background-repeat: no-repeat;
    //     background-image: url(./images/apple.png);
    //     background-position: center;
    // }
    
    // .img6 p {
    //     font-size: 21px;
    //     line-height: 1.2381 !important;
    //     font-weight: 400;
    //     letter-spacing: .016em;
    //     font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    //     margin-top: 9px !important;
    //     margin-bottom: 10px !important;
    //     color: #1d1d1f;
    // }
    
    // .img6 .bg-link-container4 i {
    //     margin-left: 5px !important;
    //     font-size: 0.7rem;
    //     /* transition: all .5s; */
    //     color: #1d1d1f;
    // }
    
    // .sec9-grid .img {
    //     margin: 0px 10px 0px 0px;
    //     background: url(./images/mac.png);
    //     background-size: cover;
    //     background-position: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //     text-align: center;
    //     align-items: center;
    //     color: #1d1d1f;
    // }
    
    // @media (max-width:750px) {
    
    //     .sec9-grid .img5,
    //     .img6 {
    //         margin: 0;
    //     }
    // }