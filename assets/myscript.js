// console.log('Protocols.js');

// Make nav clone
// let headerParent = $('div[data-section-id="header"]');
// let header = $('header');
// header.clone(true, true).appendTo(headerParent).addClass('fixed-header');



(function( $ ) {
   // sections
//    let sectionOne = $('div.section-one');
//    let sectionTwo = $('div.section-two');
//    let sectionThree = $('div.section-three');

//    //child content
//    let firstSection = sectionOne.children('div.first');
//    let secondSection = sectionOne.children('div.second');
//    let thirdSection = sectionOne.children('div.third');

//    let fourthSection = sectionTwo.children('div.first');
//    let fiveSection = sectionTwo.children('div.second');
//    let sixSection = sectionTwo.children('div.third');

//    let sevenSection = sectionThree.children('div.first');
//    let eightSection = sectionThree.children('div.second');
//    let nineSection = sectionThree.children('div.third');



//    let sectionBtn = $('.action-btn');

   // select first section action btns
//    sectionOne.click(function (e) {
//         e.preventDefault();
//     if($(e.target).hasClass('action-btn')) {
//         console.log(e.target.tagName.toLowerCase());
//     if($(e.target).index() === 0 || $(e.target).is($('ul.proto-list:nth-child(1)'))) {
//         thirdSection.removeClass('active');
//     secondSection.removeClass('active');
//          firstSection.addClass('active');
//        }
//        if($(e.target).index() === 1 || $(e.target).is($('ul.proto-list:nth-child(2)'))) {
//         firstSection.removeClass('active');
//     thirdSection.removeClass('active');
//          secondSection.addClass('active');
//        }
//        if($(e.target).index() === 2 || $(e.target).is($('ul.proto-list:nth-child(3)'))) {
//         firstSection.removeClass('active');
//     secondSection.removeClass('active');
//          thirdSection.addClass('active');
//        }
//      }
//    });



   
//     sectionTwo.click(function (e) {
//         e.preventDefault();
//     if($(e.target).hasClass('action-btn')) {
//         console.log(e.target.tagName.toLowerCase());
//     if($(e.target).index() === 0 || $(e.target).is($('ul.proto-list:nth-child(1)'))) {
//         fiveSection.removeClass('active');
//     sixSection.removeClass('active');
//          fourthSection.addClass('active');
//        }
//        if($(e.target).index() === 1 || $(e.target).is($('ul.proto-list:nth-child(2)'))) {
//         fourthSection.removeClass('active');
//     sixSection.removeClass('active');
//          fiveSection.addClass('active');
//        }
//        if($(e.target).index() === 2 || $(e.target).is($('ul.proto-list:nth-child(3)'))) {
//         fourthSection.removeClass('active');
//     fiveSection.removeClass('active');
//          sixSection.addClass('active');
//        }
//      }
//    });





//    sectionThree.click(function (e) {
//         e.preventDefault();
//     if($(e.target).hasClass('action-btn')) {
//         console.log(e.target.tagName.toLowerCase());
//     if($(e.target).index() === 0 || $(e.target).is($('ul.proto-list:nth-child(1)'))) {
//         eightSection.removeClass('active');
//     nineSection.removeClass('active');
//          sevenSection.addClass('active');
//        }
//        if($(e.target).index() === 1 || $(e.target).is($('ul.proto-list:nth-child(2)'))) {
//         sevenSection.removeClass('active');
//     nineSection.removeClass('active');
//          eightSection.addClass('active');
//        }
//        if($(e.target).index() === 2 || $(e.target).is($('ul.proto-list:nth-child(3)'))) {
//         sevenSection.removeClass('active');
//     eightSection.removeClass('active');
//          nineSection.addClass('active');
//        }
//      }
//    });

   // =========== slider interactions ===============
   let protocols = $('.proto-inner-item');
   function initSlider() {
   let btnsContainer = protocols.eq(0).children().children('.proto-content').children('.content-nav');
   let btnsNav = protocols.eq(0).children().children().children().children('.proto-list');
   let tabsContent = protocols.eq(0).children().children().find('.slide-content');
   let frame = ('.frame1');
   let sly = new Sly(frame,
          {
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBy: 1,
            speed: 800,
            elasticBounds: 1,
            easing: 'swing',
            dragHandle: 1,
            dynamicHandle: 1,
            swingSpeed: 0.1,
            activateMiddle: 1
          }).init();
        setTimeout(function () {
            $('.frame-ul').addClass('setclass');
        }, 50);

        // Update Tabs
        function updateTabs(e, nav, content) {
            e.preventDefault();
            nav.children('li.active').removeClass('active');
            $(e.target).parent('li').addClass('active');
        }

        // Move Slide
        function updateContent(e, cont) {
            let slideContent = protocols.eq(0).find('.slide-content');
            let tlReset = new TimelineMax();
            tlReset.set(slideContent, {autoAlpha: 0});
            // Hide content
            function hideContent(e, cont) {
                let tl = new TimelineMax();
                tl
                    .to(protocols.eq(0).find('.slide-content.active'), .4 , {
                    autoAlpha:0, 
                    ease: Power1.easeOut,
                    onUpdate: removeActive
                });
                //Remove class
                function removeActive() {
                    slideContent.removeClass('active');
                }
            }

            // Show content
            function showContent() { 
                let contentID = $(e.target.hash).attr('id');
                let contentToShow = protocols.eq(0).find('.slide-content#' + contentID);
                let tl = new TimelineMax();
                tl
                .to(contentToShow, .4, {
                    autoAlpha: 1, 
                    ease: Power1.easeOut ,
                    onStart: updateSlide,
                    onUpdate: addActive,
                });
                //Add class
                function addActive() {
                    contentToShow.addClass('active');
                }
                //Update slide position
                function updateSlide() {
                    if(contentID == 'cont-1') { // slide 1
                        sly.slideTo(0);
                    } else if (contentID == 'cont-2') { // slide 2
                        sly.slideTo(300);
                    } else if (contentID == 'cont-3') { // slide 3
                        sly.slideTo(1000);
                    } else {
                        return;
                    }
                }   
            }
            hideContent();
            showContent();
        }

        // Get slide position
        function getPosition() {
            let slideItmes = $('.frame-ul li');
            let activeSlidePos =(sly.rel.activeItem);
            // let slide1 = sly.getPos(slideItmes.eq(0)).start;
            function toSlide(x) {

                let contentToShow = tabsContent.eq(x);

                if (!contentToShow.hasClass('active')) {
                    let tl = new TimelineMax();
                    tl 
                        .to(tabsContent, .4,{ 
                            autoAlpha: 0, 
                            ease: Power1.easeOut,
                            onStart: removeActive,
                            onUpdate: addActive
                        })
                        .to(contentToShow, .4, {
                            autoAlpha: 1, 
                            ease: Power1.easeOut
                        });
                    function removeActive() {
                        tabsContent.removeClass('active');
                    }
                    function addActive() {
                        contentToShow.addClass('active');
                    }
                }
            } 

            if(activeSlidePos <= 0) {
                toSlide(0);
               
            } else if (activeSlidePos == 1 ) {
                toSlide(1);

            } else if (activeSlidePos == 2 ){
                toSlide(2);
            }  
        }

            btnsNav.on("click", "a", (e) => {
                updateTabs(e, btnsNav, tabsContent);
                updateContent(e, tabsContent);
            });
            // control slide items
            sly.on('move', (e) => {
                getPosition(e);
            });

   }

   function initSlider2() {
       let btnsContainer = protocols.eq(1).children().children('.proto-content').children('.content-nav');
       let btnsNav = protocols.eq(1).children().children().children().children('.proto-list');
       let tabsContent = protocols.eq(1).children().children().find('.slide-content');
       let frame = ('#frame2');
       let sly2 = new Sly(frame,
           {
               horizontal: 1,
               itemNav: 'forceCentered',
               smart: 1,
               activateOn: 'click',
               mouseDragging: 1,
               touchDragging: 1,
               releaseSwing: 1,
               startAt: 0,
               scrollBy: 1,
               speed: 800,
               elasticBounds: 1,
               easing: 'swing',
               dragHandle: 1,
               dynamicHandle: 1,
               swingSpeed: 0.1,
               activateMiddle: 1
           }).init();
       
       setTimeout(function () {
           protocols.eq(1).find('.frame-ul').addClass('setclass');
       }, 50);

       // Update Tabs
       function updateTabs(e, nav, content) {
           e.preventDefault();
           nav.children('li.active').removeClass('active');
           $(e.target).parent('li').addClass('active');
       }

       // Move Slide
       function updateContent(e, cont) {
           let slideContent = protocols.eq(1).find('.slide-content');
           let tlReset = new TimelineMax();
           tlReset.set(slideContent, { autoAlpha: 0 });
           // Hide content
           function hideContent(e, cont) {
               let tl = new TimelineMax();
               tl
                   .to(protocols.eq(1).find('.slide-content.active'), .4, {
                       autoAlpha: 0,
                       ease: Power1.easeOut,
                       onUpdate: removeActive
                   });
               //Remove class
               function removeActive() {
                   slideContent.removeClass('active');
               }
           }

           // Show content
           function showContent() {
               let contentID = $(e.target.hash).attr('id');
               let contentToShow = protocols.eq(1).find('.slide-content#' + contentID);
               let tl = new TimelineMax();
               tl
                   .to(contentToShow, .4, {
                       autoAlpha: 1,
                       ease: Power1.easeOut,
                       onStart: updateSlide,
                       onUpdate: addActive,
                   });
               //Add class
               function addActive() {
                   contentToShow.addClass('active');
               }
               //Update slide position
               function updateSlide() {
                   if (contentID == 'cont-4') { // slide 1
                       sly2.slideTo(0);
                   } else if (contentID == 'cont-5') { // slide 2
                       sly2.slideTo(300);
                   } else if (contentID == 'cont-6') { // slide 3
                       sly2.slideTo(1000);
                   } else {
                       return;
                   }
               }
           }
           hideContent();
           showContent();
       }

       // Get slide position
       function getPosition() {
           let slideItmes = protocols.eq(1).find('.frame-ul li');
           let activeSlidePos = (sly2.rel.activeItem);
           // let slide1 = sly.getPos(slideItmes.eq(0)).start;
           function toSlide(x) {

               let contentToShow = tabsContent.eq(x);

               if (!contentToShow.hasClass('active')) {
                   let tl = new TimelineMax();
                   tl
                       .to(tabsContent, .4, {
                           autoAlpha: 0,
                           ease: Power1.easeOut,
                           onStart: removeActive,
                           onUpdate: addActive
                       })
                       .to(contentToShow, .4, {
                           autoAlpha: 1,
                           ease: Power1.easeOut
                       });
                   function removeActive() {
                       tabsContent.removeClass('active');
                   }
                   function addActive() {
                       contentToShow.addClass('active');
                   }
               }
           }

           if (activeSlidePos <= 0) {
               toSlide(0);

           } else if (activeSlidePos == 1) {
               toSlide(1);

           } else if (activeSlidePos == 2) {
               toSlide(2);
           }
       }

       btnsNav.on("click", "a", (e) => {
           updateTabs(e, btnsNav, tabsContent);
           updateContent(e, tabsContent);
       });
       // control slide items
       sly2.on('move', (e) => {
           getPosition(e);
       });

   }

   function initSlider3() {
       let btnsContainer = protocols.eq(2).children().children('.proto-content').children('.content-nav');
       let btnsNav = protocols.eq(2).children().children().children().children('.proto-list');
       let tabsContent = protocols.eq(2).children().children().find('.slide-content');
       let frame = ('#frame3');
       let sly3 = new Sly(frame,
           {
               horizontal: 1,
               itemNav: 'forceCentered',
               smart: 1,
               activateOn: 'click',
               mouseDragging: 1,
               touchDragging: 1,
               releaseSwing: 1,
               startAt: 0,
               scrollBy: 1,
               speed: 800,
               elasticBounds: 1,
               easing: 'swing',
               dragHandle: 1,
               dynamicHandle: 1,
               swingSpeed: 0.1,
               activateMiddle: 1
           }).init();

       setTimeout(function () {
           protocols.eq(2).find('.frame-ul').addClass('setclass');
       }, 50);

       // Update Tabs
       function updateTabs(e, nav, content) {
           e.preventDefault();
           nav.children('li.active').removeClass('active');
           $(e.target).parent('li').addClass('active');
       }

       // Move Slide
       function updateContent(e, cont) {
           let slideContent = protocols.eq(2).find('.slide-content');
           let tlReset = new TimelineMax();
           tlReset.set(slideContent, { autoAlpha: 0 });
           // Hide content
           function hideContent(e, cont) {
               let tl = new TimelineMax();
               tl
                   .to(protocols.eq(2).find('.slide-content.active'), .4, {
                       autoAlpha: 0,
                       ease: Power1.easeOut,
                       onUpdate: removeActive
                   });
               //Remove class
               function removeActive() {
                   slideContent.removeClass('active');
               }
           }

           // Show content
           function showContent() {
               let contentID = $(e.target.hash).attr('id');
               let contentToShow = protocols.eq(2).find('.slide-content#' + contentID);
               let tl = new TimelineMax();
               tl
                   .to(contentToShow, .4, {
                       autoAlpha: 1,
                       ease: Power1.easeOut,
                       onStart: updateSlide,
                       onUpdate: addActive,
                   });
               //Add class
               function addActive() {
                   contentToShow.addClass('active');
               }
               //Update slide position
               function updateSlide() {
                   if (contentID == 'cont-7') { // slide 1
                       sly3.slideTo(0);
                   } else if (contentID == 'cont-8') { // slide 2
                       sly3.slideTo(300);
                   } else if (contentID == 'cont-9') { // slide 3
                       sly3.slideTo(1000);
                   } else {
                       return;
                   }
               }
           }
           hideContent();
           showContent();
       }

       // Get slide position
       function getPosition() {
           let slideItmes = protocols.eq(2).find('.frame-ul li');
           let activeSlidePos = (sly3.rel.activeItem);
           // let slide1 = sly.getPos(slideItmes.eq(0)).start;
           function toSlide(x) {

               let contentToShow = tabsContent.eq(x);

               if (!contentToShow.hasClass('active')) {
                   let tl = new TimelineMax();
                   tl
                       .to(tabsContent, .4, {
                           autoAlpha: 0,
                           ease: Power1.easeOut,
                           onStart: removeActive,
                           onUpdate: addActive
                       })
                       .to(contentToShow, .4, {
                           autoAlpha: 1,
                           ease: Power1.easeOut
                       });
                   function removeActive() {
                       tabsContent.removeClass('active');
                   }
                   function addActive() {
                       contentToShow.addClass('active');
                   }
               }
           }

           if (activeSlidePos <= 0) {
               toSlide(0);

           } else if (activeSlidePos == 1) {
               toSlide(1);

           } else if (activeSlidePos == 2) {
               toSlide(2);
           }
       }

       btnsNav.on("click", "a", (e) => {
           updateTabs(e, btnsNav, tabsContent);
           updateContent(e, tabsContent);
       });
       // control slide items
       sly3.on('move', (e) => {
           getPosition(e);
       });

   }

   // slide 1
   initSlider();
   // slide 2
   initSlider2();
   // slide 3
   initSlider3();

})(jQuery);