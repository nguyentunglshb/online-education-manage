import { enumCircleSize } from "@enums/components";
import { IBaseIcon, ICircleIcon, IClockIcon } from "@interfaces";

export const ActivityIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12H18L15 21L9 3L6 12H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AirplayIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19M12 15L17 21H7L12 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlertCircleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", size = 24 } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InfoCircleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", size = 24 } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlertOctagonIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlertTriangleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlignCenterIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 10H6M21 6H3M21 14H3M18 18H6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlignJustifyIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H3M21 6H3M21 14H3M21 18H3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlignLeftIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10H3M21 6H3M21 14H3M17 18H3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlignRightIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H7M21 6H3M21 14H3M21 18H7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AnchorIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8ZM12 8V22M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12H5M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArchiveIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 8V21H3V8M10 12H14M1 3H23V8H1V3Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownCircleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 7L7 17M7 17H17M7 17V7"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownRightIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7L17 17M17 17V7M17 17H7"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M12 19L19 12M12 19L5 12"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftCircleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#10182",
    width = 24,
    height = 24,
    size = 24,
  } = props;
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightCircleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24 } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L7 7M7 7V17M7 7H17"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpRightIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24 } = props;

  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpIcon = (props: IBaseIcon) => {
  const { onClick, color = "#10182", width = 24, height = 24 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M12 19V5M12 5L5 12M12 5L19 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AtSignIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4706 2.77521 14.2726 2.26229C12.0747 1.74936 9.76794 1.99503 7.72736 2.95936C5.68677 3.92368 4.03241 5.54995 3.03327 7.57371C2.03413 9.59748 1.74898 11.8997 2.22418 14.1061C2.69938 16.3125 3.90699 18.2932 5.65064 19.7263C7.39429 21.1593 9.57144 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2092 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79085 9.79087 7.99999 12 7.99999C14.2092 7.99999 16 9.79085 16 12Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AwradIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size + 12}
      viewBox="0 0 40 62"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9.8935 36.04L6.66683 60.3333L20.0002 52.3333L33.3335 60.3333L30.1068 36.0133M38.6668 20.3333C38.6668 30.6426 30.3095 39 20.0002 39C9.69085 39 1.3335 30.6426 1.3335 20.3333C1.3335 10.024 9.69085 1.66663 20.0002 1.66663C30.3095 1.66663 38.6668 10.024 38.6668 20.3333Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BarChartIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M12 20V10M18 20V4M6 20V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BarChart2Icon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 20V10M12 20V4M6 20V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BatteryChangingIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81M23 13V11M11 6L7 12H13L9 18"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BatteryIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 13V11M3 6H17C18.1046 6 19 6.89543 19 8V16C19 17.1046 18.1046 18 17 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BellIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BluetoothIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 6.5L17.5 17.5L12 23V1L17.5 6.5L6.5 17.5"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BoldIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H14C15.0609 12 16.0783 11.5786 16.8284 10.8284C17.5786 10.0783 18 9.06087 18 8C18 6.93913 17.5786 5.92172 16.8284 5.17157C16.0783 4.42143 15.0609 4 14 4H6V12ZM6 12H15C16.0609 12 17.0783 12.4214 17.8284 13.1716C18.5786 13.9217 19 14.9391 19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20H6V12Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BookOpenIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7C12 5.93913 11.5786 4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3H2V18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21M12 7V21M12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H22V18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BookIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BookmarkIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BoxIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 20,
    height = 23,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M1.27 5.9599L10 11.0099L18.73 5.9599M10 21.0799V10.9999M19 14.9999V6.9999C18.9996 6.64918 18.9071 6.30471 18.7315 6.00106C18.556 5.69742 18.3037 5.44526 18 5.2699L11 1.2699C10.696 1.09437 10.3511 1.00195 10 1.00195C9.64893 1.00195 9.30404 1.09437 9 1.2699L2 5.2699C1.69626 5.44526 1.44398 5.69742 1.26846 6.00106C1.09294 6.30471 1.00036 6.64918 1 6.9999V14.9999C1.00036 15.3506 1.09294 15.6951 1.26846 15.9987C1.44398 16.3024 1.69626 16.5545 2 16.7299L9 20.7299C9.30404 20.9054 9.64893 20.9979 10 20.9979C10.3511 20.9979 10.696 20.9054 11 20.7299L18 16.7299C18.3037 16.5545 18.556 16.3024 18.7315 15.9987C18.9071 15.6951 18.9996 15.3506 19 14.9999Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BriefcaseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CalendarIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 24,
    height = 24,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CameraIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CastIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14M2 20H2.01"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckCircleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckSquareIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckboxIcon = (props: IBaseIcon) => {
  const { onClick, color = "#7F56D9", size = 16 } = props;
  return (
    <svg
      style={{ borderRadius: "50%" }}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0V0C12.4183 0 16 3.58172 16 8V8C16 12.4183 12.4183 16 8 16V16C3.58172 16 0 12.4183 0 8V8Z"
        fill={color}
      />
      <path
        d="M11.3334 5.5L6.75008 10.0833L4.66675 8"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15C4.13401 15 1 11.866 1 8H-1C-1 12.9706 3.02944 17 8 17V15ZM15 8C15 11.866 11.866 15 8 15V17C12.9706 17 17 12.9706 17 8H15ZM8 1C11.866 1 15 4.13401 15 8H17C17 3.02944 12.9706 -1 8 -1V1ZM8 -1C3.02944 -1 -1 3.02944 -1 8H1C1 4.13401 4.13401 1 8 1V-1Z"
        fill={color}
      />
    </svg>
  );
};

