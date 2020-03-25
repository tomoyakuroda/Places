document.addEventListener("DOMContentLoaded", () => {
  // let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline
    .from(".title h1", 1, {
      y: 100,
      opacity: 0,
      delay: 0.2
    })
    .from(
      ".title h5",
      1,
      {
        y: 30,
        opacity: 0
      },
      "-=.5"
    );
  // .to(
  //   "#first",
  //   6,
  //   {
  //     y: -100
  //   },
  //   "-=6"
  // )
  // .to(
  //   ".content, .blur",
  //   6,
  //   {
  //     top: "0%"
  //   },
  //   "-=6"
  // )
  // .to(
  //   ".title, nav, ",
  //   6,
  //   {
  //     y: -600
  //   },
  //   "-=6"
  // );

  // let scene = new ScrollMagic.Scene({
  //   triggerElement: "section",
  //   duration: "200%",
  //   triggerHook: 0
  // })
  //   .setTween(timeline)
  //   .setPin("section")
  //   .addTo(controller);

  AOS.init();
});
