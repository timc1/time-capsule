import React from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import {
  screenlg,
  screenmd,
  slideInFromLeft,
} from '../components/shared/styles'

import { keyframes } from '@emotion/core'

export default () => (
  <>
    <Container>
      <Content>
        <h1>About</h1>
        <p>
          This Next Year is a project that enables people to send their future
          selves a letter and receive it one year later.
        </p>
        <p>
          It is part of our initiative to design & develop resources to empower
          others to create.
        </p>
        <h2>Team</h2>
        <ul>
          <li>
            <h3>
              <OutboundLink
                href="/"
                className="new-tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alex Carey
              </OutboundLink>
              <span> - Illustration &amp; Animation</span>
            </h3>
          </li>
          <li>
            <h3>
              <OutboundLink
                href="https://tcc.im?ref=timecapsule"
                className="new-tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tim Chang
              </OutboundLink>
              <span> - Design &amp; Development</span>
            </h3>
          </li>
        </ul>
        <h2>Media</h2>
        <ul>
          <li>
            <p>
              Download brand assets <a href="/">here</a>
            </p>
          </li>
          <li>
            <p>
              View code on{' '}
              <OutboundLink
                href="https://github.com/timc1/time-capsule"
                className="new-tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </OutboundLink>
            </p>
          </li>
        </ul>
        <h2>Contact</h2>
        <p>
          We are always open to collaborating and building products with other
          creators. Shoot us an email{' '}
          <OutboundLink href="mailto:timchang.tcc@gmail.com?subject=Hello!">
            here
          </OutboundLink>
          . Based in Los Angeles.
        </p>
      </Content>
    </Container>

    <Illustration dangerouslySetInnerHTML={createMarkup()} />
  </>
)

const Container = styled.section`
  max-width: ${screenlg}px;
  margin: auto;
  padding: 120px var(--baseborderpadding);

  @media (max-width: ${screenmd}px) {
    padding-top: 80px;
  }
`

const Content = styled.div`
  position: relative;
  max-width: 500px;
  color: var(--black1);
  font-size: var(--fontidk);

  h1 {
    font-size: var(--fontxl);
    font-family: var(--ff-serif);
  }
  h2 {
    position: relative;
    font-size: 1.5rem;
    font-weight: var(--fontbold);
    margin-top: 40px;
    padding-left: 25px;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 2px;
      width: 15px;
      background: var(--black2);
      border-radius: 3px;
    }
  }

  ul,
  li,
  h3,
  p,
  span {
    font-size: inherit;
  }

  a {
    position: relative;
    color: var(--blue);
    font-weight: var(--fontbold);
    font-size: inherit;
    outline: none;
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      height: 2px;
      width: 100%;
      background: var(--black);
      transform: scaleX(0);
      transform-origin: 0;
      transition: transform 0.15s var(--cubic);
      z-index: -1;
    }
    &:hover,
    &:focus {
      &::before {
        transform: scaleX(1);
      }
    }
  }
  .new-tab {
    cursor: ne-resize;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--white);
    z-index: 1;
    animation: ${slideInFromLeft} 0.7s var(--cubic2);
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
    transform-origin: 100%;
  }

  @media (max-width: ${screenmd}px) {
    h1 {
      text-align: center;
    }
  }
`

const fadeIn = keyframes`
  to {
    opacity: 0.1; 
  }
`

const Illustration = styled.div`
  height: auto;
  width: 700px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  opacity: 0;
  @media (max-width: ${screenmd}px) {
    margin-top: 30px;
    max-width: 90vw;
  }
`