export const ChevronDownIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronLeftIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronRightIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronUpIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M18 15L12 9L6 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronsLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 17L6 12L11 7M18 17L13 12L18 7"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronsRightIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 17L18 12L13 7M6 17L11 12L6 7"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronsUpIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 11L12 6L7 11M17 18L12 13L7 18"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChromeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 8H21.17M3.95 6.06L8.54 14M10.88 21.94L15.46 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Circle = (props: ICircleIcon) => {
  const {
    size = enumCircleSize.SM,
    color = "white",
    className = "circle-icon",
  } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CircleIcon = (props: ICircleIcon) => {
  const {
    size = enumCircleSize.SM,
    color = "white",
    className = "circle-icon",
  } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ClipboardIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M9 2H15C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5V3C8 2.44772 8.44772 2 9 2Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ClockIcon = (props: IClockIcon) => {
  const { size = 20, color = "#98A2B3", className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloudDrizzleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1027_7239)">
        <path
          d="M7.99997 19V21M7.99997 13V15M16 19V21M16 13V15M12 21V23M12 15V17M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.964 13.2715 23.1231 12.1016 22.8886 10.9782C22.654 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8188 4.63797 14.9773 3.68982C14.1357 2.74167 13.0809 2.00709 11.8997 1.54664C10.7186 1.08619 9.44488 0.913035 8.18365 1.04146C6.92243 1.16989 5.70978 1.59622 4.64567 2.2853C3.58155 2.97439 2.69644 3.9065 2.06328 5.00482C1.43012 6.10313 1.06704 7.33619 1.00398 8.60237C0.940923 9.86855 1.17968 11.1316 1.70058 12.2874C2.22147 13.4432 3.00959 14.4586 3.99997 15.25"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1027_7239">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloudLightningIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1027_7282)">
        <path
          d="M19 16.9C20.2151 16.6532 21.2953 15.9638 22.0307 14.9655C22.7661 13.9671 23.1043 12.7312 22.9797 11.4975C22.8551 10.2638 22.2765 9.12046 21.3563 8.28937C20.4361 7.45828 19.2399 6.99875 18 6.99999H16.74C16.4087 5.71731 15.764 4.53698 14.8639 3.56498C13.9638 2.59298 12.8363 1.85972 11.5828 1.43106C10.3293 1.00239 8.98897 0.891726 7.68213 1.109C6.37529 1.32628 5.14287 1.86469 4.0955 2.6759C3.04814 3.48711 2.21862 4.54573 1.68143 5.75671C1.14424 6.96768 0.916185 8.29311 1.01775 9.61399C1.11931 10.9349 1.54731 12.2098 2.26332 13.3245C2.97932 14.4391 3.96093 15.3584 5.12 16M13 11L9 17H15L11 23"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1027_7282">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloudRainIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1027_7087)">
        <path
          d="M16 13V21M8 13V21M12 15V23M20 16.58C21.0512 16.1195 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9781C22.6541 9.85472 22.0402 8.84617 21.15 8.12179C20.2599 7.39742 19.1476 7.00131 18 6.99996H16.74C16.423 5.77248 15.8189 4.63791 14.9773 3.68976C14.1358 2.74161 13.0809 2.00703 11.8998 1.54658C10.7186 1.08612 9.44491 0.912974 8.18368 1.0414C6.92246 1.16983 5.70981 1.59615 4.6457 2.28524C3.58158 2.97433 2.69647 3.90644 2.06331 5.00475C1.43015 6.10307 1.06708 7.33613 1.00401 8.60231C0.940954 9.86849 1.17971 11.1315 1.70061 12.2873C2.2215 13.4431 3.00962 14.4585 4 15.25"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1027_7087">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloudSnowIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1027_7234)">
        <path
          d="M20 17.58C21.0512 17.1195 21.9121 16.3115 22.4381 15.2915C22.9641 14.2715 23.1231 13.1016 22.8886 11.9781C22.6541 10.8547 22.0402 9.84617 21.15 9.12179C20.2599 8.39742 19.1476 8.00131 18 7.99996H16.74C16.423 6.77248 15.8189 5.63791 14.9773 4.68976C14.1358 3.74161 13.0809 3.00703 11.8998 2.54658C10.7186 2.08612 9.44491 1.91297 8.18368 2.0414C6.92246 2.16983 5.70981 2.59615 4.6457 3.28524C3.58158 3.97433 2.69647 4.90644 2.06331 6.00475C1.43015 7.10307 1.06708 8.33613 1.00401 9.60231C0.940954 10.8685 1.17971 12.1315 1.70061 13.2873C2.2215 14.4431 3.00962 15.4585 4 16.25M8 16H8.01M8 20H8.01M12 18H12.01M12 22H12.01M16 16H16.01M16 20H16.01"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1027_7234">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloudIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1027_7121)">
        <path
          d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14112 3.86256 7.62008 3.97804 6.21664 4.49759C4.8132 5.01714 3.58363 5.91993 2.66764 7.10338C1.75165 8.28683 1.18598 9.70348 1.0349 11.1924C0.883813 12.6812 1.15338 14.1826 1.81296 15.526C2.47255 16.8693 3.4957 18.0007 4.76617 18.7916C6.03663 19.5824 7.50347 20.0011 8.99999 20H18C19.3261 20 20.5978 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5978 10.5268 19.3261 10 18 10Z"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1027_7121">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CodeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 18L22 12L16 6M8 6L2 12L8 18"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CodePenIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L22 8.5M12 2L2 8.5M12 2V8.5M22 8.5V15.5M22 8.5L12 15.5M22 15.5L12 22M22 15.5L12 8.5M12 22L2 15.5M12 22V15.5M2 15.5V8.5M2 15.5L12 8.5M2 8.5L12 15.5"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CodeSanBoxIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 4.21002L12 6.81002L16.5 4.21002M7.5 19.79V14.6L3 12M21 12L16.5 14.6V19.79M3.27 6.96002L12 12.01L20.73 6.96002M12 22.08V12M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CoffeeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18M18 8H2V17C2 18.0609 2.42143 19.0783 3.17157 19.8284C3.92172 20.5786 4.93913 21 6 21H14C15.0609 21 16.0783 20.5786 16.8284 19.8284C17.5786 19.0783 18 18.0609 18 17V8ZM6 1V4M10 1V4M14 1V4"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ColumnsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V21M12 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H12V3ZM12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H12V3Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CommandIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CompassIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CopyIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerDownLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 10L4 15M4 15L9 20M4 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11V4"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerDownRightIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 10L20 15M20 15L15 20M20 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11V4"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerLeftDownIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 15L9 20M9 20L4 15M9 20V8C9 6.93913 9.42143 5.92172 10.1716 5.17157C10.9217 4.42143 11.9391 4 13 4H20"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerLeftUpIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 9L9 4M9 4L4 9M9 4V16C9 17.0609 9.42143 18.0783 10.1716 18.8284C10.9217 19.5786 11.9391 20 13 20H20"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerRightDownIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15L15 20M15 20L20 15M15 20V8C15 6.93913 14.5786 5.92172 13.8284 5.17157C13.0783 4.42143 12.0609 4 11 4H4"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerRightUpIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 9L15 4M15 4L20 9M15 4V16C15 17.0609 14.5786 18.0783 13.8284 18.8284C13.0783 19.5786 12.0609 20 11 20H4"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerUpLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14L4 9M4 9L9 4M4 9H16C17.0609 9 18.0783 9.42143 18.8284 10.1716C19.5786 10.9217 20 11.9391 20 13V20"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CornerUpRightIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 14L20 9M20 9L15 4M20 9H8C6.93913 9 5.92172 9.42143 5.17157 10.1716C4.42143 10.9217 4 11.9391 4 13V20"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CpuIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1V4M15 1V4M9 20V23M15 20V23M20 9H23M20 14H23M1 9H4M1 14H4M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4ZM9 9H15V15H9V9Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CreditCardIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CropIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.13 1L6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H23M1 6.13L16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V23"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GlobeIcon = (props: IBaseIcon) => {
  const { onClick, color = "#667085", size = 20, className } = props;

  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3332 9.99999C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333M18.3332 9.99999C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666M18.3332 9.99999H1.6665M9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 9.99999M9.99984 18.3333C12.0842 16.0514 13.2688 13.09 13.3332 9.99999C13.2688 6.91002 12.0842 3.94862 9.99984 1.66666M9.99984 18.3333C7.91544 16.0514 6.73088 13.09 6.6665 9.99999C6.73088 6.91002 7.91544 3.94862 9.99984 1.66666M1.6665 9.99999C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PayPassIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#ffffff",
    width = 20,
    height = 24,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.1429 1.28571C17.0236 4.54326 18.0138 8.23849 18.0138 12C18.0138 15.7615 17.0236 19.4567 15.1429 22.7143M10.4286 3.64285C11.8956 6.18374 12.6679 9.06602 12.6679 12C12.6679 14.934 11.8956 17.8162 10.4286 20.3571M5.92859 5.80713C6.98933 7.66394 7.54777 9.77022 7.54777 11.9143C7.54777 14.0583 6.98933 16.1646 5.92859 18.0214M1.42859 8.14285C2.19306 9.29983 2.59834 10.6362 2.59834 12C2.59834 13.3638 2.19306 14.7002 1.42859 15.8571"
        stroke={color}
        strokeWidth={2.57143}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const LogoutIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NavMenuIcon = (props: IBaseIcon) => {
  const { onClick, color = "#344054", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const XIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlayVideoIcon = (props: IBaseIcon) => {
  const { onClick, color = "white", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.19995 2.86327C2.19995 1.61155 3.57248 0.844595 4.63851 1.50061L12.9856 6.63731C14.0009 7.26209 14.0009 8.73784 12.9856 9.36262L4.63851 14.4993C3.57247 15.1553 2.19995 14.3884 2.19995 13.1367V2.86327Z"
        fill={color}
      />
    </svg>
  );
};

export const PauseVideoIcon = (props: IBaseIcon) => {
  const { onClick, color = "white", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.19995 2.5C2.19995 2.22386 2.42381 2 2.69995 2H5.19995C5.47609 2 5.69995 2.22386 5.69995 2.5V13.5C5.69995 13.7761 5.47609 14 5.19995 14H2.69995C2.42381 14 2.19995 13.7761 2.19995 13.5V2.5Z"
        fill={color}
      />
      <path
        d="M10.2 2.5C10.2 2.22386 10.4238 2 10.7 2H13.2C13.4761 2 13.7 2.22386 13.7 2.5V13.5C13.7 13.7761 13.4761 14 13.2 14H10.7C10.4238 14 10.2 13.7761 10.2 13.5V2.5Z"
        fill={color}
      />
    </svg>
  );
};

export const UsersIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlayCircleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8L16 12L10 16V8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const MessageCircleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrendingUpIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size - 10}
      viewBox="0 0 24 14"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23 1L13.5 10.5L8.5 5.5L1 13M23 1H17M23 1V7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrendingDownIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size - 10}
      viewBox="0 0 24 14"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23 13L13.5 3.5L8.5 8.5L1 1M23 13H17M23 13V7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ThreeLayersIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3335 41.3334L28.0002 54.6667L54.6668 41.3334M1.3335 28L28.0002 41.3334L54.6668 28M28.0002 1.33337L1.3335 14.6667L28.0002 28L54.6668 14.6667L28.0002 1.33337Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TruckIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.6665 35.6667V1H1.6665V35.6667H41.6665ZM41.6665 35.6667H60.3332V22.3333L52.3332 14.3333H41.6665V35.6667ZM20.3332 42.3333C20.3332 46.0152 17.3484 49 13.6665 49C9.9846 49 6.99984 46.0152 6.99984 42.3333C6.99984 38.6514 9.9846 35.6667 13.6665 35.6667C17.3484 35.6667 20.3332 38.6514 20.3332 42.3333ZM54.9998 42.3333C54.9998 46.0152 52.0151 49 48.3332 49C44.6513 49 41.6665 46.0152 41.6665 42.3333C41.6665 38.6514 44.6513 35.6667 48.3332 35.6667C52.0151 35.6667 54.9998 38.6514 54.9998 42.3333Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShieldIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 46 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9998 54.6667C22.9998 54.6667 44.3332 44 44.3332 28V9.33337L22.9998 1.33337L1.6665 9.33337V28C1.6665 44 22.9998 54.6667 22.9998 54.6667Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ImageIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19ZM3 19L14 8L19 13M8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CoinStackIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 53 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.8014 7.25936C30.8044 3.98525 24.1282 1.33337 15.9022 1.33337C7.67618 1.33337 1.00596 3.98822 1 7.25936M1 7.25936C1 10.5335 7.67021 13.1854 15.9022 13.1854C24.1341 13.1854 30.8044 10.5335 30.8044 7.25936L30.8044 30.252M1 7.25936V42.8151C1.00298 46.0892 7.6732 48.7411 15.9022 48.7411C19.893 48.7411 23.4963 48.11 26.1698 47.0936M1.00298 19.1113C1.00298 22.3854 7.6732 25.0373 15.9052 25.0373C24.1371 25.0373 30.8074 22.3854 30.8074 19.1113M26.3486 35.1857C23.6603 36.2376 19.9735 36.8894 15.9022 36.8894C7.6732 36.8894 1.00298 34.2375 1.00298 30.9634M47.7392 31.9057C52.9758 37.1117 52.9758 45.5562 47.7392 50.7622C42.5026 55.9682 34.0083 55.9682 28.7717 50.7622C23.5351 45.5562 23.5351 37.1117 28.7717 31.9057C34.0083 26.6998 42.5026 26.6998 47.7392 31.9057Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShoppingCartIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.833374 0.833374H4.16671L6.40004 11.9917C6.47624 12.3754 6.68496 12.72 6.98966 12.9653C7.29436 13.2106 7.67562 13.3409 8.06671 13.3334H16.1667C16.5578 13.3409 16.9391 13.2106 17.2438 12.9653C17.5484 12.72 17.7572 12.3754 17.8334 11.9917L19.1667 5.00004H5.00004M8.33337 17.5C8.33337 17.9603 7.96028 18.3334 7.50004 18.3334C7.0398 18.3334 6.66671 17.9603 6.66671 17.5C6.66671 17.0398 7.0398 16.6667 7.50004 16.6667C7.96028 16.6667 8.33337 17.0398 8.33337 17.5ZM17.5 17.5C17.5 17.9603 17.1269 18.3334 16.6667 18.3334C16.2065 18.3334 15.8334 17.9603 15.8334 17.5C15.8334 17.0398 16.2065 16.6667 16.6667 16.6667C17.1269 16.6667 17.5 17.0398 17.5 17.5Z"
        stroke={color}
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LocationIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 20, className } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 8.33331C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33331C2.5 6.34419 3.29018 4.43653 4.6967 3.03001C6.10322 1.62349 8.01088 0.833313 10 0.833313C11.9891 0.833313 13.8968 1.62349 15.3033 3.03001C16.7098 4.43653 17.5 6.34419 17.5 8.33331Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.8333C11.3807 10.8333 12.5 9.71403 12.5 8.33331C12.5 6.9526 11.3807 5.83331 10 5.83331C8.61929 5.83331 7.5 6.9526 7.5 8.33331C7.5 9.71403 8.61929 10.8333 10 10.8333Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LinkIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.66656 8.6666C6.95286 9.04936 7.31813 9.36606 7.73759 9.59523C8.15705 9.8244 8.62089 9.96068 9.09766 9.99483C9.57442 10.029 10.0529 9.96018 10.5008 9.79312C10.9486 9.62607 11.3553 9.36465 11.6932 9.0266L13.6932 7.0266C14.3004 6.39793 14.6364 5.55592 14.6288 4.68193C14.6212 3.80794 14.2706 2.9719 13.6526 2.35387C13.0346 1.73585 12.1985 1.38528 11.3246 1.37769C10.4506 1.37009 9.60856 1.70608 8.97989 2.31327L7.83322 3.45327M9.33322 7.33327C9.04692 6.95052 8.68165 6.63381 8.26219 6.40464C7.84273 6.17547 7.37888 6.03919 6.90212 6.00505C6.42536 5.9709 5.94683 6.03969 5.49899 6.20675C5.05115 6.37381 4.64448 6.63522 4.30656 6.97327L2.30656 8.97327C1.69936 9.60194 1.36338 10.444 1.37098 11.3179C1.37857 12.1919 1.72913 13.028 2.34716 13.646C2.96519 14.264 3.80123 14.6146 4.67522 14.6222C5.54921 14.6298 6.39121 14.2938 7.01989 13.6866L8.15989 12.5466"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PlusIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M8 1V15M1 8H15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusCircleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MinusCircleIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TwitterIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 16, className } = props;
  return (
    <svg
      width="20px"
      height={size}
      onClick={onClick}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45161C17.9652 5.27583 17.9613 5.09614 17.9535 4.92036C18.7566 4.33961 19.4496 3.62027 20 2.79614C19.2521 3.12889 18.458 3.34621 17.6449 3.44067C18.5011 2.92748 19.1421 2.12129 19.4492 1.17153C18.6438 1.64886 17.763 1.98557 16.8445 2.16724C16.2257 1.5097 15.4075 1.07432 14.5164 0.928437C13.6253 0.782549 12.711 0.93427 11.9148 1.36014C11.1186 1.78601 10.4848 2.46232 10.1115 3.28449C9.73825 4.10666 9.64619 5.02891 9.84961 5.90864C8.21874 5.8268 6.62328 5.40315 5.16665 4.66514C3.71002 3.92714 2.42474 2.89126 1.39414 1.62466C0.870333 2.52776 0.710047 3.59643 0.945859 4.61347C1.18167 5.63051 1.79589 6.5196 2.66367 7.10005C2.01219 7.07937 1.37498 6.90396 0.804688 6.58833V6.63911C0.804104 7.58685 1.13175 8.50555 1.73192 9.23904C2.3321 9.97252 3.16777 10.4755 4.09687 10.6625C3.49338 10.8277 2.85999 10.8517 2.2457 10.7329C2.50788 11.5479 3.01798 12.2608 3.70481 12.772C4.39164 13.2832 5.22093 13.5672 6.07695 13.5844C4.62369 14.726 2.82848 15.3452 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.2821C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z"
        fill={color}
      />
    </svg>
  );
};

export const LinkedinIcon = (props: IBaseIcon) => {
  const { onClick, color = "#98A2B3", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z"
        fill={color}
      />
    </svg>
  );
};

export const MailIcon = (props: IBaseIcon) => {
  const { onClick, color = "#000000", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 3C21 1.9 20.1 1 19 1H3C1.9 1 1 1.9 1 3M21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3M21 3L11 10L1 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PhoneIcon = (props: IBaseIcon) => {
  const { onClick, color = "#000000", size = 16, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.0004 15.92V18.92C21.0016 19.1985 20.9445 19.4741 20.8329 19.7293C20.7214 19.9845 20.5577 20.2136 20.3525 20.4018C20.1473 20.5901 19.905 20.7335 19.6412 20.8227C19.3773 20.9119 19.0978 20.945 18.8204 20.92C15.7433 20.5856 12.7874 19.5341 10.1904 17.85C7.77425 16.3146 5.72576 14.2661 4.19042 11.85C2.5004 9.24118 1.44866 6.27097 1.12042 3.17997C1.09543 2.90344 1.1283 2.62474 1.21692 2.3616C1.30555 2.09846 1.44799 1.85666 1.63519 1.6516C1.82238 1.44653 2.05023 1.28268 2.30421 1.1705C2.5582 1.05831 2.83276 1.00024 3.11042 0.999975H6.11042C6.59573 0.995198 7.06621 1.16705 7.43418 1.48351C7.80215 1.79996 8.0425 2.23942 8.11042 2.71997C8.23704 3.68004 8.47187 4.6227 8.81042 5.52997C8.94497 5.8879 8.97408 6.27689 8.89433 6.65086C8.81457 7.02482 8.62928 7.36809 8.36042 7.63998L7.09042 8.90997C8.51398 11.4135 10.5869 13.4864 13.0904 14.91L14.3604 13.64C14.6323 13.3711 14.9756 13.1858 15.3495 13.1061C15.7235 13.0263 16.1125 13.0554 16.4704 13.19C17.3777 13.5285 18.3204 13.7634 19.2804 13.89C19.7662 13.9585 20.2098 14.2032 20.527 14.5775C20.8441 14.9518 21.0126 15.4296 21.0004 15.92Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HomeIcon = (props: IBaseIcon) => {
  const { onClick, color = "#667085", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M7.5 18.3334V10H12.5V18.3334M2.5 7.50002L10 1.66669L17.5 7.50002V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.50002Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SlashDividerIcon = (props: IBaseIcon) => {
  const { onClick, color = "#D0D5DD", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <line
        x1={6.26367}
        y1={18.4759}
        x2={14.0117}
        y2={1.86023}
        stroke={color}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrashIcon = (props: IBaseIcon) => {
  const { onClick, color = "#667085", size = 20, className } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 4.99996H3.16667M3.16667 4.99996H16.5M3.16667 4.99996V16.6666C3.16667 17.1087 3.34226 17.5326 3.65482 17.8451C3.96738 18.1577 4.39131 18.3333 4.83333 18.3333H13.1667C13.6087 18.3333 14.0326 18.1577 14.3452 17.8451C14.6577 17.5326 14.8333 17.1087 14.8333 16.6666V4.99996H3.16667ZM5.66667 4.99996V3.33329C5.66667 2.89127 5.84226 2.46734 6.15482 2.15478C6.46738 1.84222 6.89131 1.66663 7.33333 1.66663H10.6667C11.1087 1.66663 11.5326 1.84222 11.8452 2.15478C12.1577 2.46734 12.3333 2.89127 12.3333 3.33329V4.99996M7.33333 9.16663V14.1666M10.6667 9.16663V14.1666"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GermanyFlagIcon = (props: IBaseIcon) => {
  const { onClick, size = 20, className } = props;
  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7837_209279)">
        <path
          d="M0.62207 13.4789C2.035 17.2869 5.70043 20.0007 10.0001 20.0007C14.2997 20.0007 17.9652 17.2869 19.3781 13.4789L10.0001 12.6094L0.62207 13.4789Z"
          fill="#FFDA44"
        />
        <path
          d="M10.0001 0.000976562C5.70043 0.000976562 2.035 2.71473 0.62207 6.52273L10.0001 7.39227L19.3781 6.5227C17.9652 2.71473 14.2997 0.000976562 10.0001 0.000976562Z"
          fill="black"
        />
        <path
          d="M0.621992 6.52148C0.220039 7.6048 0 8.77652 0 9.99973C0 11.2229 0.220039 12.3946 0.621992 13.478H19.378C19.78 12.3946 20 11.2229 20 9.99973C20 8.77652 19.78 7.6048 19.378 6.52148H0.621992Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_7837_209279">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const MoreIcon = (props: IBaseIcon) => {
  const { onClick, color = "#000000", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.99996 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99998C10.8333 9.53974 10.4602 9.16665 9.99996 9.16665C9.53972 9.16665 9.16663 9.53974 9.16663 9.99998C9.16663 10.4602 9.53972 10.8333 9.99996 10.8333Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99996 4.99998C10.4602 4.99998 10.8333 4.62688 10.8333 4.16665C10.8333 3.70641 10.4602 3.33331 9.99996 3.33331C9.53972 3.33331 9.16663 3.70641 9.16663 4.16665C9.16663 4.62688 9.53972 4.99998 9.99996 4.99998Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99996 16.6666C10.4602 16.6666 10.8333 16.2935 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99996 15C9.53972 15 9.16663 15.3731 9.16663 15.8333C9.16663 16.2935 9.53972 16.6666 9.99996 16.6666Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingIcon = (props: IBaseIcon) => {
  const { onClick, color = "#000", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ZapIcon = (props: IBaseIcon) => {
  const { onClick, color = "#000", size = 19, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M9.83333 1.66675L1.5 11.6667H9L8.16667 18.3334L16.5 8.33342H9L9.83333 1.66675Z"
        stroke={color}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 21,
    height = 16,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M1.3335 8.00016C1.3335 8.00016 4.66683 1.3335 10.5002 1.3335C16.3335 1.3335 19.6668 8.00016 19.6668 8.00016C19.6668 8.00016 16.3335 14.6668 10.5002 14.6668C4.66683 14.6668 1.3335 8.00016 1.3335 8.00016Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5002 10.5002C11.8809 10.5002 13.0002 9.38087 13.0002 8.00016C13.0002 6.61945 11.8809 5.50016 10.5002 5.50016C9.11945 5.50016 8.00016 6.61945 8.00016 8.00016C8.00016 9.38087 9.11945 10.5002 10.5002 10.5002Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StarIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 22, className } = props;
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 22 22"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PrinterIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 22, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8V1H17V8M5 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V10C1 9.46957 1.21071 8.96086 1.58579 8.58579C1.96086 8.21071 2.46957 8 3 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H17M5 13H17V21H5V13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SaveIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 19V11H5V19M5 1V6H13M17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H14L19 6V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MonitorIcon = (props: IBaseIcon) => {
  const { onClick, color = "#101828", size = 24, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 21H16M12 17V21M4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FileIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 18,
    height = 22,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 22"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V8M10 1L17 8M10 1V8H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 18,
    height = 20,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MaximizeIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 20,
    height = 20,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FileTextIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 18,
    height = 22,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7M11 1L17 7M11 1V7H17M13 12H5M13 16H5M7 8H5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MicIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 16,
    height = 24,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M15 10V12C15 13.8565 14.2625 15.637 12.9497 16.9497C11.637 18.2625 9.85652 19 8 19M8 19C6.14348 19 4.36301 18.2625 3.05025 16.9497C1.7375 15.637 1 13.8565 1 12V10M8 19V23M4 23H12M8 1C7.20435 1 6.44129 1.31607 5.87868 1.87868C5.31607 2.44129 5 3.20435 5 4V12C5 12.7956 5.31607 13.5587 5.87868 14.1213C6.44129 14.6839 7.20435 15 8 15C8.79565 15 9.55871 14.6839 10.1213 14.1213C10.6839 13.5587 11 12.7956 11 12V4C11 3.20435 10.6839 2.44129 10.1213 1.87868C9.55871 1.31607 8.79565 1 8 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PenToolIcon = (props: IBaseIcon) => {
  const {
    onClick,
    color = "#101828",
    width = 22,
    height = 22,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M1 1L15.5 4.5L17 12L12 17L4.5 15.5L1 1ZM1 1L8.586 8.586M11 18L18 11L21 14L14 21L11 18ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
