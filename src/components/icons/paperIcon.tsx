import * as React from 'react';

function PaperIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={30}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#prefix__filter0_d_78_339)'>
        <path
          d='M17.799 22v.5a.5.5 0 00.351-.144L17.8 22zm3.601-3.556l.351.355a.5.5 0 00.149-.355h-.5zM17.789 6v-.5.5zm3.608 3.563h-.5.5zM10.607 6v.5V6zM7 9.563h.5H7zm3.607 12.435v.5-.5zM7 18.433h-.5.5zm3.597-9.38a.5.5 0 100 1v-1zm7.202 1a.5.5 0 100-1v1zm-7.202 1.667a.5.5 0 100 1v-1zm7.202 1a.5.5 0 100-1v1zm-7.202 1.667a.5.5 0 100 1v-1zm3.6 1a.5.5 0 100-1v1zM10.608 6.5c2.394.002 4.788.002 7.182 0v-1c-2.394.002-4.788.002-7.182 0v1zm10.29 3.063c0 2.933.003 5.548.003 8.88h1c0-3.336-.004-5.944-.003-8.88h-1zM17.799 21.5l-7.192-.002v1l7.192.002v-1zM7.5 18.433c.003-3.07.003-5.8 0-8.87h-1c.003 3.07.003 5.8 0 8.87h1zm13.9-.49h-2.7v1h2.7v-1zm-4.101 1.39V22h1v-2.667h-1zm3.75-1.245l-3.601 3.556.702.712 3.601-3.557-.702-.711zm-2.35-.144c-.767 0-1.4.616-1.4 1.389h1c0-.21.173-.39.4-.39v-1zM17.79 6.5c1.722-.001 3.108 1.377 3.108 3.063h1c0-2.25-1.845-4.065-4.109-4.063v1zm-7.182-1C8.344 5.498 6.497 7.314 6.5 9.564l1-.001C7.498 7.877 8.884 6.499 10.607 6.5v-1zm0 15.998c-1.723 0-3.109-1.379-3.107-3.065h-1c-.002 2.25 1.844 4.065 4.107 4.065v-1zm-.01-11.445h7.202v-1h-7.202v1zm0 2.667h7.202v-1h-7.202v1zm0 2.667h3.6v-1h-3.6v1z'
          fill='#37DBF3'
        />
      </g>
      <defs>
        <filter
          id='prefix__filter0_d_78_339'
          x={0.5}
          y={0.5}
          width={27.4}
          height={29}
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
          <feGaussianBlur stdDeviation={3} />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix values='0 0 0 0 0.215686 0 0 0 0 0.858824 0 0 0 0 0.952941 0 0 0 0.6 0' />
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_78_339'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_78_339'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
}

export default PaperIcon;
