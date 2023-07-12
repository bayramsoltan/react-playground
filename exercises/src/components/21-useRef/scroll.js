import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";


const Scroll = () => {
  const refAboutUs = useRef(null);


  useEffect(()=>{ 
    const handleScroll = () => {


        const aboutUsEl = refAboutUs.current;
        const currentScrollPosition = window.scrollY;

        const elScrollPosition = aboutUsEl.offsetTop;
        const currentWindowHeight = window.innerHeight;
        const elCurrentHeight = aboutUsEl.offsetHeight;

        const targetScrollPosition = 
        elScrollPosition - currentWindowHeight + elCurrentHeight;

        if(currentScrollPosition >= targetScrollPosition){
            aboutUsEl.classList.add("active");
        }
    
  }
    document.addEventListener("scroll",handleScroll);
    return()=>{
        document.removeEventListener("scroll",handleScroll);
    }
  },[]);

  return (
    <Container>
      {[...new Array(30)].map((item, index) => (
        <p
          key={index}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius
          eveniet tenetur esse debitis molestiae temporibus! Corrupti pariatur
          voluptas, quod porro autem fuga. Beatae, odit ipsam quisquam corporis
          animi quibusdam!
        </p>
      ))}
        <p
          className="about-us"
          ref={refAboutUs}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius
          eveniet tenetur esse debitis molestiae temporibus! Corrupti pariatur
          voluptas, quod porro autem fuga. Beatae, odit ipsam quisquam corporis
          animi quibusdam!
        </p>
      {[...new Array(30)].map((item, index) => (
        <p
          key={index}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius
          eveniet tenetur esse debitis molestiae temporibus! Corrupti pariatur
          voluptas, quod porro autem fuga. Beatae, odit ipsam quisquam corporis
          animi quibusdam!
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
