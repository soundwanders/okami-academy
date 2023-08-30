"use client";

import React from 'react';

export const Hamburger = ({ onClick }) => (
  <svg
    className="fill-current w-5 md:w-6 h-auto cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    onClick={onClick}
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export const Close = ({ onClick }) => (
  <svg
    className="fill-current w-6 h-auto cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    onClick={onClick}
  >
    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
  </svg>
);