const createMarkup = () => ({
  __html: `
<?xml version="1.0" encoding="UTF-8"?>
<svg style="height:100%;transform:translate3d(0px, 0px, 0px);width:100%" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
<defs>
<clipPath id="p">
<rect width="1080" height="1080"/>
</clipPath>
<clipPath id="g">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="k">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="e">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="c">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="l">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="n">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<filter id="q" x="0%" y="0%" width="100%" height="100%">
<feColorMatrix color-interpolation-filters="sRGB" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"/>
</filter>
<mask id="a" mask-type="alpha">
<g filter="url(#q)">
<rect width="1920" height="1920" fill="#fff" opacity="0"/>
<g transform="translate(960 960)" display="block">
<g transform="translate(20.75 -592.5)">
<path d="m13-9.75h-26v19.5h26v-19.5z" fill="#e2e5ed"/>
<path d="m13-9.75h-26v19.5h26v-19.5z" fill-opacity="0" stroke="#282828" stroke-width="0"/>
</g>
</g>
</g>
</mask>
<clipPath id="f">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="j">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="h">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="d">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="i">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="b">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="m">
<path d="m0 0h1920v1920h-1920z"/>
</clipPath>
<clipPath id="o">
<path d="m0 0h500v500h-500z"/>
</clipPath>
</defs>
<g clip-path="url(#p)">
<g transform="translate(-462 -48)" clip-path="url(#g)" display="block">
<g transform="translate(1235.2 72.25)" display="block">
<g transform="translate(171.75 227.25)">
<path d="m66.5 227h-133v-454h133v454z" fill="#e1e4ec"/>
</g>
<g transform="translate(308.53 227.25)">
<path d="m70.279 227h-140.56v-454l136.48 227 4.074 227z" fill="#e1e4ec"/>
</g>
<g transform="translate(53.25 263.25)">
<path d="m53 191l-106 72v-454l106-72v454z" fill="#c5c7ce"/>
</g>
<g transform="translate(51.25 208.25)">
<path d="m34.5 124.33l-69 46.868v-295.53l69-46.868v295.53z" fill="#b3b5bb"/>
</g>
<g transform="translate(68.75 165.25)">
<path d="m4.5 0c0 4.418-2.015 8-4.5 8s-4.5-3.582-4.5-8 2.015-8 4.5-8 4.5 3.582 4.5 8z" fill="#9b9da4"/>
</g>
</g>
<g transform="translate(942 -234)" clip-path="url(#o)" display="block">
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g display="none"/>
<g transform="matrix(.87545 0 0 .87545 249.8 218.15)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.46577 0 0 .46577 246.65 312.8)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.45421 0 0 .45421 253.63 308.51)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.27647 0 0 .27647 248.85 293.23)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.11788 0 0 .11788 253.1 311.49)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.097651 0 0 .097651 244.07 304.03)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.024215 0 0 .024215 248.45 305.48)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(.0020273 0 0 .0020273 245.91 286.27)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(0 0 0 0 252.91 280)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(0 0 0 0 248.41 303)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(0 0 0 0 252.91 285)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
<g transform="matrix(0 0 0 0 243.91 280)" display="block">
<g>
<path d="m-1.5 251v-12.25" fill="#e2e5ed"/>
<path d="m-1.5 251v-12.25" fill-opacity="0" stroke="#e2e5ed" stroke-linecap="round" stroke-width="18"/>
</g>
</g>
</g>
<g transform="translate(695.33 448.05)" display="block">
<g>
<path d="m24.191 10v38.451 63.167" fill-opacity="0" stroke="#9b9da4" stroke-miterlimit="10" stroke-width="4"/>
</g>
<g transform="translate(27.889 81.285)">
<path d="m-17.889 25.333s14.19-50.666 14.19-50.666 21.588 35.334 21.588 35.334" fill-opacity="0" stroke="#9b9da4" stroke-miterlimit="10" stroke-width="4"/>
</g>
</g>
<g transform="matrix(.99265 -.12102 .12102 .99265 651.04 425.22)" display="block">
<g transform="translate(106.99 45.341)">
<path d="m11.98 14.032l-33.584-10.542 5.5-17.522 33.584 10.542s4.124 4.749 2.431 10.141c-1.692 5.391-7.931 7.381-7.931 7.381z" fill="#86888e"/>
</g>
<g transform="translate(101.15 43.508)">
<path d="m11.98 14.032l-33.584-10.542 5.5-17.522 33.584 10.542s4.124 4.749 2.431 10.14c-1.692 5.392-7.931 7.382-7.931 7.382z" fill="#c5c7ce"/>
</g>
<g transform="translate(76.935 35.945)">
<path d="m11.416 16.222l-33.584-10.542 6.875-21.902 33.584 10.542s3.877 5.535 1.762 12.275c-2.116 6.739-8.637 9.627-8.637 9.627z" fill="#c5c7ce"/>
</g>
<g transform="translate(52.76 28.382)">
<path d="m11.04 17.682l-33.584-10.541 7.792-24.823 33.584 10.541s3.712 6.06 1.314 13.698c-2.397 7.638-9.106 11.125-9.106 11.125z" fill="#c5c7ce"/>
</g>
<g transform="translate(30.024 21.277)">
<path d="m10.57 19.508l-33.584-10.542 8.938-28.474 33.584 10.542s3.506 6.716 0.756 15.476c-2.75 8.762-9.694 12.998-9.694 12.998z" fill="#c5c7ce"/>
</g>
<g transform="translate(19.438 17.954)">
<path d="m-2.03-15.727l9.491 2.98s3.507 6.715 0.757 15.476c-2.75 8.761-9.695 12.998-9.695 12.998l-9.491-2.979" fill="#9b9da4"/>
</g>
<g transform="translate(11.479 16.006)">
<path d="m8.761 2.75c-2.468 7.863-8.392 13.006-13.23 11.487-4.839-1.519-6.76-9.124-4.292-16.987 2.468-7.863 8.391-13.006 13.23-11.487 4.838 1.519 6.76 9.124 4.292 16.987z" fill="#e1e4ec"/>
</g>
</g>
<g transform="translate(487.25 249.25)" display="block">
<g transform="translate(1020.5 871.75)">
<path d="m-412.25 798.5h824.5v-1597h-824.5v1597z" fill="#e1e4ec"/>
</g>
<g transform="translate(312.75 872)">
<path d="m-295.5-397.75v1196.5h591v-1597.5l-591 401z" fill="#c5c7ce"/>
</g>
<g transform="translate(920.25 55.25)">
<path d="m320 14h-640v-28h640v28z" fill="#e1e4ec"/>
</g>
<g transform="translate(300.25 257.75)">
<path d="m300-188.5l-600 405v-28l600-405v28z" fill="#c5c7ce"/>
</g>
<g transform="translate(304.25 271.75)">
<path d="m-304 202.5h17l591-401-8-4-600 405z" fill="#b3b5bb"/>
</g>
<g transform="translate(887 71.25)">
<path d="m-286.75-2l8 4h565.5v-4h-573.5z" fill="#c5c7ce"/>
</g>
<g transform="translate(836 215.23)">
<path d="m67.25-119.19c-5.775 0-10.5 4.725-10.5 10.5v25.757h-124c-5.775 0-10.5 4.725-10.5 10.5v181.12c0 5.774 4.725 10.5 10.5 10.5 5.775 0 10.5-4.726 10.5-10.5v-170.62h124c5.775 0 10.5-4.725 10.5-10.5v-36.257c0-5.775-4.725-10.5-10.5-10.5z" fill="#c5c7ce"/>
</g>
<g transform="translate(1045.9 106.54)">
<path d="m-153.13 0c0-5.775 4.725-10.5 10.5-10.5h285.26c5.775 0 10.5 4.725 10.5 10.5s-4.725 10.5-10.5 10.5h-285.26c-5.775 0-10.5-4.725-10.5-10.5z" fill="#c5c7ce"/>
</g>
<g transform="translate(768.25 150.52)">
<path d="m64.455 39.73h-118.41c-0.025997 0-0.044998-0.02-0.044998-0.043999v-95.94c0-0.023998 0.016998-0.042 0.041-0.042999 5.524-0.286 9.959-4.881 9.959-10.473v-52.956c0-5.615-4.452-10.229-10-10.516v-9.528c0-5.775-4.725-10.5-10.5-10.5-5.775 0-10.5 4.725-10.5 10.5v20c0 0.73 0.075996 1.442 0.22 2.131 0.018997 0.091003 0.047997 0.178 0.069 0.268 0.060997 0.255 0.122 0.51 0.201 0.757 0.029999 0.097 0.07 0.189 0.105 0.284 0.083 0.237 0.166 0.473 0.264 0.702 0.038002 0.086998 0.084 0.171 0.125 0.257 0.108 0.231 0.217 0.46 0.341 0.682 0.041 0.073006 0.088005 0.14201 0.13 0.214 0.13499 0.229 0.27299 0.455 0.42599 0.673 0.040001 0.057999 0.084 0.112 0.12601 0.169 0.16399 0.22601 0.334 0.44701 0.514 0.66 0.036995 0.041 0.074997 0.080002 0.111 0.121 0.196 0.222 0.39799 0.437 0.612 0.643 0.027 0.026001 0.057999 0.051003 0.085999 0.078003 0.228 0.214 0.463 0.418 0.709 0.611 0.019997 0.015999 0.040001 0.029999 0.059998 0.044998 0.258 0.2 0.526 0.389 0.803 0.56499 0.010002 0.0070038 0.020996 0.013 0.031998 0.019005 0.288 0.182 0.584 0.35 0.89 0.503 0.003006 9.9945e-4 0.0050049 0.0019989 0.0070038 0.0029984 1.256 0.63 2.651 1.011 4.127 1.087 0 0 9.9945e-4 9.9945e-4 9.9945e-4 9.9945e-4 0.023003 9.9945e-4 0.041 0.018997 0.041 0.042999v31.968c0 0.024002-0.017998 0.042-0.041 0.043007-5.525 0.286-9.959 4.881-9.959 10.473v116.96c0 5.799 4.745 10.544 10.545 10.544h118.41c0.024998 0 0.044998 0.02 0.044998 0.043999v78.089c0 5.478 4.039 10.305 9.493 10.819 6.223 0.588 11.507-4.345 11.507-10.452v-88.956c0-5.799-4.745-10.544-10.545-10.544z" fill="#c5c7ce"/>
</g>
</g>
<g transform="translate(576.25 496.25)" display="block">
<g transform="translate(347.75 382.75)">
<path d="m-94.5 55.5h19l170-107-16-4-173 111z" fill="#c5c7ce"/>
</g>
<g transform="translate(434.25 165.75)">
<path d="m-8-165.5v327l16 4v-331h-16z" fill="#c5c7ce"/>
</g>
<g transform="translate(338.75 219.25)">
<path d="m-85.5 219l-2-318 175-120v327l-173 111z" fill="#b3b5bb"/>
</g>
<g transform="translate(339.25 219.75)">
<path d="m-74-95.5v293l148-93-1-302-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(271.96 270.75)">
<path d="m-6.708-146.5l13 7 0.416 277.57-13.416 8.435v-293z" fill="#9b9da4"/>
</g>
<g transform="translate(338.75 76.75)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(96.75 542.75)">
<path d="m-94.5 55.5h19l170-107-16-4-173 111z" fill="#c5c7ce"/>
</g>
<g transform="translate(183.25 325.75)">
<path d="m-8-165.5v327l16 4v-331h-16z" fill="#c5c7ce"/>
</g>
<g transform="translate(87.75 379.25)">
<path d="m-85.5 219l-2-318 175-120v327l-173 111z" fill="#b3b5bb"/>
</g>
<g transform="translate(88.25 379.75)">
<path d="m-74-95.5v293l148-93-1-302-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(20.966 430.75)">
<path d="m-6.716-146.5l13 7 0.432 277.47-13.432 8.531v-293z" fill="#9b9da4"/>
</g>
<g transform="translate(87.75 236.75)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(347.75 800.75)">
<path d="m-94.5 55.5h19l170-107-16-4-173 111z" fill="#c5c7ce"/>
</g>
<g transform="translate(434.25 583.75)">
<path d="m-8-165.5v327l16 4v-331h-16z" fill="#c5c7ce"/>
</g>
<g transform="translate(338.75 637.25)">
<path d="m-85.5 219l-2-318 175-120v327l-173 111z" fill="#b3b5bb"/>
</g>
<g transform="translate(339.25 637.75)">
<path d="m-74-95.5v293l148-93-1-302-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(271.96 688.75)">
<path d="m-6.708-146.5l13 7 0.416 277.57-13.416 8.435v-293z" fill="#9b9da4"/>
</g>
<g transform="translate(338.75 494.75)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(96.75 960.75)">
<path d="m-94.5 55.5h19l170-107-16-4-173 111z" fill="#c5c7ce"/>
</g>
<g transform="translate(183.25 743.75)">
<path d="m-8-165.5v327l16 4v-331h-16z" fill="#c5c7ce"/>
</g>
<g transform="translate(87.75 797.25)">
<path d="m-85.5 219l-2-318 175-120v327l-173 111z" fill="#b3b5bb"/>
</g>
<g transform="translate(88.25 797.75)">
<path d="m-74-95.5v293l148-93-1-302-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(20.966 848.75)">
<path d="m-6.716-146.5l13 7 0.432 277.47-13.432 8.531v-293z" fill="#9b9da4"/>
</g>
<g transform="translate(87.75 654.75)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(347.75 1217.8)">
<path d="m-94.5 55.5h19l170-107-16-4-173 111z" fill="#c5c7ce"/>
</g>
<g transform="translate(434.25 1000.8)">
<path d="m-8-165.5v327l16 4v-331h-16z" fill="#c5c7ce"/>
</g>
<g transform="translate(338.75 1054.2)">
<path d="m-85.5 219l-2-318 175-120v327l-173 111z" fill="#b3b5bb"/>
</g>
<g transform="translate(339.25 1054.8)">
<path d="m-74-95.5v293l148-93-1-302-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(271.96 1105.8)">
<path d="m-6.708-146.5l13 7 0.416 277.57-13.416 8.435v-293z" fill="#9b9da4"/>
</g>
<g transform="translate(338.75 911.75)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(104.15 1373)">
<path d="m-87.096 50.75h19.286s154.91-97.5 154.91-97.5l-16-4-158.19 101.5z" fill="#c5c7ce"/>
</g>
<g transform="translate(183.25 1160.8)">
<path d="m-8-165.5v327l16 4v-331h-16z" fill="#c5c7ce"/>
</g>
<g transform="translate(87.75 1209.5)">
<path d="m-87.5-94.25s1.94 308.5 1.94 308.5h14.867l158.19-101.5v-327l-175 120z" fill="#b3b5bb"/>
</g>
<g transform="translate(88.25 1214.8)">
<path d="m-74-95.5v293l148-93-1-302-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(20.966 1265.8)">
<path d="m-6.716-146.5l13 7 0.432 277.47-13.432 8.531v-293z" fill="#9b9da4"/>
</g>
<g transform="translate(87.75 1071.8)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(434.25 1338)">
<path d="m-8 85.75h16v-171.5h-16v171.5z" fill="#c5c7ce"/>
</g>
<g transform="translate(338.75 1338)">
<path d="m-87.5 34.251s0.323 51.5 0.323 51.5h174.68v-171.5l-175 120z" fill="#b3b5bb"/>
</g>
<g transform="translate(339 1349)">
<path d="m-73.747 27.25v47.5h147.49l-0.494-149.5-147 102z" fill="#e1e4ec"/>
</g>
<g transform="translate(271.78 1400)">
<path d="m-6.53 23.75h13.06l-0.06-40.5-13-7v47.5z" fill="#9b9da4"/>
</g>
<g transform="translate(338.75 1328.8)">
<path d="m73.5-54.5v18.5l-134 90.5-13-7 147-102z" fill="#9b9da4"/>
</g>
<g transform="translate(183.25 1418)">
<path d="m-8 5.75h16v-11.5h-16v11.5z" fill="#c5c7ce"/>
</g>
<g transform="translate(166.87 1418)">
<path d="m-8.385 5.75h16.77v-11.5l-16.77 11.5z" fill="#b3b5bb"/>
</g>
</g>
<g transform="translate(1186.2 115)" display="block">
<g transform="translate(367 902.38)">
<path d="m-366.75-414.87v1317h733.5v-1804.3l-733.5 487.25z" fill="#c5c7ce"/>
</g>
<g transform="translate(367 252.88)">
<path d="m-366.75 234.63v18l733.5-481.24v-24.009l-733.5 487.25z" fill="#b3b5bb"/>
</g>
<g transform="translate(52.75 524.52)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(69.25 530.02)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(713.2 848.81)">
<path d="m-13-0.474v17.461l25.824-16.42 0.176-17.554-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(725.22 857.15)">
<path d="m-8.525-3.315v17.46l17.05-10.842v-17.447l-17.05 10.829z" fill="#b3b5bb"/>
</g>
<g transform="translate(559.39 1547.6)">
<path d="m-13-0.473v17.46l25.824-16.421 0.176-17.553-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(575.89 1553.1)">
<path d="m-13-0.473v17.46l25.824-16.421 0.176-17.553-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(533.39 639.27)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(549.89 644.77)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(95.25 719.5)">
<path d="m-13-0.474v17.461l25.824-16.421 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(78.75 747.7)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(78.75 713.72)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(554.64 1227.3)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(538.14 1255.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(538.14 1221.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(143 1550.3)">
<path d="m-13-0.473v17.46l25.824-16.421 0.176-17.553-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(126.5 1578.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(126.5 1544.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(423.73 995.49)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(407.23 1023.7)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(407.23 989.71)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(240.75 550.52)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(214.75 567.5)">
<path d="m-13-0.474v17.461l25.824-16.421 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(227.75 541.5)">
<path d="m-13-0.474v17.461l25.824-16.421 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(352.38 766.64)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(326.38 783.63)">
<path d="m-13-0.473v17.46l25.824-16.421 0.176-17.553-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(339.38 757.63)">
<path d="m-13-0.473v17.46l25.824-16.421 0.176-17.553-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(661.88 343.62)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(635.88 360.61)">
<path d="m-13-0.474v17.461l25.824-16.421 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(648.88 334.61)">
<path d="m-13-0.474v17.461l25.824-16.421 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(214.75 1234.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(188.75 1251.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(201.75 1225.5)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.553-26 16.513z" fill="#b3b5bb"/>
</g>
<g transform="translate(436.73 351.02)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(410.73 368)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(423.73 342)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(167.25 938.75)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(141.25 955.74)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
<g transform="translate(154.25 929.74)">
<path d="m-13-0.473v17.46l25.824-16.42 0.176-17.554-26 16.514z" fill="#b3b5bb"/>
</g>
</g>
<g transform="translate(847.25 732.25)" display="block">
<g transform="translate(59.25 76.935)">
<path d="m-58.5-2.129v78.569l116.21-73.89 0.791-78.99-117 74.311z" fill="#b3b5bb"/>
</g>
<g transform="translate(50.75 82.256)">
<path d="m-44-1.601v59.095l87.405-55.576 0.595-59.412-88 55.893z" fill="#9b9da4"/>
</g>
<g transform="translate(67.841 122.68)">
<path d="m-67.591 30.567l18.457 12.632 116.73-73.347-18.473-13.051-116.71 73.766z" fill="#c5c7ce"/>
</g>
<g transform="translate(129.6 46.393)">
<path d="m-12.354-46.143l25 25v63l-6.819 4.286-18.473-13.052s0.292-79.234 0.292-79.234z" fill="#e1e4ec"/>
</g>
</g>
<g clip-path="url(#m)" display="block">
<g transform="translate(960 960)" display="block">
<g>
<path d="m0 0" fill="#f00"/>
<path d="m-90-121.25s-39.643 1.4052-47.649 1.2651c-9.4411-0.16227-35.367-0.052162-35.367-0.052162" fill-opacity="0" stroke="#9b9da5" stroke-width="4"/>
</g>
</g>
</g>
<g transform="translate(8 4)" clip-path="url(#b)" display="block">
<g transform="translate(960 960)" display="block">
<g>
<path d="m0 0" fill="#f00"/>
<path d="m-30.75-175.75s-42.643 0.52715-55.485-0.0080414c-15.148-0.57199-40.756-1.5823-53.382-3.3116" fill-opacity="0" stroke="#9b9da5" stroke-width="4"/>
</g>
</g>
</g>
<g transform="translate(8 -2)" clip-path="url(#i)" display="block">
<g transform="translate(960 960)" display="block">
<g>
<path d="m0 0" fill="#5452ee"/>
<path d="m-64.75-145s-42.497 0.35338-47.5 0.22116c-5.589-0.1322-33.182 0.29681-50.068 0.87555" fill-opacity="0" stroke="#9b9da5" stroke-width="4"/>
</g>
</g>
</g>
<g transform="translate(672.75 940.25)" display="block">
<g transform="translate(3.917 43.522)">
<path d="m3.667 43.272h-7.334v-86.544h7.334v86.544z" fill="#b3b5bb"/>
</g>
</g>
<g transform="matrix(.99153 .12985 -.12985 .99153 661.39 876.95)" display="block">
<g transform="translate(18.157 49.146)">
<path d="m-14.954-35.336c0.917 4.773 4.913 11.01 0.98 18.406-3.933 7.397-3.484 17.007 0.09 20.2 3.575 3.195 4.761 12.523 2.513 17.255-2.248 4.733-4.498 13.008-2.084 20.69 2.414 7.681 13.918 6.006 22.64 3.813 8.722-2.192 7.807-14.208 7.807-14.208-0.623-11.397-7.165-8.275-8.545-17.154-1.719-11.065 2.498-10.729-0.302-18.096-2.8-7.366-7.783-3.617-6.612-15.235 1.17-11.619-5.875-10.629-8.047-17.411-2.171-6.783-10.601-11.82-8.44 1.74z" fill="#9b9da4"/>
</g>
<g transform="translate(16.215 55.03)">
<path d="m3.159 33.856s2.448-6.72 0.18-22.888c-2.268-16.168-5.881-15.469-7.382-25.184-1.501-9.715 1.027-13.711-1.564-19.64" fill-opacity="0" stroke="#e1e4ec" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
</g>
</g>
<g transform="matrix(.99291 .11889 -.11889 .99291 643.24 917.12)" display="block">
<g transform="translate(30.234 45.519)">
<path d="m-2.414 33.349c-9.107-11.92 3.082-12.467-8.28-22.836-7.563-6.902-10.59-8.493-10.15-24.625 0.441-16.133-6.679-16.014-7.909-22.703-1.231-6.689 3.957-8.453 8.859-3.894 2.659 2.473 9.794 10.182 11.139 15.224 1.344 5.042 6.049 12.757 11.108 11.563 5.06-1.196 9.047 4.477 10.326 15.203 1.28 10.724 10.682 6.294 13.994 18.195 3.311 11.901-19.98 25.792-29.087 13.873z" fill="#c5c7ce"/>
</g>
<g transform="translate(29.341 49.811)">
<path d="m14.335 26.531s-4.059-1.872-8.209-14.855c-4.149-12.985-7.589-19.885-11.407-22.288-2.778-1.747-8.03-3.363-9.054-15.919" fill-opacity="0" stroke="#e1e4ec" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
</g>
</g>
<g transform="matrix(.99027 .13913 -.13913 .99027 672.82 887.86)" display="block">
<g transform="translate(21.146 48.062)">
<path d="m10.888 33.922c5.667-13.889-6.24-11.225 2.01-24.208 5.491-8.642 7.998-10.969 3.347-26.423-4.65-15.454 2.252-17.204 1.688-23.982-0.564-6.779-6.034-7.121-9.57-1.439-1.918 3.083-6.786 12.393-6.764 17.611 0.023 5.217-2.496 13.896-7.692 14.068-5.196 0.172-7.559 6.691-5.984 17.377 1.574 10.685-8.662 8.871-8.741 21.224-0.077999 12.353 26.039 19.661 31.706 5.772z" fill="#b3b5bb"/>
</g>
<g transform="translate(24.106 54.339)">
<path d="m-8.036 29.36s3.426-2.87 4.03-16.488c0.605-13.617 2.117-21.177 5.173-24.495 2.223-2.414 6.869-5.349 4.569-17.737" fill-opacity="0" stroke="#e1e4ec" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
</g>
</g>
<g transform="matrix(.98911 .14721 -.14721 .98911 677.31 907.82)" display="block">
<g transform="translate(22.27 48.595)">
<path d="m18.511-35.07c-1.39 4.657-5.992 10.462-2.82 18.216 3.172 7.753 1.762 17.268-2.114 20.089-3.877 2.819-5.991 11.982-4.229 16.916 1.762 4.934 3.172 13.392 0 20.794-3.172 7.4-14.451 4.581-22.909 1.525-8.459-3.055-6.344-14.918-6.344-14.918 1.762-11.278 7.959-7.517 10.221-16.212 2.82-10.837-1.409-10.926 2.115-17.973 3.524-7.049 8.105-2.821 8.105-14.498 0-11.677 6.91-9.986 9.75-16.517 2.841-6.53 11.734-10.697 8.225 2.578z" fill="#c5c7ce"/>
</g>
<g transform="translate(24.04 53.357)">
<path d="m-6.872 33.246s-1.763-6.931 2.113-22.79c3.877-15.859 7.403-14.803 9.869-24.318 2.468-9.516 0.352-13.745 3.524-19.384" fill-opacity="0" stroke="#e1e4ec" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
</g>
</g>
<g clip-path="url(#j)" display="block">
<g transform="translate(16 -127)" clip-path="url(#d)" display="block">
<g transform="matrix(.83613 .54854 -.54854 .83613 866.97 594.23)" display="block">
<g transform="translate(7.699 9.355)">
<path d="m-7.449-4.441l8.258 13.545 6.64-5.36-6.64-12.848-8.258 4.663z" fill="#d1bb9d"/>
</g>
</g>
<g transform="matrix(.99281 .11972 -.11972 .99281 852.43 605.26)" display="block">
<g transform="translate(13 14.578)">
<path d="m0.158-8.999l-10.283 17.952s-2.625 5 0 5.375c3.75-3.875 20.625-18.25 20.625-18.25s2.25-1.75 0.75-3.75c-1.5-2-3.3712-5.9798-3.3712-5.9798s-1.1878 3.8248-7.7208 4.6528z" fill="#fff"/>
</g>
</g>
<g transform="translate(847.42 503.22)" display="block">
<g transform="translate(46.608 47.766)">
<path d="m6.642-45.818s5.39 1.32 17 0c14.329-1.698 22.716-1.087 22.716-1.087l-62.678 42.307-13.871-6.136s-16.167-10.083-1.5-16.75c14.666-6.666 38.333-18.334 38.333-18.334z" fill="#d7cec9"/>
</g>
</g>
<g transform="matrix(.99846 -.055566 .055566 .99846 920.44 1111.1)" display="block">
<g transform="translate(-23 -574)">
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill="#d7cec9"/>
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
<g>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill="#d7cec9"/>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
</g>
</g>
<g transform="translate(14 -129)" clip-path="url(#h)" display="block">
<g transform="matrix(.81121 .58475 -.58475 .81121 870.21 594.78)" display="block">
<g transform="translate(7.699 9.355)">
<path d="m-7.449-4.441l8.258 13.545 6.64-5.36-6.64-12.848-8.258 4.663z" fill="#d1bb9d"/>
</g>
</g>
<g transform="matrix(.95071 .31009 -.31009 .95071 856.45 602.78)" display="block">
<g transform="translate(13 14.578)">
<path d="m0.158-8.999l-10.283 17.952s-2.625 5 0 5.375c3.75-3.875 20.625-18.25 20.625-18.25s2.25-1.75 0.75-3.75c-1.5-2-4.0945-6.4997-4.0945-6.4997s-0.46449 4.3447-6.9975 5.1727z" fill="#fff"/>
</g>
</g>
<g transform="translate(854.42 503.72)" display="block">
<g transform="translate(46.608 47.766)">
<path d="m6.642-45.818s5.39 1.32 17 0c14.329-1.698 22.716-1.087 22.716-1.087l-62.678 42.307-13.871-6.136s-16.167-10.083-1.5-16.75c14.666-6.666 38.333-18.334 38.333-18.334z" fill="#e1dcd8"/>
</g>
</g>
<g transform="matrix(.99993 -.011636 .011636 .99993 902.2 1113.4)" display="block">
<g transform="translate(-23 -574)">
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill="#e1dcd9"/>
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
<g>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill="#e1dcd9"/>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
</g>
</g>
<g transform="matrix(1 .00047215 -.00047215 1 934.4 247)" display="block">
<g transform="translate(7.12 17.5)">
<path d="m-5.307-13.75c0 2.417-0.75 26.5-1.157 28.75-0.406 2.25 13.334 1.667 13.334-0.333 0-2-3.584-28.917-4.834-30.417s-7.343-0.417-7.343 2z" fill="#d1ba9d"/>
</g>
</g>
<g transform="matrix(1 .00047215 -.00047215 1 911.31 271.74)" display="block">
<g transform="translate(25.186 53.5)">
<path d="m12.99-52.971c-11.75 3.833-15.771-0.279-15.771-0.279s-18.571 67.388-19.213 105.97c12.322 3.459 30.931-0.23 46.93-2.397 0 0-3.696-37.966-11.946-103.3z" fill="#0a0ad2"/>
</g>
</g>
<g transform="matrix(1 .00047215 -.00047215 1 937.46 292.06)" display="block">
<g transform="translate(16.287 38.745)">
<path d="m-16.037-31.142l21.818 63.344s10.257 6.293 9.607 1.752c-0.81-5.669-17.26-72.449-17.26-72.449s-14.165 7.353-14.165 7.353z" fill="#d1ba9d"/>
</g>
</g>
<g transform="matrix(.99952 -.030949 .030949 .99952 918.41 218.11)" display="block">
<g transform="translate(19.111 24.291)">
<path d="m-0.372-18.236s-18.489 36.188-11.421 39.232c7.068 3.045 19.229-5.041 24.013-11.531 4.785-6.492 6.642-15.593 5.443-21.724-1.174-6.008-13.829-11.782-18.035-5.977z" fill="#d1ba9d"/>
</g>
</g>
<g transform="matrix(.99952 -.030949 .030949 .99952 929.23 217.57)" display="block">
<g transform="translate(18.57 19.415)">
<path d="m-3.191-18.959s-15.129 4.275-2.249 9.966c2.365 0.784 2.726 2.483 0.453 8.226-1.705 3.473 4.841 5.467 5.636 7.837 0.795 2.371-4.688 10.868-3.804 11.481 0.883 0.613 3.087 0.222 6.244-2.946 3.157-3.167 15.231-25.328 3.366-31.367-5.035-3.403-9.646-3.197-9.646-3.197z"/>
</g>
</g>
<g transform="matrix(1 .00047215 -.00047215 1 933.17 279.71)" display="block">
<g transform="translate(13.332 18.047)">
<path d="m-13.082-11.631l7.287 29.427 18.877-7.552-9.211-28.04-16.953 6.165z" fill="#0a0ad2"/>
</g>
</g>
</g>
<g clip-path="url(#k)" display="block">
<g display="block" mask="url(#a)">
<g transform="matrix(-.10881 .99406 -.99406 -.10881 1366.7 -691.91)" clip-path="url(#f)">
<g transform="matrix(-.38144 -.92439 .92439 -.38144 972.53 372.33)" display="block">
<g transform="translate(11.657 10.486)">
<path d="m8.218-0.278c-3.189-1.495-10.958-5-16.625-8.583-3-1.375-2.744 1.588-1.618 2.406 1.126 0.818 9.17 6.469 7.253 7.302-0.511 0.217-1.39 0.457-2.593 0.375 0 0-1.625 0.25-1.188 2 0.438 1.75 2.625 2.937 5 3.312 2.375 0.375 6.888-0.451 8.875 1.626 0.31546 0.32982 2.4833 1.4363 2.7814 1.2757 1.3561-0.69022 3.1217-5.4637 1.3585-7.8497-0.29965-0.40514-2.8553-1.6816-3.2439-1.864z" fill="#b99f78"/>
</g>
</g>
</g>
</g>
<g display="block">
<g transform="translate(924.78 245.3)">
<g/>
<g/>
<g transform="translate(-135)"/>
</g>
<g>
<g transform="translate(924.78 245.3)">
<path d="m0 0s25.48 7.48 30.89 9c5.31 1.49 30.16 8.12 31.04 8.36" fill-opacity="0" stroke="#e1dcd9" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"/>
</g>
</g>
</g>
<g transform="translate(4.5 2.5)" clip-path="url(#n)" display="block">
<g transform="matrix(.87703 .48043 -.48043 .87703 929.63 431.87)" display="block">
<g transform="translate(7.699 9.355)">
<path d="m-7.449-4.441l8.258 13.545 6.64-5.36-6.64-12.848-8.258 4.663z" fill="#b99f78"/>
</g>
</g>
<g transform="matrix(.99754 .070103 -.070103 .99754 916.16 443.52)" display="block">
<g transform="translate(13 14.578)">
<path d="m0.158-8.999l-10.283 17.952s-2.625 5 0 5.375c3.75-3.875 20.625-18.25 20.625-18.25s2.25-1.75 0.75-3.75c-1.5-2-3.1616-5.8291-3.1616-5.8291s-1.3974 3.6741-7.9304 4.5021z" fill="#fff"/>
</g>
</g>
<g transform="matrix(.99089 -.13465 .13465 .99089 1023.8 942.84)" display="block">
<g transform="translate(-23 -574)">
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill="#e5191e"/>
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
<g>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill="#e5191e"/>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
</g>
<g transform="translate(905.42 341.22)" display="block">
<g transform="translate(46.608 47.766)">
<path d="m6.642-45.818s5.39 1.32 17 0c14.329-1.698 22.716-1.087 22.716-1.087l-62.678 42.307-13.871-6.136s-16.167-10.083-1.5-16.75c14.666-6.666 38.333-18.334 38.333-18.334z" fill="#e5191e"/>
</g>
</g>
</g>
<g clip-path="url(#l)" display="block">
<g transform="matrix(.78377 .62105 -.62105 .78377 926.07 434.58)" display="block">
<g transform="translate(7.699 9.355)">
<path d="m-7.449-4.441l8.258 13.545 6.64-5.36-6.64-12.848-8.258 4.663z" fill="#b99f78"/>
</g>
</g>
<g transform="matrix(.84902 .52836 -.52836 .84902 914.21 439.3)" display="block">
<g transform="translate(13 14.578)">
<path d="m0.158-8.999l-10.283 17.952s-2.625 5 0 5.375c3.75-3.875 20.625-18.25 20.625-18.25s2.25-1.75 0.75-3.75c-1.5-2-3.5814-6.1309-3.5814-6.1309s-0.97757 3.9759-7.5106 4.8039z" fill="#fff"/>
</g>
</g>
<g transform="matrix(.99943 .033873 -.033873 .99943 935.99 954.22)" display="block">
<g transform="translate(-23 -574)">
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill="#df484c"/>
<path d="m0-14.75c8.1408 0 14.75 6.6097 14.75 14.75s-6.6097 14.75-14.75 14.75-14.75-6.6097-14.75-14.75 6.6097-14.75 14.75-14.75z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
<g>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill="#df484c"/>
<path d="m-37.513-574.2s2.988 61.825 2.988 61.825 18.793 0.79599 18.793 0.79599l7.338-61.816s-29.119-0.80499-29.119-0.80499z" fill-opacity="0" stroke="#a2a5ae" stroke-width="0"/>
</g>
</g>
<g transform="translate(914.42 343.72)" display="block">
<g transform="translate(46.608 47.766)">
<path d="m6.642-45.818s5.39 1.32 17 0c14.329-1.698 22.716-1.087 22.716-1.087l-62.678 42.307-13.871-6.136s-16.167-10.083-1.5-16.75c14.666-6.666 38.333-18.334 38.333-18.334z" fill="#df484c"/>
</g>
</g>
</g>
<g transform="matrix(1 .00029522 -.00029522 1 980.38 216)" display="block">
<g transform="translate(7.119 17.5)">
<path d="m-5.307-13.75c0 2.417-0.75 26.5-1.156 28.75-0.406 2.25 13.332 1.667 13.332-0.333 0-2-3.582-28.917-4.832-30.417-1.25-1.5-7.344-0.417-7.344 2z" fill="#b99f78"/>
</g>
</g>
<g transform="matrix(1 .00029522 -.00029522 1 957.29 240.74)" display="block">
<g transform="translate(25.186 53.5)">
<path d="m13.886-53.25c-11.75 3.833-16.666 0-16.666 0s-18.513 69.648-19.594 103.02c-0.123 2.017 0.554 2.709 1.6 2.918 12.305 2.463 30.964-0.366 45.71-2.363 0 0-2.8-38.245-11.05-103.58z" fill="#e1dcd9"/>
</g>
<g>
<path d="m21.239 92.25" fill="#e1dcd9"/>
<path d="m21.239 92.25" fill-opacity="0" stroke="#000" stroke-width="35"/>
</g>
</g>
<g clip-path="url(#c)" display="block">
<g transform="translate(1005.5 326.76)" display="block">
<g transform="translate(5.796 13.875)">
<path d="m5.546-2.488c-0.666-2.311-0.144-4.831-2.331-8.643-1.43-2.493-8.019-0.761-8.023 2.761-0.0039997 3.522-1.2319 11.942-2.0799 18.593 0.025 3.299 2.602 1.811 2.865 0.445 0.265-1.366 3.0549-11.199 4.6219-9.8158" fill="#b99f78"/>
</g>
</g>
</g>
<g transform="translate(984.42 261.06)" display="block">
<g transform="translate(16.287 38.745)">
<path d="m-16.037-31.142l21.818 63.344s10.256 6.293 9.607 1.752c-0.811-5.669-17.26-72.449-17.26-72.449s-14.165 7.353-14.165 7.353z" fill="#b99f78"/>
</g>
</g>
<g transform="translate(978.49 248.85)" display="block">
<g transform="translate(19.282 40.693)">
<path d="m-19.032-26.874c3.401 3.167 22.932 64 24.432 65.659 1.5 1.658 4-1.159 5-2.159s3-1.333 4.833-1.333c1.833 0 2.833 1.5 3.799-2.334 0 0-10.109-59.554-22.829-76.152" fill="#e1dcd9"/>
</g>
</g>
<g transform="matrix(.96605 .25836 -.25836 .96605 969.41 175.2)" display="block">
<g transform="translate(16.922 29.264)">
<path d="m-14.198-7.284s-2.474 34.964 5.193 35.63c7.667 0.667 20.677-10.86 23.177-18.527 2.5-7.667 2.012-17.284-1.666-22.333-12.019-16.5-24.537-1.603-26.704 5.23z" fill="#b99f78"/>
</g>
</g>
<g transform="matrix(.96605 .25836 -.25836 .96605 971.58 176.66)" display="block">
<g transform="translate(32.102 21.545)">
<path d="m-5.148-20.145c-3.867-1.15-10.71-0.406-17.037 3.523-7.917 4.917-9.667 16.208-9.667 16.208s6.25-8.875 9.75-6.375c3.5 2.5 1.893 7.75 4.571 10.5 1.179 2.175 3.179 2.667 5.414 1 0 0 3.8-5.416 6.782-1.583 2.983 3.833 0.851 4.833 0 5.5-0.85 0.667-4.517 1.088-1.35 5.627 3.166 4.539 7.024 2.916 12.541 4.623 5.517 1.707 5.642-2.107 12.567 1.828 10.219 5.806 19.165-22.678 12.578-27.663-21.254-16.083-36.149-13.188-36.149-13.188z"/>
</g>
</g>
<g transform="matrix(.9512 .30856 -.30856 .9512 110.83 -288.36)" clip-path="url(#e)" display="block">
<g transform="translate(960 960)" display="block">
<g>
<path d="m60-775s-21 27.75-21 27.75 22.891 12.926 27.348 14.947c6.916 2.748 20.425-2.3235 23.703-9.2946 3.278-6.972 1.9785-15.367-2.6981-18.357-5.76-3.4662-27.353-15.045-27.353-15.045z"/>
<path d="m60-775s-21 27.75-21 27.75 22.891 12.926 27.348 14.947c6.916 2.748 20.425-2.3235 23.703-9.2946 3.278-6.972 1.9785-15.367-2.6981-18.357-5.76-3.4662-27.353-15.045-27.353-15.045z" fill-opacity="0" stroke="#3961ff" stroke-width="0"/>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
`,
})
