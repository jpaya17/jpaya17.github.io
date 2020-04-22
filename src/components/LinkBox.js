import React from 'react';

function LinkBox(props) {
  return (
    <div className="linkbox-container">
      {style}
      {!props.showArrow ? centeredTitle : null}
    </div>
  );
}

const style = (
  <style jsx>{`
    .linkbox-container {
      position: relative;
      z-index: 10;
    }
    .text-box-container {
      margin-top: 1rem;
      display: flex;
      cursor: "pointer";
    }
    .text-box {
      color: white;
      font-family: var(--font3);
      border: var(--line-width) solid white;
      font-size: 1.3rem;
      width: 11rem;
      height: 3rem;
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }
    .text-box:hover {
      text-decoration: underline;
    }

    .arrow-box {
      border-width: var(--line-width) var(--line-width) var(--line-width) 0;
      width: 5rem;
      border-style: solid;
      border-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      padding-left: 2rem;
    }
    .arrow {
      width: 2rem;
      height: auto;
    }
    @media (min-width: 801px) {
      .text-box-container {
        margin-top: 1rem;
      }
      .text-box {
        width: 11rem;
        height: 3rem;
        font-size: 1.4rem;
      }
      .text {
        padding-left: 2rem;
      }
    }
  `}</style>
);

const centeredTitle = (
  <style jsx>{`
    .text-box {
      justify-content: center;
      width: 80vw;
    }
    .text {
      padding-left: 0;
      font-size: 1.2rem;
    }
    @media (min-width: 801px) {
      .text-box-container {
        margin-left: var(--desktop-padding);
        margin-right: var(--desktop-padding);
      }
    }
  `}</style>
);

export default LinkBox;
