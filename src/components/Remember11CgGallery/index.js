import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al01a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al01b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02d.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02e.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02f.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02g.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02h.png",
  },

  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_al02i.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha01.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha02a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha02b.png",
  },

  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha03a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha03b.png",
  },

  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha03c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha03d.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha03e.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha03f.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha04.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha05.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha06.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha07.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha08.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha09.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha10a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha10b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha11.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha12.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha13a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha13b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha14.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha15a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha15b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ha15c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz01.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz02.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz03.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz04.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz05.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz06a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz06b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz07A.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz07b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz08.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz09a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz09b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz10.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz11a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz11b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz12.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz13.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_iz14.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku01.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku02.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku03.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku04.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku05.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku06a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku06b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku07.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku08.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku09.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku10.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku11a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku11b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku12.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ku13.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky03a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky03b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky04a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky04b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky04c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky05.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_ky06.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa01.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa02a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa02b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa02c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa02d.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa03.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa04.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa05.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa06a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa06b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa07.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa08.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa09.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa10.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa11.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa12a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa12b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa13.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa14a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa14b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_sa14c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu01.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu02.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu03a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu03b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu04a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu04b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu05.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu06.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu07.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu08a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu08b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu09a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu09b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu10.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu11a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu11b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu12.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu13.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu14a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu14b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu14c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu14d.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu15a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu15b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu15c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu16a.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu16b.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu16c.png",
  },
  {
    original: "https://dggwv1n7k10fk.cloudfront.net/cgs/never7/ev_yu17.png",
  },
];

export default function Remember11CgGallery() {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
      showIndex={true}
      slideDuration={150}
      lazyLoad={true}
    />
  );
}
