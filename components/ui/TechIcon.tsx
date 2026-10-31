'use client';

import React, { useState } from 'react';

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const ICON_MAP: Record<string, string> = {
  python: 'python.svg',
  py: 'python.svg',
  typescript: 'typescript.svg',
  ts: 'typescript.svg',
  javascript: 'javascript.svg',
  js: 'javascript.svg',
  javascriptes6: 'javascript.svg',
  java: 'java.svg',
  c: 'c.svg',
  cpp: 'cpp.svg',
  cplusplus: 'cpp.svg',
  php: 'php.svg',
  sql: 'sql.svg',
  react: 'react.svg',
  reactjs: 'react.svg',
  reactnative: 'reactnative.svg',
  nextjs: 'nextjs.svg',
  next: 'nextjs.svg',
  html5: 'html5.svg',
  html: 'html5.svg',
  css3: 'css3.svg',
  css: 'css3.svg',
  tailwind: 'tailwind.svg',
  tailwindcss: 'tailwind.svg',
  bootstrap: 'bootstrap.svg',
  springboot: 'springboot.svg',
  spring: 'springboot.svg',
  nodejs: 'nodejs.svg',
  node: 'nodejs.svg',
  express: 'express.svg',
  expressjs: 'express.svg',
  rest: 'rest.svg',
  restapi: 'rest.svg',
  restapis: 'rest.svg',
  jwt: 'jwt.svg',
  jwtauthentication: 'jwt.svg',
  postgresql: 'postgresql.svg',
  postgres: 'postgresql.svg',
  mysql: 'mysql.svg',
  mongodb: 'mongodb.svg',
  mongo: 'mongodb.svg',
  sqlite: 'sqlite.svg',
  supabase: 'supabase.svg',
  firebase: 'firebase.svg',
  docker: 'docker.svg',
  git: 'git.svg',
  github: 'github.svg',
  cicd: 'cicd.svg',
  cicdpipelines: 'cicd.svg',
  linux: 'linux.svg',
  vercel: 'vercel.svg',
  aws: 'aws.svg',
  postman: 'postman.svg',
  vscode: 'vscode.svg',
  intellij: 'intellij.svg',
  intellijidea: 'intellij.svg',
  expo: 'expo.svg',
  figma: 'figma.svg',
  figmauiux: 'figma.svg',
  arduino: 'arduino.svg',
  opengl: 'opengl.svg',
  webassembly: 'webassembly.svg',
  wasm: 'webassembly.svg',
  embedded: 'embedded.svg',
  embeddedsystems: 'embedded.svg',
  microcontroller: 'embedded.svg',
  iot: 'iot.svg',
  iottelemetry: 'iot.svg',
  uml: 'uml.svg',
  umlmodeling: 'uml.svg',
  responsive: 'responsive.svg',
  responsiveui: 'responsive.svg',
  designsystems: 'designsystems.svg',
  oop: 'oop.svg',
  objectorientedprogramming: 'oop.svg',
};

export function TechIcon({ name, className = '', size = 28 }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const iconFile = ICON_MAP[normalized] || `${normalized}.svg`;
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="none"
        stroke="#D4FF00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/icons/tech/${iconFile}`}
      alt=""
      width={size}
      height={size}
      className={`tech-icon-img ${className}`}
      loading="lazy"
      onError={() => setHasError(true)}
      aria-hidden="true"
    />
  );
}
