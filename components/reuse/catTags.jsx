"use client"
import React, { useState, useRef, useEffect } from 'react';

const ScrollableTabsContainer = () => {
  const tabsRef = useRef(null);
  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const tabsListRef = useRef(null);
  const leftArrowContainerRef = useRef(null);
  const rightArrowContainerRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  const removeAllActiveClasses = () => {
    const tabs = tabsRef.current.querySelectorAll("a");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  };

  useEffect(() => {
    const tabs = tabsRef.current.querySelectorAll("a");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
      });
    });

    const manageIcons = () => {
      if (tabsListRef.current.scrollLeft >= 20) {
        leftArrowContainerRef.current.classList.add("active");
      } else {
        leftArrowContainerRef.current.classList.remove("active");
      }

      let maxScrollValue = tabsListRef.current.scrollWidth - tabsListRef.current.clientWidth - 20;

      if (tabsListRef.current.scrollLeft >= maxScrollValue) {
        rightArrowContainerRef.current.classList.remove("active");
      } else {
        rightArrowContainerRef.current.classList.add("active");
      }
    };

    const handleRightArrowClick = () => {
      tabsListRef.current.scrollLeft += 200;
      manageIcons();
    };

    const handleLeftArrowClick = () => {
      tabsListRef.current.scrollLeft -= 200;
      manageIcons();
    };

    rightArrowRef.current.addEventListener("click", handleRightArrowClick);
    leftArrowRef.current.addEventListener("click", handleLeftArrowClick);
    tabsListRef.current.addEventListener("scroll", manageIcons);

    const handleDrag = (e) => {
      if (!dragging) return;
      tabsListRef.current.classList.add("dragging");
      tabsListRef.current.scrollLeft -= e.movementX;
    };

    const handleMouseDown = () => {
      setDragging(true);
    };

    const handleMouseUp = () => {
      setDragging(false);
      tabsListRef.current.classList.remove("dragging");
    };

    tabsListRef.current.addEventListener("mousedown", handleMouseDown);
    tabsListRef.current.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", () => {
          removeAllActiveClasses();
          tab.classList.add("active");
        });
      });

      if (rightArrowRef.current) {
        rightArrowRef.current.removeEventListener("click", handleRightArrowClick);
      }
      if (leftArrowRef.current) {
        leftArrowRef.current.removeEventListener("click", handleLeftArrowClick);
      }
      if (tabsListRef.current) {
        tabsListRef.current.removeEventListener("scroll", manageIcons);
        tabsListRef.current.removeEventListener("mousedown", handleMouseDown);
        tabsListRef.current.removeEventListener("mousemove", handleDrag);
      }
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);







  useEffect(() => {
    const scrollToTarget = (hash) => {
      const targetElement = document.querySelector(`.${hash}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        targetElement.classList.add('outline-highlight');
        setTimeout(() => {
          targetElement.classList.remove('outline-highlight');
        }, 5000);
      }
    };

    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      scrollToTarget(hash);
      history.replaceState(null, null, ' ');
    }
  }, []);

  const handleLinkClick = (hash) => {
    scrollToTarget(hash);
  };

  const scrollToTarget = (hash) => {
    const targetElement = document.querySelector(`.${hash}`);
    if (targetElement) {
      const offset = targetElement.offsetTop - 20;
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.scrollBy(0, offset); 
      targetElement.classList.add('outline-highlight');
      setTimeout(() => {
        if (targetElement.classList) {
          targetElement.classList.remove('outline-highlight');
        }
      }, 5000);
    } else {
      console.error(`Element with class ${hash} not found.`);
    }
  };
  


  

  return (
    <div className="scrollable-tabs-container" ref={tabsRef}>
      <div className="left-arrow" ref={leftArrowContainerRef}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" ref={leftArrowRef}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      <ul ref={tabsListRef}>
        <li>
          <a href="#" className="active">All Comps</a>
        </li>
        <li>
          <a href="#LoadingUI" onClick={() => handleLinkClick('LoadingUI')}>Loading UI</a>
        </li>
        <li>
          <a href="#Nav-v1" onClick={() => handleLinkClick('Nav-v1')}>Navigation v1</a>
        </li>
        <li>
          <a href="#Nav-v2" onClick={() => handleLinkClick('Nav-v2')}>Navigation v2</a>
        </li>
        <li>
          <a href="#Btn-v1" onClick={() => handleLinkClick('Btn-v1')}>Button v1</a>
        </li>
        <li>
          <a href="#Btn-v2" onClick={() => handleLinkClick('Btn-v2')}>Button v2</a>
        </li>
        <li>
          <a href="#Hov-on" onClick={() => handleLinkClick('Hov-on')}>Hover on</a>
        </li>
        <li>
          <a href="#Tooltip" onClick={() => handleLinkClick('Tooltip')}>Tooltip</a>
        </li>
        <li>
          <a href="#Dropdown" onClick={() => handleLinkClick('Dropdown')}>Dropdown</a>
        </li>
        <li>
          <a href="#Accordion" onClick={() => handleLinkClick('Accordion')}>Accordion</a>
        </li>
        <li>
          <a href="#Carousel" onClick={() => handleLinkClick('Carousel')}>Carousel</a>
        </li>
        <li>
          <a href="#Popup" onClick={() => handleLinkClick('Popup')}>Popup</a>
        </li>
        <li>
          <a href="#Gallery" onClick={() => handleLinkClick('Gallery')}>Gallery</a>
        </li>
        <li>
          <a href="#Form" onClick={() => handleLinkClick('Form')}>Form</a>
        </li>
        <li>
          <a href="#Widget" onClick={() => handleLinkClick('Widget')}>Widget</a>
        </li>
        <li>
          <a href="#Animation" onClick={() => handleLinkClick('Animation')}>Animation</a>
        </li>
        <li>
          <a href="#Screen" onClick={() => handleLinkClick('Screen')}>Screen</a>
        </li>
      </ul>

      <div className="right-arrow active" ref={rightArrowContainerRef}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" ref={rightArrowRef}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollableTabsContainer;

