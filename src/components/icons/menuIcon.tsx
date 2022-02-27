function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#prefix__filter0_d_55_228)'>
        <path
          d='M7.5 6.6h13V5.4h-13v1.2zm13 1.8h-13v1.2h13V8.4zm-13 0a.9.9 0 01-.9-.9H5.4c0 1.16.94 2.1 2.1 2.1V8.4zm13.9-.9a.9.9 0 01-.9.9v1.2a2.1 2.1 0 002.1-2.1h-1.2zm-.9-.9a.9.9 0 01.9.9h1.2a2.1 2.1 0 00-2.1-2.1v1.2zm-13-1.2a2.1 2.1 0 00-2.1 2.1h1.2a.9.9 0 01.9-.9V5.4zm0 7.7h13v-1.2h-13v1.2zm13 1.8h-13v1.2h13v-1.2zm-13 0a.9.9 0 01-.9-.9H5.4c0 1.16.94 2.1 2.1 2.1v-1.2zm13.9-.9a.9.9 0 01-.9.9v1.2a2.1 2.1 0 002.1-2.1h-1.2zm-.9-.9a.9.9 0 01.9.9h1.2a2.1 2.1 0 00-2.1-2.1v1.2zm-13-1.2A2.1 2.1 0 005.4 14h1.2a.9.9 0 01.9-.9v-1.2zm0 7.7h13v-1.2h-13v1.2zm13 1.8h-13v1.2h13v-1.2zm-13 0a.9.9 0 01-.9-.9H5.4c0 1.16.94 2.1 2.1 2.1v-1.2zm13.9-.9a.9.9 0 01-.9.9v1.2a2.1 2.1 0 002.1-2.1h-1.2zm-.9-.9a.9.9 0 01.9.9h1.2a2.1 2.1 0 00-2.1-2.1v1.2zm-13-1.2a2.1 2.1 0 00-2.1 2.1h1.2a.9.9 0 01.9-.9v-1.2z'
          fill='#37DBF3'
        />
      </g>
      <defs>
        <filter
          id='prefix__filter0_d_55_228'
          x={1.4}
          y={2.4}
          width={25.2}
          height={25.2}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix values='0 0 0 0 0.215686 0 0 0 0 0.858824 0 0 0 0 0.952941 0 0 0 0.4 0' />
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_55_228'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_55_228'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
}

export default MenuIcon;
