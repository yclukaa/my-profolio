import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   viewBox="0 0 37.92 42.72"
    // >
    //   <defs>
    //     <clipPath id="clip-path" transform="translate(5.09 5.32)">
    //       <path
    //         className={classes.cls1}
    //         d="M27.82,30.88a.34.34,0,0,1-.35.27H27.4l-.13-.05h0a9.23,9.23,0,0,1-1.15-.53,3.83,3.83,0,0,1,.29,1,.25.25,0,0,1,0,.08.35.35,0,0,1-.22.33.37.37,0,0,1-.41-.09,0,0,0,0,1,0,0s0,0,0,0a26.94,26.94,0,0,0-6.58-5.76c-.4-.25-.81-.5-1.22-.72a3.3,3.3,0,0,0-.32-.18A25.05,25.05,0,0,0,15.12,24a10.31,10.31,0,0,1-3.61.64,9.81,9.81,0,0,1-1.64-.13h0a9.15,9.15,0,0,1-1-.22,10.5,10.5,0,0,1-2.33-.93,9.1,9.1,0,0,1-1.22-.79.18.18,0,0,1-.07-.05l-.68-.56h0a9.69,9.69,0,0,1-1-1,.46.46,0,0,1-.07-.07,16.85,16.85,0,0,1-1.69-2.24c-.19-.28-.36-.57-.53-.86a10.43,10.43,0,0,1,2-12.51l0,0a0,0,0,0,1,0,0A6.4,6.4,0,0,1,3.93,3.3,6.13,6.13,0,0,1,5.46,1.44a6.44,6.44,0,0,1,.8-.57A6,6,0,0,1,7.34.35,6.48,6.48,0,0,1,8.8,0H9a3.93,3.93,0,0,1,3.52,2.15h.23a4,4,0,0,1,2.11.6,4.26,4.26,0,0,1,.53.39h-.28a6.08,6.08,0,0,0-.61,0,6.69,6.69,0,0,0-1.56.36c0,.12,0,.24,0,.36V4a4,4,0,0,1-1,2.66h0a10.33,10.33,0,0,1-1.49.29l-.28,0a3.82,3.82,0,0,0-.95.26l-.26.12h0a4,4,0,0,0-.74.5,3.2,3.2,0,0,0-.52.52l0,0c.12.31.25.61.38.91a27.83,27.83,0,0,0,1.59,3.46c.38.68.77,1.33,1.2,2l0,0a.64.64,0,0,0,.08.14A43.26,43.26,0,0,0,15.39,21c.16.19.33.38.5.56.42.46.84.91,1.27,1.34l.11.11h0l.74.73.78.73c.49.44,1,.87,1.49,1.29.81.68,1.64,1.33,2.5,1.94q.45.33.9.63c.57.4,1.15.78,1.74,1.13h0l.89.53.39.22.05,0,.46.26C27.41,30.67,27.62,30.77,27.82,30.88Z"
    //       />
    //     </clipPath>
    //     <clipPath id="clip-path-2" transform="translate(5.09 5.32)">
    //       <rect className={classes.cls1} x="-5" y="-5" width="37.82" height="42" />
    //     </clipPath>
    //     <linearGradient
    //       id="未命名漸層_47"
    //       x1="22.17"
    //       y1="16.1"
    //       x2="15.53"
    //       y2="21.28"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop offset="0.25" stoColor="#4d89c0" />
    //       <stop offset="0.33" stoColor="#6998c8" />
    //       <stop offset="0.43" stoColor="#85a8d1" />
    //       <stop offset="0.55" stoColor="#9bb4d8" />
    //       <stop offset="0.67" stoColor="#abbcdc" />
    //       <stop offset="0.8" stoColor="#b4c1df" />
    //       <stop offset="1" stoColor="#b7c3e0" />
    //     </linearGradient>
    //   </defs>
    //   <g id="圖層_2" data-name="圖層 2">
    //     <g id="圖層_1-2" data-name="圖層 1">
    //       <g className={classes.cls2}>
    //         <g className={classes.cls3}>
    //           <g className={classes.cls3}>
    //             <image
    //               width="79"
    //               height="89"
    //               transform="scale(0.48)"
    //               xlinkHref="data:image/png;base64,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"
    //             />
    //           </g>
    //         </g>
    //       </g>
    //       <path
    //         className={classes.cls4}
    //         d="M27.84,30.79a.29.29,0,0,1,0,.09c-.2-.11-.41-.21-.61-.33l-.46-.26-.05,0L26.31,30l-.89-.53h0c-.59-.35-1.17-.73-1.74-1.13q-.45-.3-.9-.63c-.86-.61-1.69-1.26-2.5-1.94-.51-.42-1-.85-1.49-1.29L18,23.78l-.74-.73h0l-.11-.11c-.43-.43-.85-.88-1.27-1.34-.17-.18-.34-.37-.5-.56a43.26,43.26,0,0,1-4.52-6.13.64.64,0,0,1-.08-.14l0,0c-.43-.64-.82-1.29-1.2-2A27.83,27.83,0,0,1,8,9.31c-.13-.3-.26-.6-.38-.91l0,0a3.2,3.2,0,0,1,.52-.52,4,4,0,0,1,.74-.5h0l.26-.12A3.82,3.82,0,0,1,10.11,7l.28,0a10.33,10.33,0,0,0,1.49-.29h0c.51.41,1,.84,1.48,1.29l0,0,.3.31h0l0,0a14.59,14.59,0,0,1,1.1,1.26l.15.2a16.57,16.57,0,0,1,2.79,5.51l.1.08a6.44,6.44,0,0,1,1.78,2.19,6.1,6.1,0,0,1,.48,1.34c0,.1.05.19.07.29v0c0,.16.09.33.14.48a5.7,5.7,0,0,0,.29.72,6.4,6.4,0,0,0,1.54,2.06h0l.35.29h0a16.76,16.76,0,0,1,1.55.88h0c.18.11.34.23.51.34A16,16,0,0,1,27,26s0,0,.06.06a.15.15,0,0,1,0,.07s0,0,0,0a.23.23,0,0,1-.22.23.28.28,0,0,1-.13,0c-.23-.18-.47-.35-.72-.52a17.64,17.64,0,0,0-2.45-1.36c-.26-.12-.51-.22-.78-.33l.27.58.06.11a17,17,0,0,0,4.52,5.61l.05,0A.36.36,0,0,1,27.84,30.79Z"
    //         transform="translate(5.09 5.32)"
    //       />
    //       <path
    //         className={classes.cls5}
    //         d="M7.49,23.16c-1-.06-.91.49-.91,1.36a1.58,1.58,0,0,1-.1.73l-.07.1a1,1,0,0,1-.77.26"
    //         transform="translate(5.09 5.32)"
    //       />
    //       <path
    //         className={classes.cls5}
    //         d="M7.49,28.09c-1,.06-.91-.49-.91-1.36a1.58,1.58,0,0,0-.1-.73.37.37,0,0,0-.07-.1,1,1,0,0,0-.77-.29"
    //         transform="translate(5.09 5.32)"
    //       />
    //       <path
    //         className={classes.cls5}
    //         d="M9.69,23.17c1-.05.92.49.92,1.36a1.38,1.38,0,0,0,.1.74.76.76,0,0,0,.07.09,1,1,0,0,0,.77.26"
    //         transform="translate(5.09 5.32)"
    //       />
    //       <path
    //         className={classes.cls5}
    //         d="M9.69,28.11c1,.05.92-.5.92-1.36a1.36,1.36,0,0,1,.1-.74l.07-.1a1.08,1.08,0,0,1,.77-.29"
    //         transform="translate(5.09 5.32)"
    //       />
    //     </g>
    //   </g>
    // </svg>
    
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 69.24 79.6">
        <defs>
          <linearGradient id="未命名漸層_14" x1="14.17" y1="58.98" x2="49.73" y2="34.57" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f5eaee"/>
            <stop offset="0.28" stopColor="#f7f5ed"/>
            <stop offset="0.37" stopColor="#f3f2ec"/>
            <stop offset="0.45" stopColor="#e8e9ea"/>
            <stop offset="0.52" stopColor="#d5dae6"/>
            <stop offset="0.6" stopColor="#bbc6e1"/>
            <stop offset="0.6" stopColor="#b7c3e0"/>
            <stop offset="0.78" stopColor="#85a8d1"/>
            <stop offset="1" stopColor="#4d89c0"/>
          </linearGradient>
          <linearGradient id="未命名漸層_47" x1="55.14" y1="40.05" x2="38.62" y2="52.92" gradientUnits="userSpaceOnUse">
            <stop offset="0.25" stopColor="#4d89c0"/>
            <stop offset="0.33" stopColor="#6998c8"/>
            <stop offset="0.43" stopColor="#85a8d1"/>
            <stop offset="0.55" stopColor="#9bb4d8"/>
            <stop offset="0.67" stopColor="#abbcdc"/>
            <stop offset="0.8" stopColor="#b4c1df"/>
            <stop offset="1" stopColor="#b7c3e0"/>
          </linearGradient>
        </defs>
        <g id="圖層_2" data-name="圖層 2">
          <g id="圖層_1-2" data-name="圖層 1">
            <path className={classes.cls1} d="M69.21,76.81a.88.88,0,0,1-.87.68l-.17,0h0l-.32-.13a0,0,0,0,0,0,0A23.2,23.2,0,0,1,65,76a10,10,0,0,1,.74,2.49,1.23,1.23,0,0,1,0,.19.89.89,0,0,1-.56.83.9.9,0,0,1-1-.23.09.09,0,0,1,0,0,.39.39,0,0,1-.08-.1,67.29,67.29,0,0,0-9-9,67.7,67.7,0,0,0-7.35-5.32c-1-.62-2-1.22-3-1.79l-.8-.44a66.15,66.15,0,0,0-6.25-3,26,26,0,0,1-13,1.28h0A24.27,24.27,0,0,1,22,60.35a25.77,25.77,0,0,1-8.83-4.28L13,55.94c-.59-.44-1.16-.91-1.7-1.4h0A26,26,0,0,1,8.8,52a1.37,1.37,0,0,1-.16-.18,40.26,40.26,0,0,1-4.22-5.58c-.46-.69-.9-1.4-1.3-2.13A25.93,25.93,0,0,1,8.07,13l0,0,0,0a16.1,16.1,0,0,1,5.5-9.32,16.16,16.16,0,0,1,2-1.41A16,16,0,0,1,21.89,0h.43a9.83,9.83,0,0,1,8.76,5.35h.57a9.87,9.87,0,0,1,5.25,1.5,8.94,8.94,0,0,1,1.31,1h-.7c-.51,0-1,0-1.52.08a16.13,16.13,0,0,0-3.88.9c0,.29,0,.58.06.88v.18a9.85,9.85,0,0,1-2.54,6.61l-.07,0a22.88,22.88,0,0,1-3.72.73c-.24,0-.47.05-.7.09a10,10,0,0,0-2.36.66l-.64.3h0a9,9,0,0,0-1.84,1.22,8,8,0,0,0-1.3,1.3l-.09.1c.3.77.62,1.53.95,2.28a66.26,66.26,0,0,0,3.95,8.6q1.39,2.52,3,4.9a.43.43,0,0,0,0,.07c.07.12.14.24.22.35A108.43,108.43,0,0,0,38.28,52.33l1.25,1.41q1.55,1.69,3.16,3.32l.27.28h0c.6.61,1.21,1.22,1.84,1.81S46.1,60.37,46.75,61c1.21,1.1,2.43,2.17,3.69,3.21,2,1.69,4.09,3.3,6.22,4.83.74.54,1.49,1.06,2.24,1.57q2.13,1.47,4.34,2.81h0c.73.45,1.46.89,2.21,1.32l1,.56.11.07,1.16.64C68.19,76.28,68.7,76.55,69.21,76.81Z"/>
            <path className={classes.cls2} d="M69.24,76.6a.76.76,0,0,1,0,.21c-.51-.26-1-.53-1.52-.82l-1.16-.64-.11-.07-1-.56c-.75-.43-1.48-.87-2.21-1.32h0Q61,72.06,58.9,70.58c-.75-.51-1.5-1-2.24-1.57-2.13-1.53-4.21-3.14-6.22-4.83-1.26-1-2.48-2.11-3.69-3.21-.65-.6-1.3-1.2-1.94-1.82S43.57,58,43,57.34h0l-.27-.28q-1.62-1.62-3.16-3.32l-1.25-1.41A108.43,108.43,0,0,1,27.05,37.09c-.08-.11-.15-.23-.22-.35a.43.43,0,0,1,0-.07q-1.59-2.39-3-4.9a66.26,66.26,0,0,1-3.95-8.6c-.33-.75-.65-1.51-.95-2.28l.09-.1a8,8,0,0,1,1.3-1.3,9,9,0,0,1,1.84-1.22h0l.64-.3a10,10,0,0,1,2.36-.66c.23,0,.46-.07.7-.09a22.88,22.88,0,0,0,3.72-.73l0,0a41.79,41.79,0,0,1,3.69,3.21l.07.06.76.78h0a.17.17,0,0,1,.06.06,40.5,40.5,0,0,1,2.73,3.13c.13.16.26.32.38.49A41.47,41.47,0,0,1,44.23,38a1.88,1.88,0,0,1,.24.18,16,16,0,0,1,4.43,5.46,15.72,15.72,0,0,1,1.2,3.33c.06.24.11.48.16.73a.22.22,0,0,1,0,.08A12.07,12.07,0,0,0,50.63,49a12.58,12.58,0,0,0,.71,1.79,16,16,0,0,0,3.82,5.11h0c.29.25.58.49.89.72h0a39.3,39.3,0,0,1,3.85,2.18h0c.43.27.85.55,1.27.84a40,40,0,0,1,6,5.14.71.71,0,0,1,.15.15.48.48,0,0,1,.07.18.51.51,0,0,1,0,.13.55.55,0,0,1-.55.55.66.66,0,0,1-.31-.09c-.58-.44-1.18-.87-1.8-1.28A42.55,42.55,0,0,0,58.73,61c-.64-.28-1.28-.55-1.93-.81.21.48.44,1,.67,1.43,0,.1.09.19.14.29A42.18,42.18,0,0,0,68.84,75.86L69,76A.9.9,0,0,1,69.24,76.6Z"/>
            <path className={classes.cls3} d="M18.64,57.6c-2.38-.13-2.28,1.22-2.27,3.38a3.82,3.82,0,0,1-.26,1.84,1.25,1.25,0,0,1-.17.23,2.48,2.48,0,0,1-1.92.66"/>
            <path className={classes.cls3} d="M18.64,69.88c-2.38.13-2.28-1.22-2.27-3.38a3.82,3.82,0,0,0-.26-1.84.76.76,0,0,0-.17-.23A2.54,2.54,0,0,0,14,63.71"/>
            <path className={classes.cls3} d="M24.11,57.63c2.38-.13,2.28,1.23,2.27,3.38a3.82,3.82,0,0,0,.26,1.84,1.22,1.22,0,0,0,.17.24,2.5,2.5,0,0,0,1.92.65"/>
            <path className={classes.cls3} d="M24.11,69.91c2.38.13,2.28-1.22,2.27-3.38a3.82,3.82,0,0,1,.26-1.84.93.93,0,0,1,.17-.23,2.54,2.54,0,0,1,1.92-.72"/>
          </g>
        </g>
      </svg>
  );
};

export default Logo;
