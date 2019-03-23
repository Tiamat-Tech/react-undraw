import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawHappyWomenDay = _props => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign(
    {
      height: props.height || defaultProps.height,
      width: '100%'
    },
    props.style
  );
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return (
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1106 783.429" style={style} {...props}>
      <path
        d="M855.085 309.387C810.168 132.765 654.968 5.269 472.796.156 376.488-2.548 275.144 29.393 201.36 141.168c-131.9 199.808 8.105 337.882 105.713 403.492a610.757 610.757 0 0 1 126.241 113.465c65.931 78.238 192.767 175.459 343.824 23.128 109.485-110.41 107.866-254.219 77.948-371.866z"
        fill="#f2f2f2"
      />
      <ellipse cx={553} cy={751.429} rx={553} ry={32} fill="#3f3d56" />
      <ellipse cx={199} cy={746.429} rx={117} ry={14} opacity={0.1} />
      <ellipse cx={898} cy={752.429} rx={117} ry={14} opacity={0.1} />
      <path
        d="M708.091 141.74C652.201 121.96 597.041 121.16 553 153.13c-44.04-31.969-99.202-31.169-155.091-11.39-89.395 31.636-146.801 99.846-103.661 221.748 40.18 113.54 230.96 206.166 256.945 218.339.44.895.674 1.36.674 1.36s.393-.178 1.133-.52c.74.342 1.133.52 1.133.52s.233-.465.674-1.36c25.985-12.173 216.764-104.799 256.945-218.34 43.14-121.901-14.266-190.111-103.66-221.747z"
        fill={primaryColor}
      />
      <path
        fill="#3f3d56"
        d="M616 355.429l-51.609 98.148-2.436-64.19L585 328.429l-23.561 47.355-3.292-86.743L589 207.429l-31.545 63.399L553 153.429l-7.385 194.588L478 219.429l67.223 138.927-3.816 100.542L487 355.429l54.091 111.789L533 680.429h40l-8.31-218.96L616 355.429z"
      />
      <path
        d="M745 710.664c0 62.194-86.691 42.957-192.835 42.957s-191.548 19.237-191.548-42.957 86.68-75.72 192.824-75.72S745 648.47 745 710.663z"
        opacity={0.1}
      />
      <path
        d="M745 695.35c0 62.194-86.691 42.957-192.835 42.957s-191.548 19.237-191.548-42.956 86.68-75.721 192.824-75.721S745 633.157 745 695.35z"
        fill="#3f3d56"
      />
      <path d="M307.756 511.288s-14.265 32.988 0 33.88 15.157-33.88 15.157-33.88z" fill="#ffb9b9" />
      <path fill="#2f2e41" d="M200.77 498.807l24.963 118.576 13.374 58.843h32.987L236.432 495.24l-35.662 3.567z" />
      <path opacity={0.1} d="M200.77 498.807l24.963 118.576 13.374 58.843h32.987L236.432 495.24l-35.662 3.567z" />
      <path fill="#ffb9b9" d="M239.107 678.009v14.265l18.722 3.566 1.783-14.265-20.505-3.566z" />
      <path
        d="M261.395 691.382l-24.963-1.783s-7.132 31.204-7.132 33.879-16.94 29.421-5.35 31.204 28.53 3.566 30.313-1.783 1.783-20.506 5.35-26.746 7.132-13.374 6.24-16.94zM243.564 502.373s-26.746 53.493-19.614 96.287 7.133 82.915 8.916 84.698 35.662 4.458 35.662 4.458.891-81.132-1.783-90.047 15.156-57.951 22.289-70.433-45.47-24.963-45.47-24.963z"
        fill="#2f2e41"
      />
      <path
        d="M211.469 309.797s-38.337-8.024-32.988 12.482 26.747 25.855 26.747 25.855zM220.384 414.11s-18.723 6.24-18.723 38.336-8.915 56.168 0 57.06 60.626 1.782 60.626 1.782zM225.733 324.062l23.181-17.831 32.096 11.59 21.397-4.457 13.373 19.614-28.529 21.397-38.337 11.59-24.964-17.831 1.783-24.072z"
        fill="#ff6584"
      />
      <path d="M256.046 288.4s.892 15.157-3.566 17.831 41.011 8.916 41.011 8.916l3.567-24.072z" fill="#ffb9b9" />
      <path d="M256.046 288.4s.892 15.157-3.566 17.831 41.011 8.916 41.011 8.916l3.567-24.072z" opacity={0.1} />
      <circle cx={280.118} cy={275.027} r={31.204} fill="#ffb9b9" />
      <path
        d="M309.54 332.978l12.035.446s10.253-.446 12.036 45.915 0 111.444 0 111.444 5.35 32.987-8.915 31.204-28.53-.892-22.289-6.24 8.916-35.663 8.916-35.663l-14.265-108.77z"
        fill="#ff6584"
      />
      <path
        d="M248.914 307.92s-33.88-2.58-39.229.094-9.807 28.53-9.807 28.53l-.891 20.506s5.885 42.803 12.75 44.136 5.972 8.465 2.406 11.14 28.53 139.082 38.337 139.974 20.506-11.59 20.506-11.59 19.614-4.458 24.072-8.024 9.807-106.095 1.783-107.878c0 0-8.916-1.783-8.024-4.458s12.161-7.78 12.161-7.78l-4.137-41.255s6.24-34.771 22.289-38.337c0 0-7.133-8.916-9.808-8.916s-19.614 3.566-24.963 8.916-10.699 22.289-23.18 15.156-22.29-18.722-19.615-24.072 5.35-16.142 5.35-16.142z"
        fill="#3f3d56"
      />
      <path
        d="M189.995 239.012c3.434 2.861 6.905 5.762 9.325 9.188 3.16 4.473 4.364 9.623 4.787 14.709.356 4.282.101 8.832-2.861 12.46-2.14 2.62-5.58 4.608-7.007 7.502-1.577 3.196-.338 6.832 1.69 9.872s4.822 5.761 6.626 8.885a16.27 16.27 0 0 1 .925 14.728c-1.9 4.392-5.8 8.684-4.556 13.214 1.01 3.675 5.305 7.35 2.994 10.654-1.288 1.842-4.209 2.608-6.908 2.784-6.6.43-13.394-1.862-17.473-5.897-4.037-3.994-6.028-9.817-12.181-11.566-2.259-.641-4.767-.597-7.03-1.228a10.85 10.85 0 0 1-7.852-9.34c-.692-6.475 3.4-12.674 8.144-18.036a96.075 96.075 0 0 1 11.166-10.702c5.66-4.626 12.134-8.947 15.39-14.796 3.74-6.717 2.43-14.957-3.304-20.773-2.125-2.154-4.795-3.989-6.616-6.303-2.19-2.786-6.006-12.754-1.476-15.118 4.95-2.583 13.463 7.468 16.217 9.763z"
        fill="#3f3d56"
      />
      <path
        d="M141.927 646.804l-8.915 57.951s15.156 36.554 28.53 36.554 21.397-1.783 21.397-3.566-8.916-12.482-13.373-14.265-8.916-21.397-8.916-26.747 4.458-49.927 4.458-49.927z"
        fill="#a0616a"
      />
      <path
        d="M141.927 646.804l-8.915 57.951s15.156 36.554 28.53 36.554 21.397-1.783 21.397-3.566-8.916-12.482-13.373-14.265-8.916-21.397-8.916-26.747 4.458-49.927 4.458-49.927z"
        opacity={0.1}
      />
      <path
        d="M164.216 702.08s-28.53-4.457-31.204-6.24-11.59 34.77 2.675 45.469 24.071 8.915 26.746 8.915 16.048 0 18.723-1.783 4.458-12.481 1.783-16.94-13.373-8.915-14.265-13.372-4.458-16.048-4.458-16.048z"
        fill="#2f2e41"
      />
      <path
        d="M164.216 702.08s-28.53-4.457-31.204-6.24-11.59 34.77 2.675 45.469 24.071 8.915 26.746 8.915 16.048 0 18.723-1.783 4.458-12.481 1.783-16.94-13.373-8.915-14.265-13.372-4.458-16.048-4.458-16.048z"
        opacity={0.1}
      />
      <path
        d="M121.422 649.479s.891 36.554-14.265 41.903 16.94 27.638 16.94 27.638l14.264-11.59 10.699-64.192z"
        fill="#a0616a"
      />
      <path
        d="M113.398 678.009s2.933 25.51 25.093 19.442c0 0 2.545 33.16 6.111 37.617s13.373 17.831-2.675 17.831-26.746-.891-32.095-7.132S92 725.26 88.434 723.477s11.59-40.119 14.265-40.119 10.699-5.35 10.699-5.35z"
        fill="#2f2e41"
      />
      <path
        d="M101.808 464.928s-4.458 22.288 7.132 48.143 22.289 87.373 16.94 96.288-15.157 46.36-5.35 51.71 77.565 8.916 82.023 3.566 0-62.408-8.024-70.432 6.24-95.396 6.24-95.396l-4.457-20.506z"
        fill="#3f3d56"
      />
      <circle cx={167.782} cy={267.894} r={31.204} fill="#a0616a" />
      <path
        d="M148.168 278.593s-11.59 28.53-27.638 32.096-20.506 55.276-20.506 55.276l73.108-14.265 22.289-9.807s1.783-21.397-6.241-25.855-24.072-2.674-24.072-2.674 0-17.831 8.024-21.398-24.964-13.373-24.964-13.373z"
        fill="#a0616a"
      />
      <path
        d="M148.168 344.568s-1.783-34.77-27.638-30.313c0 0-5.35-1.783-16.94 15.157l-3.566-7.133s15.157-14.027 24.072-12.809 14.265-4.13 32.988 35.098l25.855-3.566-2.675-31.205h2.675l7.132 26.747s9.807 0 10.699 8.024v8.024s15.156 10.699 12.482 33.879-3.567 43.686-3.567 43.686-3.566 30.313 0 41.011 24.072 39.229 8.024 41.903-22.288 2.675-22.288 2.675l-3.567-23.18s2.675 9.807-14.264 10.698-66.867-13.373-66.867-15.156 1.783-19.614-2.675-16.048-6.24 22.289-12.481 22.289 9.807-73.107 9.807-73.107l-5.35-55.277v-6.24s34.771 3.566 48.144-15.157z"
        fill="#d0cde1"
      />
      <path
        d="M118.747 318.713s-18.723 16.048-20.506 66.866 57.06 93.613 57.06 93.613 16.048 53.494 27.638 41.012-15.157-53.493-15.157-53.493l-41.01-54.385 12.48-79.348s0-18.723-20.505-14.265z"
        fill="#a0616a"
      />
      <path
        d="M102.946 345.841s-7.38 1.402-9.162 12.992 7.132 22.289 11.59 22.289 48.144-8.024 53.493-15.157 19.614-4.458 19.614-4.458l-30.313-16.047s-22.165 20.196-47.19 12.327z"
        fill="#d0cde1"
      />
      <path
        d="M202.555 301.628c-1.804-3.124-4.596-5.845-6.625-8.885a12.116 12.116 0 0 1-2.385-7.243 31.167 31.167 0 0 1-25.699 13.597c-2.734 6.461-2.738 15.158-2.738 15.158s5.232 9.833-.902 11.025c.388.075.773.158 1.15.265 6.153 1.75 8.144 7.572 12.181 11.566 4.08 4.035 10.874 6.328 17.473 5.897 2.7-.176 5.62-.942 6.908-2.784 2.31-3.305-1.985-6.979-2.994-10.654-1.244-4.53 2.656-8.822 4.556-13.214a16.27 16.27 0 0 0-.925-14.728zM137.262 225.021a37.68 37.68 0 0 0-8.921 5.51c-6.791 5.388-12.69 12.15-15.917 20.194s-3.558 17.465.256 25.25c1.697 3.463 4.232 6.814 4.094 10.668-.175 4.91-4.6 8.533-8.926 10.86s-9.216 4.298-11.861 8.438c-4.424 6.925-.523 16.445-3.508 24.101-1.014 2.6-2.834 5.31-1.877 7.93 6.067.628 11.983-2.27 16.825-5.98s8.988-8.277 13.94-11.835c6.674-4.793 14.782-7.74 20.297-13.832a25.206 25.206 0 0 0 5.559-23c-.569-2.126-1.43-4.23-1.369-6.431.1-3.623 2.658-6.694 5.375-9.093s5.8-4.545 7.612-7.685c1.82-3.154 2.13-6.93 3.258-10.393s3.64-6.994 7.269-7.292c2.21-.181 4.308.884 6.269 1.92l10.301 5.44a5.672 5.672 0 0 0 3.522.956c2.272-.41 3.11-3.259 3.016-5.565-.307-7.605-5.676-14.361-12.376-17.975-6.228-3.36-13.568-4.469-20.575-4.457-7.413.012-15.267-.613-22.263 2.271z"
        fill="#3f3d56"
      />
      <path
        d="M293.516 237.335c9.728 3.199 17.57 11.029 21.93 20.294a33.313 33.313 0 0 1 3.153 10.724c.712 6.956-1.362 13.88-3.744 20.453-1.875 5.177-3.971 10.86-2.052 16.02.666 1.79 1.787 3.395 2.338 5.223a9.146 9.146 0 0 1-3.078 9.62c-1.962 1.52-4.66 2.337-5.761 4.562 2.157.02 3.676 2.05 4.836 3.868l5.53 8.666-20.72 12.076a80.47 80.47 0 0 0-4.274-22.058 2.492 2.492 0 0 0-.77-1.286 2.457 2.457 0 0 0-1.652-.263c-4.055.34-8.026 1.32-12.045 1.96-9.042 1.441-18.61 1.09-26.935-2.72a18.02 18.02 0 0 1-7.643-5.911c-1.828-2.701-2.461-6.375-.96-9.271 2.283-4.41 8.172-5.382 11.81-8.762 1.619 6.446 8.901 10.247 15.53 9.777a12.937 12.937 0 0 0 4.653-1.119c3.025-1.439 5.073-4.326 6.8-7.197a113.752 113.752 0 0 0 10.875-25.573 36.112 36.112 0 0 0 1.662-7.472c.657-7.824-3.676-15.716-10.357-19.84s-13.515-2.416-20.8.512c2.45-.985 2.288-5.918 4.24-7.602a25.314 25.314 0 0 1 8.285-4.59 30.38 30.38 0 0 1 19.15-.09z"
        fill="#d0cde1"
      />
      <path d="M847.75 354.23s50.819 13.374 51.71 19.615-25.855 23.257-25.855 23.257l-56.168-26.823z" fill="#3f3d56" />
      <path d="M847.75 354.23s50.819 13.374 51.71 19.615-25.855 23.257-25.855 23.257l-56.168-26.823z" opacity={0.1} />
      <path
        d="M874.05 343.978s-16.047 19.614-35.661 17.83 24.072 41.904 24.072 41.904l22.288-19.614s6.241-25.855 11.59-26.747-22.288-13.373-22.288-13.373z"
        fill="#cf9595"
      />
      <path
        d="M874.05 343.978s-16.047 19.614-35.661 17.83 24.072 41.904 24.072 41.904l22.288-19.614s6.241-25.855 11.59-26.747-22.288-13.373-22.288-13.373z"
        opacity={0.1}
      />
      <path
        d="M973.013 609.66s2.675 16.048-5.35 19.615-24.071 57.95-24.071 57.95l15.156 15.157 42.795-69.541s12.482-24.964 8.024-24.964-36.554 1.783-36.554 1.783z"
        fill="#ffb9b9"
      />
      <path
        d="M973.013 609.66s2.675 16.048-5.35 19.615-24.071 57.95-24.071 57.95l15.156 15.157 42.795-69.541s12.482-24.964 8.024-24.964-36.554 1.783-36.554 1.783z"
        opacity={0.1}
      />
      <path
        d="M947.158 685.442l-3.566-1.783s-20.506 10.699-17.831 16.048 8.915 16.048 8.915 19.614 3.567 24.964 15.157 26.747 11.59-8.915 9.807-13.373-2.675-19.614-1.783-24.964a34.4 34.4 0 0 1 4.121-10.598z"
        fill="#2f2e41"
      />
      <path
        d="M929.327 605.203s-2.675 66.866 16.048 94.504c0 0 7.132 19.614 8.024 21.398s16.048-6.241 16.048-6.241-8.024-53.493-7.132-62.409-4.458-20.506-4.458-20.506l-.892-26.746z"
        fill="#ffb9b9"
      />
      <path
        d="M971.23 710.406l-18.616 8.799s1.676 13.49 2.568 16.164-12.482 22.29 1.783 24.072 28.53 0 24.964-4.457-8.916-24.072-8.024-29.422-2.675-15.156-2.675-15.156z"
        fill="#2f2e41"
      />
      <path
        d="M933.785 356.46s-11.59-.892-13.373 32.987a527.06 527.06 0 0 0 0 58.842l28.53.892-2.675-53.493zM967.664 330.605s2.674 19.614-9.807 21.397 14.265 29.421 14.265 29.421l34.77-19.614s-13.373-24.072-6.24-35.662-32.988 4.458-32.988 4.458z"
        fill="#ffb9b9"
      />
      <path
        d="M967.664 330.605s2.674 19.614-9.807 21.397 14.265 29.421 14.265 29.421l34.77-19.614s-13.373-24.072-6.24-35.662-32.988 4.458-32.988 4.458z"
        opacity={0.1}
      />
      <circle cx={896.34} cy={338.628} r={31.204} fill="#cf9595" />
      <circle cx={980.146} cy={310.099} r={31.204} fill="#ffb9b9" />
      <path
        d="M802.727 419.76s-.892 32.987 0 38.337-5.35 50.818-5.35 50.818l19.614-14.265s15.157-48.144 8.916-60.625-23.18-14.265-23.18-14.265zM905.255 434.025s-3.566 26.746 8.024 28.53 14.265-20.506 14.265-20.506l-4.458-22.29z"
        fill="#cf9595"
      />
      <path
        d="M879.46 331.787c1.606 1.459 3.215 3.052 5.283 3.706 3.463 1.097 7.681-.61 10.635 1.505 2.81 2.01 3.032 6.6 6.105 8.178a8.576 8.576 0 0 0 4.053.612l10.868-.128a5.203 5.203 0 0 0 3.598 6.943c1.137.215 2.563.162 3.127 1.173.609 1.092.323 3.267 1.54 2.979a17.907 17.907 0 0 1 5.735-6.003c1.328-.857 2.838-1.603 3.63-2.97 1.093-1.886.456-4.243.378-6.422-.242-6.78 5.234-13.12 3.842-19.759a19.914 19.914 0 0 0-1.888-4.745l-6.953-13.879c-1.228-2.452-2.657-5.098-5.194-6.141-3.84-1.58-7.96 1.233-12.049 1.954-4.648.818-9.268-1.126-13.808-2.415s-9.96-1.754-13.477 1.394c-1.428 1.278-2.418 3.067-4.086 4.013-2.846 1.613-7.342.668-8.792 3.6-.71 1.44-.241 3.196-.705 4.732-.633 2.095-2.772 3.27-4.558 4.535s-3.52 3.361-2.792 5.425c.31.878 1.03 1.57 1.319 2.456.533 1.63-.5 3.303-1.297 4.821-2.658 5.066 1.715 6.048 5.028 3.773 4.036-2.771 6.397-3.026 10.458.663z"
        fill="#3f3d56"
      />
      <path
        d="M958.748 345.76s1.783 17.832 16.048 17.832 27.494-11.91 27.494-11.91 25.108 6.56 25.108 10.127-20.506 29.421-20.506 29.421-8.915 67.758-5.35 71.324 41.012 131.059 34.771 141.757-3.566 10.699-45.469 13.373-45.469 11.59-63.3-1.783-20.506-21.397-27.638-22.288-15.157-98.963-8.024-112.336 19.614-30.313 24.072-33.88 15.014-37.548 15.014-37.548l.142-55.173z"
        fill="#ff6584"
      />
      <path
        d="M1019.374 360.026s20.506-2.675 14.265 18.722-15.157 60.626-29.422 62.409 2.675-51.71 2.675-51.71z"
        fill="#ffb9b9"
      />
      <path
        d="M975.389 276.898c9.83-2.162 20.248-2.662 29.848.361s18.28 9.935 21.824 19.355 1.048 21.235-7.02 27.252c-4.205 3.134-9.577 4.623-13.286 8.33-4 3.998-5.952 10.422-11.272 12.34a23.525 23.525 0 0 1-.356-12.119 35.905 35.905 0 0 0 1.42-6.398c.108-2.186-.67-4.603-2.582-5.67-2.031-1.133-4.55-.407-6.87-.578-5.771-.426-9.508-6.214-11.676-11.58s-4.11-11.457-9.116-14.362c-4.715-2.735-9.943-1.477-14.97-.776-.756-2.762 6.996-8.773 9.273-10.315a42.513 42.513 0 0 1 14.783-5.84z"
        fill="#3f3d56"
      />
      <path
        d="M1014.916 419.76s-8.024-35.662-8.024-40.12-4.458-25.855-1.783-31.204 8.916-35.663-.892-32.988-14.264 41.012-14.264 41.012 1.783 22.288 0 29.42-.892 54.385 5.349 55.277 19.614-3.566 19.614-21.397z"
        fill="#ffb9b9"
      />
      <circle cx={1023.386} cy={290.039} r={19.614} fill="#3f3d56" />
      <path
        d="M812.98 370.279s-17.386 25.409-17.386 54.83c0 0 21.397-.891 33.88 16.94s-16.495-71.77-16.495-71.77z"
        fill="#3f3d56"
      />
      <path
        d="M810.75 679.202s13.374 28.53 13.374 42.794 27.638 2.675 27.638 2.675-17.831-46.361-16.048-52.602-24.963 7.133-24.963 7.133zM859.786 677.418s3.747 53.119-.801 57.764 17.74 1.97 17.74 1.97 0-40.12 7.133-56.167z"
        fill="#cf9595"
      />
      <path
        d="M821.45 491.084s-26.747 12.482-26.747 17.831-4.458 32.096-6.241 34.77-1.783 26.747 0 30.313 5.349 113.228 18.722 113.228 32.096-6.241 32.988-11.59c0 0-12.482-49.036-8.024-61.518s6.24-53.493 15.156-58.842 8.916 5.35 8.916 5.35l-1.783 74.89s-1.784 48.143 1.783 49.035 26.746 4.458 29.42.891 11.591-52.601 11.591-57.95 8.916-62.41 9.807-68.65 3.566-59.734-2.674-63.3-82.915-4.458-82.915-4.458zM835.714 721.105s-8.916-7.133-14.265 6.24a53.573 53.573 0 0 1-14.265 20.506s-3.566 8.916 11.59 7.133 41.012-17.832 41.012-17.832-6.362-16.295-9.422-16.171-4.843 6.364-14.65.124z"
        fill="#2f2e41"
      />
      <path
        d="M873.16 730.912s-13.366-3.567-16.044 0-6.246 24.072-1.788 26.746 24.072 1.783 26.747 0 0-13.373 0-13.373z"
        fill="#2f2e41"
      />
      <path
        d="M858.003 376.074s-13.373-11.59-9.807-21.398c0 0-40.12 13.374-39.229 24.072s16.94 55.277 16.94 55.277-25.855 49.927-12.482 60.625 9.807-1.783 32.988 6.241 32.987 4.458 41.903 2.675 10.698-.892 16.94-.892 2.674-17.83 0-27.638-6.242-24.072-3.567-27.638 25.855-65.975 25.855-65.975-18.004-14.414-39.315-9.436c0 0-15.07 12.11-30.226 4.087z"
        fill="#3f3d56"
      />
      <path
        d="M918.628 384.098c0-.892 8.916-2.675 8.916-2.675s5.35 35.662 2.675 42.795-24.964 15.156-28.53 14.264 16.94-54.384 16.94-54.384z"
        fill="#3f3d56"
      />
      <circle cx={899} cy={295.714} r={21} fill="#3f3d56" />
    </svg>
  );
};

UndrawHappyWomenDay.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawHappyWomenDay;