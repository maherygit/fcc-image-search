import React from "react";
import "./image.css";

/*
title: 'Martial Art of the Month: Silat - Kung-fu Kingdom',
type: 'image',
media: 'http://kungfukingdom.com/wp-content/uploads/2015/11/The-Silat-matchup-begins.jpg',
desc: '',
thumbnail: '//s1.qwant.com/thumbr/300x200/0/a/25088508e694e0c24465b6c2961caefdfafa62984160fa17e906e87aa70594/The-Silat-matchup-begins.jpg?u=http%3A%2F%2Fkungfukingdom.com%2Fwp-content%2Fuploads%2F2015%2F11%2FThe-Silat-matchup-begins.jpg&q=0&b=1&p=0&a=0&b_id=OIP.KY13cVu400uCPAmlPnoKoAHaE7',
thumb_width: 300,
thumb_height: 200,
width: '1000',
height: '665',
size: '314985',
url: 'http://kungfukingdom.com/martial-art-of-the-month-silat/',
_id: 'b9e6dda0f1a6129d19ee66b405d3fa4f',
b_id: 'OIP.KY13cVu400uCPAmlPnoKoAHaE7',
media_fullsize: '//s1.qwant.com/thumbr/0x0/1/2/d9713a911f07db2c4d6c484179da1d1de86f6c3464cd33a31cc66ff1f4a051/The-Silat-matchup-begins.jpg?u=http%3A%2F%2Fkungfukingdom.com%2Fwp-content%2Fuploads%2F2015%2F11%2FThe-Silat-matchup-begins.jpg&q=0&b=1&p=0&a=1',
thumb_type: 'jpg',
count: 0,
media_preview: '//s2.qwant.com/thumbr/0x380/e/5/4ce97f600a4e09cbccb6f10e06a06a565bf183324e6dc36cee528f280e894b/The-Silat-matchup-begins.jpg?u=http%3A%2F%2Fkungfukingdom.com%2Fwp-content%2Fuploads%2F2015%2F11%2FThe-Silat-matchup-begins.jpg&q=0&b=1&p=0&a=1' 

---------------
_id: "e53890a61d5d2df22eba2f7bbd35c06b"
b_id: "OIP._EGUqFHTcfvBHcrbsY-MbAHaFo"
count: 1
desc: ""
height: "794"
media: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Test.svg/1009px-Test.svg.png"
media_fullsize: "//s1.qwant.com/thumbr/0x0/a/f/0939e69bedb0557cecf3a9d297a082f0e0ccc90176f90c73671896492e1c3e/1009px-Test.svg.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbd%2FTest.svg%2F1009px-Test.svg.png&q=0&b=1&p=0&a=1"
media_preview: "//s1.qwant.com/thumbr/0x380/a/7/896dc4b68d6c872eec2192c908ed860ed56c85e32e9f236e3c7d6861d412dc/1009px-Test.svg.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbd%2FTest.svg%2F1009px-Test.svg.png&q=0&b=1&p=0&a=1"
size: "55546"
thumb_height: 200
thumb_type: "png"
thumb_width: 254
thumbnail: "//s2.qwant.com/thumbr/254x200/7/c/eab3de54b85fa8f8c9e3979e17987670433b7a75903d3539987e01587ff905/1009px-Test.svg.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbd%2FTest.svg%2F1009px-Test.svg.png&q=0&b=1&p=0&a=0&b_id=OIP._EGUqFHTcfvBHcrbsY-MbAHaFo"
title: "File:Test.svg - Wikipedia"
type: "image"
url: "https://en.wikipedia.org/wiki/File:Test.svg"
width: "1009"

*/

const Image = ({ image }) => {
  return (
    <figure className="image__figure">
      <a
        className="image__link"
        href={image.media}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="image__thumbnail"
          src={image.thumbnail}
          alt={image.title}
        />
        <figcaption className="image__description">
          {image.desc || image.title}
        </figcaption>
      </a>
    </figure>
  );
};

export default Image;
