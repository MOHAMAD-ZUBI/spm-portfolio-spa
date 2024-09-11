import React from "react";
import FeatureCard from "./reusable/FeatureCard";

const features = [
  {
    title: "Experience, Efficiency, and Quality",
    desc: "Our team is composed of highly trained and professional staff to ensure we provide high-quality cleaning services that satisfy us before the client.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500"
        viewBox="0 0 80 80"
      >
        <path d="M20.02 10.79c-.18.24-.34.57-.56.8a.69.69 0 0 1-.24.18c-.41.19-.89.18-1.29-.02-.74-.61-1.42-1.29-2.06-2-.11-.12-.22-.23-.32-.35l-.02-.02c-.4-.49-.33-1.21.16-1.61l.03-.03c.39-.48 1.1-.55 1.59-.16.85.77 1.66 1.58 2.42 2.42.15.15.16.43.29.79ZM13.2 7.51c-.06-.02-.13-.03-.19-.05a1.57 1.57 0 0 0-1.16.17c-.83.66-1.59 1.42-2.25 2.25a1.5 1.5 0 0 0-.11 1.35c.26.4.68.66 1.15.74.78.11 3.32-2.5 3.34-3.59-.16-.19-.39-.71-.77-.87Zm2.51-1.88c.43.47 1.15.52 1.64.12.85-.72 1.63-1.52 2.34-2.38.21-.4.22-.88.04-1.29-.16-.36-.65-.56-.96-.8-.4.13-.7.14-.87.3-.81.76-1.63 1.53-2.37 2.36-.31.39-.35.91-.12 1.32.07.14.18.26.3.37ZM9.18 2.5c.1.36.26.71.45 1.02.68.74 1.4 1.47 2.15 2.15.05.04.12.06.17.09.08.04.15.09.23.12.08.03.16.03.24.04.07.01.14.02.22.02.08 0 .16-.02.23-.03.07-.02.15-.04.22-.07.07-.03.14-.06.21-.11.03-.02.06-.03.09-.05.04-.03.06-.07.09-.1.04-.04.1-.06.14-.11.03-.03.04-.08.06-.11l.09-.15c.04-.09.07-.18.09-.27.01-.06.03-.12.03-.18 0-.09 0-.18-.01-.28 0-.07 0-.13-.03-.19-.03-.1-.08-.2-.14-.29-.03-.04-.03-.09-.06-.13-.69-.81-1.46-1.55-2.28-2.23-.39-.22-.87-.26-1.29-.1-.17.07-.32.22-.45.39-.03.04-.06.08-.09.11-.12.16-.23.32-.36.46Zm17.47 56.44v12.8c0 .14 0 .27-.02.39-.11.83-.59 1.19-1.55 1.2h-12.8c-1.16-.01-1.62-.45-1.62-1.6-.01-4.27-.01-8.54 0-12.8 0-1.15.47-1.59 1.64-1.59h12.72c1.14 0 1.63.48 1.63 1.61Zm-13.28 1.12v3.88h3.89v-3.88h-3.89Zm3.88 6.69h-3.87v3.87h3.87v-3.87Zm2.76-.04v3.9h3.91v-3.9h-3.91Zm3.93-3.55v-3.12h-3.93v3.92h3.92v-.8Zm2.7-11.43c0 1.1-.48 1.58-1.57 1.58H12.28c-1.17 0-1.62-.44-1.62-1.59-.01-4.27-.01-8.53 0-12.8 0-1.15.47-1.59 1.63-1.59h12.72c.14 0 .28 0 .4.02.86.11 1.24.59 1.24 1.58v12.8Zm-13.26-7.76h3.85v-3.93h-3.85v3.93Zm0 6.63h3.87v-3.88h-3.87v3.88Zm6.62 0h3.92v-3.87H20v3.87Zm3.94-10.54H20v3.87h3.94v-3.87Zm30.71 36.58c.19 1.47-.68 2.87-2.08 3.35H6.04a3.17 3.17 0 0 1-2.06-3.37C4.02 62.53 4 48.44 4 34.35V33.3c-.43 0-.81.01-1.19 0-.92.03-1.78-.41-2.29-1.17-.82-1.22-.49-2.87.73-3.69 2.38-1.78 4.77-3.54 7.15-5.3 6.27-4.64 12.55-9.29 18.83-13.93 1.63-1.21 2.57-1.2 4.22.02 2.68 1.98 5.35 3.97 8.04 5.94.63.33.93 1.06.71 1.73-.06.17-.16.33-.29.47-.51.53-1.36.55-1.89.04-2.12-1.55-4.23-3.13-6.34-4.69-.63-.46-1.24-.96-1.9-1.38a.944.944 0 0 0-.85-.04c-8.61 6.36-17.22 12.71-25.82 19.08-.08.09-.15.18-.21.28h22.4c.34-.01.67.01 1.01.08.64.14 1.07.75.97 1.4-.03.63-.53 1.13-1.16 1.16-.29.02-.57.03-.86.02H6.71V77.3h25.27v-.87c0-3.67-.03-7.34 0-11.02 0-.17 0-.33.01-.5.23-4.4 3.99-7.79 8.39-7.56 4 .16 7.24 3.3 7.52 7.3.14 3.85.06 7.71.08 11.56v1.07h4V54.56c-.01-.29 0-.57.04-.86.11-.68.73-1.15 1.41-1.08.65.03 1.17.56 1.2 1.21.02.26.01.52.01.78 0 7.34-.03 14.69.02 22.03Zm-9.48-12.19c-.1-2.45-2.48-4.35-4.96-4.45h-.35a5.34 5.34 0 0 0-5.23 5.45c-.02 3.77 0 7.54 0 11.32 0 .18.03.36.06.54h10.53c0-4.33.13-8.59-.05-12.85ZM79.93 6.56v2.19c-.48 2.58-2.13 4.35-4.02 6.02-4.38 3.89-8.68 7.87-13.02 11.8-.39.26-.5.78-.25 1.18 1.55 3.42.84 7.45-1.79 10.14-.67.64-1.39 1.23-2.13 1.78-.18.17-.31.38-.37.62a434.4 434.4 0 0 0-1.86 7.09c-.15.63-.55 1.19-1.1 1.53a8.561 8.561 0 0 1-5.84 1.21c-10.34-1.14-18.52-9.26-19.73-19.59-.24-1.77 0-3.56.71-5.2a3.177 3.177 0 0 1 2.33-1.96c2.26-.5 4.48-1.14 6.71-1.78.33-.14.62-.37.81-.68 1.38-2.08 3.5-3.57 5.92-4.17 1.96-.49 4.04-.3 5.88.54h.02c.39.26.91.15 1.16-.24 4.29-4.75 8.62-9.48 12.91-14.23A7.811 7.811 0 0 1 71.75.02c3.8-.25 7.2 2.33 8 6.05.05.17.1.33.17.5ZM55.52 38.51c-4.7-4.68-9.39-9.38-14.08-14.08a.957.957 0 0 0-1.1-.27c-2.15.6-4.31 1.18-6.48 1.7-.54.09-.98.51-1.09 1.05-.46 1.81-.43 3.71.08 5.51.31-.07.55-.12.8-.19 1.35-.37 2.7-.76 4.06-1.1.69-.19 1.41.19 1.62.87.22.7-.16 1.45-.86 1.67-.27.09-.54.17-.82.24-1.32.36-2.64.72-4.02 1.1.84 2.16 2.06 4.16 3.62 5.89.36-.41.66-.77.99-1.11 1.12-1.13 2.23-2.26 3.37-3.36.02-.02.03-.04.05-.05.51-.5 1.34-.49 1.84.02.52.53.51 1.38-.01 1.9-.17.2-.36.37-.55.56-1.29 1.27-2.58 2.54-3.87 3.82 1.67 1.59 3.67 2.79 5.86 3.52.4-1.45.79-2.9 1.2-4.35.29-1.05.88-1.49 1.71-1.26s1.13.91.86 1.94c-.4 1.5-.8 3-1.23 4.58 1.83.51 3.75.53 5.59.06.49-.1.87-.49.97-.98.54-2.22 1.14-4.43 1.75-6.63.14-.37.03-.78-.27-1.03Zm2.73-12.35c-1.71-1.52-3.25-3.23-4.88-4.84-.31-.34-.65-.64-1.02-.91a6.685 6.685 0 0 0-9.34 1.48l15.05 15.04c.43-.33.82-.7 1.16-1.12 2.4-2.93 1.96-7.25-.97-9.65Zm19.01-18.4a5.037 5.037 0 0 0-3.13-4.71 4.982 4.982 0 0 0-5.63 1.3c-4.4 4.83-8.79 9.66-13.17 14.49-.08.09-.15.19-.22.29 1.92 1.93 3.79 3.8 5.72 5.73.66-.59 1.31-1.19 1.97-1.78 4.19-3.82 8.39-7.63 12.59-11.44a5.19 5.19 0 0 0 1.87-3.88ZM37.31 6.01c0-2.57 2.07-4.66 4.64-4.66h.04c2.56.01 4.63 2.1 4.62 4.66 0 2.56-2.08 4.63-4.64 4.64-2.57 0-4.66-2.07-4.66-4.64Zm2.67-.06c-.03 1.09.83 2 1.92 2.04h.08c1.09-.01 1.97-.91 1.95-2.01a1.972 1.972 0 0 0-2.01-1.95c-1.06.01-1.92.86-1.95 1.92Zm29.29 45.36a4.641 4.641 0 0 1-4.59 4.68 4.654 4.654 0 0 1-4.71-4.59 4.654 4.654 0 0 1 4.59-4.71h.03a4.646 4.646 0 0 1 4.68 4.61Zm-2.67.07c.02-1.09-.85-1.99-1.94-2.01-1.09-.02-2 .85-2.02 1.94-.02 1.09.85 2 1.94 2.02 1.09.01 1.99-.85 2.02-1.94Zm2.67-14.02c-.88-.03-1.77-.03-2.65 0h-.01c-.74 0-1.34.59-1.34 1.33.02.74.63 1.32 1.37 1.32.41.02.83 0 1.25 0 .46 0 .93.03 1.4 0h.07c.72-.04 1.26-.66 1.22-1.37v-.03c-.02-.7-.61-1.25-1.31-1.23Zm3.97-4.12c-.01-.66-.53-1.19-1.19-1.21-.03 0-.05 0-.08-.01-.63-.07-1.21.38-1.28 1.01-.1 1.08-.1 2.18-.01 3.26.1.65.69 1.11 1.35 1.04.68-.04 1.22-.6 1.22-1.28.03-.46 0-.93 0-1.4 0-.47.03-.94 0-1.41Zm4.01 4.11c-.44-.02-.88 0-1.33 0h-1.33s-1.3.57-1.32 1.27v.03c0 .73.58 1.33 1.31 1.33.91.04 1.82.04 2.73 0h.03c.71-.02 1.26-.61 1.24-1.31v-.06a1.31 1.31 0 0 0-1.33-1.27Zm-4 5.31c0-.46.02-.93 0-1.4 0-.66-.52-1.2-1.18-1.24h-.02c-.65-.1-1.25.34-1.35.99-.09 1.11-.09 2.23 0 3.34v.05c.14.64.75 1.05 1.39.92.63-.03 1.13-.54 1.15-1.17.04-.49 0-.99 0-1.48ZM42.63 69.35c0-.49.03-.99 0-1.48-.01-.63-.52-1.14-1.15-1.16a.585.585 0 0 0-.13-.02c-.62-.08-1.18.36-1.26.98-.1 1.11-.1 2.22 0 3.33v.02c.11.65.72 1.09 1.37.98.66-.04 1.17-.58 1.18-1.24.03-.46 0-.93 0-1.4Z"></path>
      </svg>
    ),
  },
  {
    title: "Speed, Precision, and Commitment",
    desc: "What sets Sauber Pro Max Cleaning Services apart is our complete adherence to the agreed-upon schedules.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 80 80">
        <path d="M61 12.62c.21-.35.55-.6.95-.69.1-.02.2-.04.3-.04H62.34c.49-.02.98 0 1.56 0 0-.55-.02-1.03 0-1.52v-.08c0-.04.01-.08.02-.12 0-.05.01-.11.02-.16 0-.04.02-.07.03-.11.02-.07.04-.13.07-.2 0-.02.02-.03.03-.05.04-.08.08-.15.13-.22.27-.39.71-.65 1.22-.66.68-.02 1.26.4 1.49 1v.02c.04.08.06.17.08.25 0 .03 0 .06.01.09 0 .05.02.1.02.15v.11c.02.46 0 .93 0 1.49.53 0 1.02-.02 1.5 0h.08c.07 0 .15.01.22.03h.03c.09.02.18.05.26.08.01 0 .02 0 .03.01.08.03.16.07.23.12a.896.896 0 0 1 .23.17c.02.01.03.03.05.04.05.05.1.11.15.17.02.02.04.04.05.07.04.05.07.11.1.17.02.03.04.06.05.1.02.05.04.11.06.16.01.04.03.09.04.13.01.05.01.1.02.15 0 .04.02.08.02.13v.07c0 .03 0 .06-.01.09 0 .07-.01.14-.02.2 0 .03-.02.06-.02.09-.02.07-.04.14-.07.21 0 .02-.02.04-.03.06-.03.07-.07.14-.12.21 0 .01-.02.02-.03.04-.05.07-.11.13-.17.2l-.02.02c-.07.06-.14.12-.21.17h-.02c-.08.06-.16.1-.25.14h-.02c-.09.04-.18.07-.28.09h-.02a.78.78 0 0 1-.22.03h-.08c-.47.02-.93 0-1.52 0 0 .52.01 1 0 1.48V16.74c0 .07-.02.13-.03.2 0 .03-.02.07-.03.1-.02.07-.04.13-.07.19-.01.03-.03.06-.04.08-.03.06-.07.12-.11.18-.02.02-.03.04-.05.06-.05.06-.1.12-.16.17-.02.01-.03.03-.05.04-.06.05-.13.1-.19.14-.02.01-.03.02-.05.03-.07.04-.14.07-.22.1-.02 0-.04.01-.06.02l-.23.06c-.02 0-.05 0-.07.01-.04 0-.07.01-.11.02H65.35c-.08 0-.16-.02-.24-.04-.02 0-.04-.01-.06-.02-.08-.02-.15-.05-.22-.08-.02-.01-.05-.02-.07-.03a.707.707 0 0 1-.18-.12c-.02-.02-.05-.03-.07-.05-.05-.04-.1-.09-.15-.14l-.07-.07c-.04-.05-.08-.1-.11-.15-.02-.03-.04-.07-.06-.1a.774.774 0 0 1-.07-.16c-.02-.04-.03-.09-.05-.13-.01-.05-.03-.1-.04-.15l-.03-.17v-.24c-.01-.46 0-.92 0-1.46-.56 0-1.05.02-1.54 0h-.1c-.1 0-.19-.02-.28-.04-.01 0-.03 0-.04-.01-.08-.02-.17-.05-.24-.08-.02 0-.04-.02-.06-.03-.07-.03-.13-.07-.2-.11-.03-.02-.05-.04-.07-.06-.05-.04-.1-.08-.15-.13-.03-.03-.05-.06-.08-.09-.04-.04-.07-.09-.11-.13-.03-.04-.05-.09-.08-.13-.02-.04-.05-.08-.07-.13a3.25 3.25 0 0 0-.06-.17l-.03-.11c-.02-.07-.02-.14-.03-.22V13.44c0-.06.01-.12.02-.18v-.06c.02-.09.04-.17.07-.26v-.03c.05-.09.09-.17.14-.25Zm-3.29 21.13v3.13h20.2c1.59 0 2.08.5 2.08 2.11v5.31c0 1.4-.55 1.94-1.94 1.95h-1.19V75.4c0 1.61-.49 2.1-2.1 2.1H46.8c-1.64 0-2.12-.49-2.12-2.15V46.27c-1.09 0-2.14-.02-3.2.02-.13 0-.29.25-.38.41a4.718 4.718 0 0 1-4.49 2.69h-7.52v3.12h7.62a4.691 4.691 0 0 1 4.85 4.52 4.691 4.691 0 0 1-4.52 4.85H32.19c0 1.11-.03 2.19 0 3.27.08 2.27-.07 3.17-2.86 2.99-.07 0-.14.02-.21.04v3.08h.83c2.32 0 4.64-.02 6.95 0 2.34 0 4.31 1.74 4.62 4.06.03.21.04.41.03.62-.02.86-.73 1.54-1.59 1.53-.76-.02-1.4-.58-1.51-1.34-.25-1.41-.64-1.76-2.07-1.76-2.37 0-4.74 0-7.11.01-.08.02-.15.05-.22.09 0 .45.02.94 0 1.43.03.86-.65 1.58-1.5 1.61-.86.03-1.58-.65-1.61-1.5v-.07c-.02-.49 0-.98 0-1.56h-7.63c-.86-.1-1.65.51-1.75 1.38 0 .06-.01.13-.01.19a1.58 1.58 0 0 1-1.63 1.54h-.08a1.6 1.6 0 0 1-1.41-1.78v-.05a4.677 4.677 0 0 1 4.63-4.4c2.32-.03 4.64 0 6.95 0h.88v-3.12H24.6a1.6 1.6 0 0 1-1.79-1.39c-.02-.13-.02-.26 0-.39-.01-1.46 0-2.91 0-4.47-1.54 0-3.05.07-4.54-.03-.85-.04-1.69-.25-2.45-.63-1.86-1-2.79-3.15-2.23-5.18a4.656 4.656 0 0 1 4.43-3.53c2.6-.03 5.2 0 7.86 0v-3.13h-1.61c-1.82 0-3.65-.05-5.47.01a4.915 4.915 0 0 1-5.11-3.11H6.25v29.04c.01.29 0 .57-.03.86a1.55 1.55 0 0 1-1.77 1.3c-.69-.1-1.22-.65-1.31-1.34-.03-.29-.03-.57-.02-.86V46.28c-1.15-.08-2.48.27-3.13-1.11v-7.19c.41-.78 1.25-1.22 2.12-1.11 3.46.04 6.93.02 10.39.02h.92c0-.92-.01-1.77 0-2.62.04-2.39-.07-4.8.18-7.18.86-6.19 5.71-11.06 11.9-11.94 2.04-.27 4.12-.1 6.1.48.17.05.34.08.57.13V6.03c0-.62-.01-1.25 0-1.88-.06-.85.58-1.58 1.42-1.64h.2c5.08-.01 10.16-.01 15.23 0 .85-.03 1.56.64 1.59 1.49v.08c-.02.87-.74 1.56-1.61 1.54H35.34c-.02.23-.04.4-.04.58 0 3.52-.01 7.03.02 10.55.01.34.16.67.41.9 3.78 2.75 5.96 7.19 5.82 11.86v1.06h35.27V5.63H63.14c-.87 0-1.57-.7-1.58-1.57v-.03c.02-.85.72-1.53 1.57-1.52 1.35-.03 2.71 0 4.06 0h10.86c1.39 0 1.94.55 1.94 1.95v27.33c0 1.43-.54 1.96-2 1.96H57.7Zm-44.34 6.29H3.16v3.03h10.22v-3.03Zm15.65 21.88h-3.04v3.02h3.04v-3.02Zm-1.52-6.3h-3.82c-1.85 0-3.69-.01-5.54.02a1.55 1.55 0 0 0-1.58 1.51v.07c.03.85.72 1.52 1.56 1.53.23.01.47 0 .7 0h16.15c.65 0 1.3.02 1.95-.01.65 0 1.22-.43 1.41-1.05.25-.54.1-1.19-.37-1.56-.41-.3-.9-.46-1.41-.48-3.02-.04-6.03-.02-9.05-.02Zm10.93-11.35c0-5.05.01-10.1 0-15.15 0-6.04-4.91-10.93-10.94-10.92-6.04 0-10.93 4.91-10.92 10.94-.01 5.05 0 10.1 0 15.15 0 1.4.55 1.95 1.93 1.96h17.96c1.44 0 1.98-.54 1.98-1.98Zm3.16-7.45h12.87v-3.03H41.59v3.03Zm32.12 25.1H47.87v12.41h25.84V61.92Zm0-15.62H47.87v12.4h25.84V46.3Zm-32.1-6.27v3.03h35.22v-3.03H41.61ZM4.08 10.26c.03-.8.66-1.45 1.47-1.49a4.795 4.795 0 0 0 4.78-4.76c0-.84.69-1.51 1.52-1.5h.05c.83 0 1.5.66 1.51 1.48a4.795 4.795 0 0 0 4.76 4.78c.84 0 1.51.69 1.5 1.53v.05c0 .82-.66 1.5-1.48 1.51-2.63 0-4.76 2.13-4.78 4.76 0 .84-.69 1.51-1.52 1.51h-.05c-.83 0-1.5-.66-1.51-1.48a4.795 4.795 0 0 0-4.76-4.78 1.55 1.55 0 0 1-1.49-1.6Zm6.43.11 1.3 1.27 1.29-1.27-1.17-1.43-1.41 1.43Zm40.35 8.17c-.06-.05-.12-.1-.18-.14a.3.3 0 0 0-.08-.04l-.18-.09c-.04-.02-.08-.03-.12-.04-.05-.02-.11-.03-.16-.04-.05-.01-.11-.01-.17-.02-.04 0-.07-.01-.11-.01h-.08c-.05 0-.1.01-.15.02-.04 0-.07 0-.11.01l-.22.06c-.02 0-.05.01-.07.02-.08.03-.15.07-.23.12-.01 0-.02.01-.03.02-.08.05-.15.11-.22.17h-.01c-.3.3-.49.72-.47 1.17-.01.48 0 .97 0 1.49-.57 0-1.03-.02-1.5 0h-.08c-.05 0-.1.01-.14.02-.04 0-.08 0-.11.01-.07.01-.14.04-.21.06-.02 0-.05.01-.07.02-.08.03-.15.07-.22.11-.01 0-.03.01-.04.02-.08.05-.15.11-.21.17h-.02c-.07.08-.13.15-.19.23-.19.27-.3.59-.3.94 0 .08.02.16.03.23.02.1.04.2.08.29.03.1.08.18.13.26v.02c.06.07.11.14.17.21 0 .01.02.02.03.03.05.06.11.11.18.16.02.01.04.03.06.04.06.04.12.07.18.1.03.02.06.03.09.05.06.02.11.04.17.06.04.01.08.03.13.04.05.01.1.01.15.02.04 0 .08.02.13.02h.08c.48.02.97 0 1.51 0 0 .56-.02 1.02 0 1.48V26c0 .04.01.08.02.12v.05c.02.09.04.17.07.25l.02.04c.03.08.07.16.11.23 0 .01.02.03.03.04.04.07.09.13.14.19l.05.05c.05.05.1.1.16.15.02.02.05.04.08.05.05.04.11.07.17.1.03.02.07.03.11.05.05.02.11.04.17.06.04.01.09.02.14.03.05.01.11.02.16.02.03 0 .05.01.08.01h.23c.07 0 .14-.02.2-.03.03 0 .06-.02.09-.02.07-.02.14-.05.2-.08.02-.01.05-.02.07-.03.07-.04.14-.08.2-.13.02-.01.03-.02.05-.03.07-.05.13-.11.18-.17l.03-.03c.06-.07.11-.14.16-.22v-.02c.06-.08.1-.16.13-.25v-.03c.04-.08.06-.17.07-.26v-.04s.02-.08.02-.12v-.17c.01-.46 0-.92 0-1.45h1.54c.86.02 1.57-.65 1.6-1.51a1.56 1.56 0 0 0-1.51-1.6h-.08c-.49-.02-.98 0-1.55 0 0-.59.02-1.06 0-1.53 0-.24-.05-.47-.15-.67-.04-.1-.09-.18-.14-.26 0 0-.01-.02-.02-.03-.05-.07-.11-.13-.17-.19a.218.218 0 0 0-.05-.04Zm3.69-14.25s0 .06.01.08c.02.08.04.16.07.23 0 .02.01.04.02.05.03.08.08.16.12.23 0 .01.01.02.02.03.05.08.11.15.17.21l.02.02c.07.07.14.13.22.18h.01c.08.06.16.11.25.15h.01c.09.04.18.07.27.09h.02c.09.02.19.03.28.04h.09c.07 0 .14-.02.21-.03h.05c.08-.02.16-.04.24-.07.02 0 .04-.01.06-.02.07-.03.14-.07.2-.11.02-.01.04-.02.07-.04.06-.04.11-.08.16-.13.02-.02.05-.04.07-.07.04-.04.08-.09.11-.14.03-.03.05-.06.08-.1.03-.04.05-.09.07-.13.02-.04.05-.09.07-.14.02-.04.03-.08.04-.13.02-.06.04-.11.05-.17 0-.04 0-.07.01-.11 0-.05.02-.11.02-.16v-.07c-.04-.84-.74-1.5-1.58-1.5-.84.02-1.52.7-1.53 1.55v.07c0 .06.02.12.02.18Zm1.77 48.2H65.2a1.578 1.578 0 0 0 1.79-1.78c-.12-.86-.92-1.46-1.78-1.34h-8.88a1.578 1.578 0 0 0-1.79 1.78c.12.86.92 1.46 1.78 1.34Zm0 15.63h8.88a1.578 1.578 0 0 0 1.78-1.79c-.13-.86-.93-1.46-1.79-1.33h-8.88a1.578 1.578 0 0 0-1.78 1.79c.13.86.93 1.46 1.79 1.33Z"></path>
      </svg>
    ),
  },
  {
    title: "Integrity and Quality",
    desc: "Sauber Pro Ma Cleaning Services guarantees all clients that all cleaning technicians are highly trustworthy, ensuring there is no concern for personal belongings. Additionally, we use the finest German materials manufactured specifically for Sauber Pro Ma Cleaning Services to the highest standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <path d="M78.46 67.99a5.091 5.091 0 0 0 1.36-3.86c-.04-1.02 0-2.05 0-3.07.02-.22.02-.44 0-.66-.18-2.57-2.41-4.52-4.98-4.34h-3V35.1c0-3.71-1.66-5.91-5.32-6.92 0-.78.01-1.53 0-2.27v-.21a2.986 2.986 0 0 0-3.1-2.87c-1.38-.01-2.77 0-4.15 0-2.2 0-3.47 1.19-3.35 3.39a8.88 8.88 0 0 1-1.35 5.59c-.09.14-.14.3-.22.45a9.387 9.387 0 0 0-1.13 4.7c.03 6.07.01 12.13.01 18.2v.92c-2.08 0-4.04-.02-6.01 0-2.54 0-4.6 2.05-4.62 4.59-.02.94.03 1.89-.01 2.83-.24 1.61.24 3.24 1.32 4.46-2.15 2.98-1.17 6.21-1.11 9.34H21.33c0-2.15.01-4.25 0-6.35 0-1.05-.48-1.58-1.49-1.58-4.32-.01-8.64-.01-12.96 0a.97.97 0 0 0-.34 0c-.73.09-1.24.76-1.15 1.49-.02 1.88 0 3.77 0 5.65 0 .27-.02.53-.04.83H3.87q-1.14 0-1.14-1.13V26.86H.06v49.66c0 2.32 1.15 3.47 3.46 3.47h65.61v-2.66H47.65c-1.64 0-2.38-.75-2.38-2.39 0-1.14-.01-2.27 0-3.41a2.006 2.006 0 0 1 2.18-2.18h27.88c1.1.08 1.92 1.03 1.84 2.13.02 1.14 0 2.27 0 3.41 0 1.7-.73 2.43-2.42 2.44H71.9v2.66c1.15 0 2.25.02 3.35 0 2.31.06 4.26-1.68 4.48-3.98.11-2.72.87-5.62-1.25-8.02Zm-59.84 9.3H8.08v-5.21h3.97v2.55h2.6v-2.55h3.98v5.22Zm50.53-21.66c-.01.16-.36.41-.55.41-4.04.03-8.08.03-12.12 0a.753.753 0 0 1-.55-.5c-.07-.68-.03-1.37-.03-2.12h13.28c0 .75.03 1.48-.03 2.21Zm-13.2-4.93v-5.22h13.19v5.22H55.95Zm13.16-16.77c.08 1.15.09 2.3.03 3.45-1.73.17-2.61-.6-2.62-2.28v-4.16a3.53 3.53 0 0 1 2.59 2.99Zm-8.28-8.45c.77 0 1.55.02 2.32 0 .47-.01.73.12.71.65-.03.63 0 1.27 0 1.98h-5.23c-.04-.08-.06-.16-.08-.25q-.09-2.38 2.28-2.38Zm-3.73 7.08c.63-1.37 1.36-1.99 2.9-1.79 1.28.09 2.57.1 3.86.03v1.73c0 .94-.01 1.88 0 2.82v.08a4.648 4.648 0 0 0 4.63 4.67h.65v2.61H55.95c-.03-.2-.05-.4-.06-.6 0-1.41.07-2.83-.02-4.23-.05-1.85.37-3.69 1.23-5.33Zm20.05 31.9c.02.16.02.32 0 .48a2.035 2.035 0 0 1-2.27 1.76H47.74c-1.76 0-2.48-.71-2.48-2.45v-3.24c-.02-.16-.02-.33 0-.49a2.025 2.025 0 0 1 2.24-1.79h27.47a2.004 2.004 0 0 1 2.19 2.16c.01 1.19.01 2.38 0 3.57ZM2.77 18.87h53.09l.06 1.23h2.63V3.69c0-2.32-1.15-3.47-3.46-3.47H3.53C1.22.21.07 1.36.07 3.68v20.43h2.7v-5.25ZM2.71 3.79c0-.74.23-.93.95-.93 17.1.02 34.21.02 51.31 0 .73 0 .95.2.94.93-.03 3.82-.03 7.64 0 11.46 0 .74-.23.93-.95.93-8.55 0-17.1-.01-25.65-.01-8.52 0-17.05-.01-25.57.02-.8 0-1.04-.21-1.03-1.02.04-3.79.04-7.59 0-11.38Zm26.65 25.69c-8.81-.03-15.97 7.09-16 15.9v.13c.05 8.82 7.25 15.92 16.07 15.87 8.74-.06 15.8-7.15 15.83-15.9.03-8.81-7.09-15.97-15.9-16Zm13.26 15.68c.1 5.46-3.14 10.42-8.18 12.53-6.78 2.83-14.57-.37-17.4-7.15-.08-.19-.13-.4-.17-.55 1.34.26 2.64.62 3.97.76 3.6.42 7.21-.69 9.94-3.06.64-.53 1.3-1.03 1.95-1.54 2.58-1.96 5.9-2.63 9.04-1.84.47.09.82.21.84.87Zm-.63-3.58c-2-.33-4.04-.3-6.03.11a13.57 13.57 0 0 0-5.55 2.86c-.63.5-1.27.99-1.89 1.49-3.48 2.6-8.2 2.83-11.91.57a1.44 1.44 0 0 1-.57-.96 13.28 13.28 0 0 1 8.95-12.83c6.93-2.38 14.48 1.31 16.86 8.24.04.13.07.26.13.51Zm4.42 11.29c2.35-5.4 1.99-11.59-.96-16.69a17.9 17.9 0 0 0-9.22-8.01c-9.54-3.79-20.35.87-24.14 10.41-3.79 9.54.87 20.35 10.41 24.14a18.612 18.612 0 0 0 16.76-1.53l1.35 2.12c-6.3 4.5-17.67 5.18-25.75-2.31-8.63-7.96-9.18-21.41-1.22-30.04 7.96-8.63 21.41-9.18 30.04-1.22a21.26 21.26 0 0 1 5.07 24.15l-2.34-1.01ZM62.13 7.44c1.74.67 3.12 2.06 3.76 3.81.01.03.03.05.04.07.67 1.12 1.94 1.2 2.46.03.76-1.79 2.18-3.2 3.97-3.96.36-.13.65-.41.78-.78.23-.66-.12-1.39-.78-1.62a6.88 6.88 0 0 1-3.94-3.97c-.03-.11-.1-.2-.18-.27-.32-.23-.66-.43-1.17-.76-.44.44-.97.76-1.17 1.22a6.298 6.298 0 0 1-3.69 3.65c-.03 0-.05.02-.07.04-.3.43-.84.86-.84 1.28.07.53.38.99.85 1.25Zm5.08-2.01c.25.31.52.6.81.87l-.82.74-.82-.93.84-.68ZM67.06 0Zm5.46 14.48a6.097 6.097 0 0 1-3.73 3.71c-.08.03-.15.08-.22.12-.29.13-.51.36-.64.65-.28.65.01 1.4.66 1.68 1.85.76 3.32 2.22 4.08 4.08.16.38.7.6 1.24 1.02.49-.5 1.03-.81 1.23-1.28a6.282 6.282 0 0 1 3.62-3.61c.61-.17 1.04-.73 1.04-1.36 0-.63-.44-1.19-1.05-1.36a5.91 5.91 0 0 1-3.55-3.55.368.368 0 0 0-.08-.15c-.37-.37-.81-.67-1.29-.88-.63-.14-1.09.34-1.32.92Zm1.31 5.98-.87-.97.96-.81.75.82-.84.96Zm-20.65 3.62h-6.54v-2.56h6.54v2.56Zm-11.59-9.24h11.3c1.19 0 1.66-.47 1.66-1.66V5.87c0-1.19-.47-1.66-1.66-1.66h-11.3c-1.19 0-1.66.46-1.66 1.66v7.31c0 1.19.47 1.66 1.66 1.66Zm1.03-7.93h9.2v5.22h-9.2V6.9ZM5.39 9.02a4.626 4.626 0 0 0 4.48 4.47c1.44.04 2.88.04 4.32 0 2.1-.03 3.9-1.52 4.33-3.58.14-.93.19-1.87.15-2.81.01-1.09-.49-1.57-1.57-1.58H6.89A1.34 1.34 0 0 0 5.4 7.01c-.02.66-.02 1.33 0 1.99Zm2.7-.8h7.82a2.008 2.008 0 0 1-2.11 2.63c-1.13.01-2.27 0-3.4 0-1.69 0-2.44-.84-2.32-2.63Zm21.26 6.62c2.94-.02 5.3-2.42 5.28-5.36a5.318 5.318 0 0 0-5.36-5.28c-2.94.03-5.3 2.43-5.28 5.37a5.307 5.307 0 0 0 5.36 5.26Zm-.03-7.97c1.47 0 2.65 1.2 2.65 2.66s-1.2 2.65-2.66 2.65c-1.46 0-2.63-1.18-2.65-2.64v-.02c0-1.47 1.2-2.65 2.66-2.65ZM36 10.89h2.55v2.57H36v-2.57Zm-15.93.02h2.55v2.57h-2.55v-2.57Zm18.52-2.76H36V5.6h2.59v2.55Zm-15.97-.02h-2.55V5.57h2.55v2.56Zm12.07 40.01h2.56v2.56h-2.56v-2.56ZM22.7 52.13h2.58v2.56H22.7v-2.56Zm7.98 1.34h2.56v2.56h-2.56v-2.56Z"></path>
      </svg>
    ),
  },
];

const featuresDe = [
  {
    title: "Erfahrung, Effizienz und Qualität",
    desc: "Unser Team besteht aus hochqualifizierten und professionellen Mitarbeitern, um sicherzustellen, dass wir hochwertige Reinigungsdienstleistungen bieten, die uns selbst vor dem Kunden zufriedenstellen.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500"
        viewBox="0 0 80 80"
      >
        <path d="M20.02 10.79c-.18.24-.34.57-.56.8a.69.69 0 0 1-.24.18c-.41.19-.89.18-1.29-.02-.74-.61-1.42-1.29-2.06-2-.11-.12-.22-.23-.32-.35l-.02-.02c-.4-.49-.33-1.21.16-1.61l.03-.03c.39-.48 1.1-.55 1.59-.16.85.77 1.66 1.58 2.42 2.42.15.15.16.43.29.79ZM13.2 7.51c-.06-.02-.13-.03-.19-.05a1.57 1.57 0 0 0-1.16.17c-.83.66-1.59 1.42-2.25 2.25a1.5 1.5 0 0 0-.11 1.35c.26.4.68.66 1.15.74.78.11 3.32-2.5 3.34-3.59-.16-.19-.39-.71-.77-.87Zm2.51-1.88c.43.47 1.15.52 1.64.12.85-.72 1.63-1.52 2.34-2.38.21-.4.22-.88.04-1.29-.16-.36-.65-.56-.96-.8-.4.13-.7.14-.87.3-.81.76-1.63 1.53-2.37 2.36-.31.39-.35.91-.12 1.32.07.14.18.26.3.37ZM9.18 2.5c.1.36.26.71.45 1.02.68.74 1.4 1.47 2.15 2.15.05.04.12.06.17.09.08.04.15.09.23.12.08.03.16.03.24.04.07.01.14.02.22.02.08 0 .16-.02.23-.03.07-.02.15-.04.22-.07.07-.03.14-.06.21-.11.03-.02.06-.03.09-.05.04-.03.06-.07.09-.1.04-.04.1-.06.14-.11.03-.03.04-.08.06-.11l.09-.15c.04-.09.07-.18.09-.27.01-.06.03-.12.03-.18 0-.09 0-.18-.01-.28 0-.07 0-.13-.03-.19-.03-.1-.08-.2-.14-.29-.03-.04-.03-.09-.06-.13-.69-.81-1.46-1.55-2.28-2.23-.39-.22-.87-.26-1.29-.1-.17.07-.32.22-.45.39-.03.04-.06.08-.09.11-.12.16-.23.32-.36.46Zm17.47 56.44v12.8c0 .14 0 .27-.02.39-.11.83-.59 1.19-1.55 1.2h-12.8c-1.16-.01-1.62-.45-1.62-1.6-.01-4.27-.01-8.54 0-12.8 0-1.15.47-1.59 1.64-1.59h12.72c1.14 0 1.63.48 1.63 1.61Zm-13.28 1.12v3.88h3.89v-3.88h-3.89Zm3.88 6.69h-3.87v3.87h3.87v-3.87Zm2.76-.04v3.9h3.91v-3.9h-3.91Zm3.93-3.55v-3.12h-3.93v3.92h3.92v-.8Zm2.7-11.43c0 1.1-.48 1.58-1.57 1.58H12.28c-1.17 0-1.62-.44-1.62-1.59-.01-4.27-.01-8.53 0-12.8 0-1.15.47-1.59 1.63-1.59h12.72c.14 0 .28 0 .4.02.86.11 1.24.59 1.24 1.58v12.8Zm-13.26-7.76h3.85v-3.93h-3.85v3.93Zm0 6.63h3.87v-3.88h-3.87v3.88Zm6.62 0h3.92v-3.87H20v3.87Zm3.94-10.54H20v3.87h3.94v-3.87Zm30.71 36.58c.19 1.47-.68 2.87-2.08 3.35H6.04a3.17 3.17 0 0 1-2.06-3.37C4.02 62.53 4 48.44 4 34.35V33.3c-.43 0-.81.01-1.19 0-.92.03-1.78-.41-2.29-1.17-.82-1.22-.49-2.87.73-3.69 2.38-1.78 4.77-3.54 7.15-5.3 6.27-4.64 12.55-9.29 18.83-13.93 1.63-1.21 2.57-1.2 4.22.02 2.68 1.98 5.35 3.97 8.04 5.94.63.33.93 1.06.71 1.73-.06.17-.16.33-.29.47-.51.53-1.36.55-1.89.04-2.12-1.55-4.23-3.13-6.34-4.69-.63-.46-1.24-.96-1.9-1.38a.944.944 0 0 0-.85-.04c-8.61 6.36-17.22 12.71-25.82 19.08-.08.09-.15.18-.21.28h22.4c.34-.01.67.01 1.01.08.64.14 1.07.75.97 1.4-.03.63-.53 1.13-1.16 1.16-.29.02-.57.03-.86.02H6.71V77.3h25.27v-.87c0-3.67-.03-7.34 0-11.02 0-.17 0-.33.01-.5.23-4.4 3.99-7.79 8.39-7.56 4 .16 7.24 3.3 7.52 7.3.14 3.85.06 7.71.08 11.56v1.07h4V54.56c-.01-.29 0-.57.04-.86.11-.68.73-1.15 1.41-1.08.65.03 1.17.56 1.2 1.21.02.26.01.52.01.78 0 7.34-.03 14.69.02 22.03Zm-9.48-12.19c-.1-2.45-2.48-4.35-4.96-4.45h-.35a5.34 5.34 0 0 0-5.23 5.45c-.02 3.77 0 7.54 0 11.32 0 .18.03.36.06.54h10.53c0-4.33.13-8.59-.05-12.85ZM79.93 6.56v2.19c-.48 2.58-2.13 4.35-4.02 6.02-4.38 3.89-8.68 7.87-13.02 11.8-.39.26-.5.78-.25 1.18 1.55 3.42.84 7.45-1.79 10.14-.67.64-1.39 1.23-2.13 1.78-.18.17-.31.38-.37.62a434.4 434.4 0 0 0-1.86 7.09c-.15.63-.55 1.19-1.1 1.53a8.561 8.561 0 0 1-5.84 1.21c-10.34-1.14-18.52-9.26-19.73-19.59-.24-1.77 0-3.56.71-5.2a3.177 3.177 0 0 1 2.33-1.96c2.26-.5 4.48-1.14 6.71-1.78.33-.14.62-.37.81-.68 1.38-2.08 3.5-3.57 5.92-4.17 1.96-.49 4.04-.3 5.88.54h.02c.39.26.91.15 1.16-.24 4.29-4.75 8.62-9.48 12.91-14.23A7.811 7.811 0 0 1 71.75.02c3.8-.25 7.2 2.33 8 6.05.05.17.1.33.17.5ZM55.52 38.51c-4.7-4.68-9.39-9.38-14.08-14.08a.957.957 0 0 0-1.1-.27c-2.15.6-4.31 1.18-6.48 1.7-.54.09-.98.51-1.09 1.05-.46 1.81-.43 3.71.08 5.51.31-.07.55-.12.8-.19 1.35-.37 2.7-.76 4.06-1.1.69-.19 1.41.19 1.62.87.22.7-.16 1.45-.86 1.67-.27.09-.54.17-.82.24-1.32.36-2.64.72-4.02 1.1.84 2.16 2.06 4.16 3.62 5.89.36-.41.66-.77.99-1.11 1.12-1.13 2.23-2.26 3.37-3.36.02-.02.03-.04.05-.05.51-.5 1.34-.49 1.84.02.52.53.51 1.38-.01 1.9-.17.2-.36.37-.55.56-1.29 1.27-2.58 2.54-3.87 3.82 1.67 1.59 3.67 2.79 5.86 3.52.4-1.45.79-2.9 1.2-4.35.29-1.05.88-1.49 1.71-1.26s1.13.91.86 1.94c-.4 1.5-.8 3-1.23 4.58 1.83.51 3.75.53 5.59.06.49-.1.87-.49.97-.98.54-2.22 1.14-4.43 1.75-6.63.14-.37.03-.78-.27-1.03Zm2.73-12.35c-1.71-1.52-3.25-3.23-4.88-4.84-.31-.34-.65-.64-1.02-.91a6.685 6.685 0 0 0-9.34 1.48l15.05 15.04c.43-.33.82-.7 1.16-1.12 2.4-2.93 1.96-7.25-.97-9.65Zm19.01-18.4a5.037 5.037 0 0 0-3.13-4.71 4.982 4.982 0 0 0-5.63 1.3c-4.4 4.83-8.79 9.66-13.17 14.49-.08.09-.15.19-.22.29 1.92 1.93 3.79 3.8 5.72 5.73.66-.59 1.31-1.19 1.97-1.78 4.19-3.82 8.39-7.63 12.59-11.44a5.19 5.19 0 0 0 1.87-3.88ZM37.31 6.01c0-2.57 2.07-4.66 4.64-4.66h.04c2.56.01 4.63 2.1 4.62 4.66 0 2.56-2.08 4.63-4.64 4.64-2.57 0-4.66-2.07-4.66-4.64Zm2.67-.06c-.03 1.09.83 2 1.92 2.04h.08c1.09-.01 1.97-.91 1.95-2.01a1.972 1.972 0 0 0-2.01-1.95c-1.06.01-1.92.86-1.95 1.92Zm29.29 45.36a4.641 4.641 0 0 1-4.59 4.68 4.654 4.654 0 0 1-4.71-4.59 4.654 4.654 0 0 1 4.59-4.71h.03a4.646 4.646 0 0 1 4.68 4.61Zm-2.67.07c.02-1.09-.85-1.99-1.94-2.01-1.09-.02-2 .85-2.02 1.94-.02 1.09.85 2 1.94 2.02 1.09.01 1.99-.85 2.02-1.94Zm2.67-14.02c-.88-.03-1.77-.03-2.65 0h-.01c-.74 0-1.34.59-1.34 1.33.02.74.63 1.32 1.37 1.32.41.02.83 0 1.25 0 .46 0 .93.03 1.4 0h.07c.72-.04 1.26-.66 1.22-1.37v-.03c-.02-.7-.61-1.25-1.31-1.23Zm3.97-4.12c-.01-.66-.53-1.19-1.19-1.21-.03 0-.05 0-.08-.01-.63-.07-1.21.38-1.28 1.01-.1 1.08-.1 2.18-.01 3.26.1.65.69 1.11 1.35 1.04.68-.04 1.22-.6 1.22-1.28.03-.46 0-.93 0-1.4 0-.47.03-.94 0-1.41Zm4.01 4.11c-.44-.02-.88 0-1.33 0h-1.33s-1.3.57-1.32 1.27v.03c0 .73.58 1.33 1.31 1.33.91.04 1.82.04 2.73 0h.03c.71-.02 1.26-.61 1.24-1.31v-.06a1.31 1.31 0 0 0-1.33-1.27Zm-4 5.31c0-.46.02-.93 0-1.4 0-.66-.52-1.2-1.18-1.24h-.02c-.65-.1-1.25.34-1.35.99-.09 1.11-.09 2.23 0 3.34v.05c.14.64.75 1.05 1.39.92.63-.03 1.13-.54 1.15-1.17.04-.49 0-.99 0-1.48ZM42.63 69.35c0-.49.03-.99 0-1.48-.01-.63-.52-1.14-1.15-1.16a.585.585 0 0 0-.13-.02c-.62-.08-1.18.36-1.26.98-.1 1.11-.1 2.22 0 3.33v.02c.11.65.72 1.09 1.37.98.66-.04 1.17-.58 1.18-1.24.03-.46 0-.93 0-1.4Z"></path>
      </svg>
    ),
  },
  {
    title: "Geschwindigkeit, Präzision und Engagement",
    desc: "Was Sauber Pro Max Cleaning Services auszeichnet, ist unsere vollständige Einhaltung der vereinbarten Zeitpläne",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 80 80">
        <path d="M61 12.62c.21-.35.55-.6.95-.69.1-.02.2-.04.3-.04H62.34c.49-.02.98 0 1.56 0 0-.55-.02-1.03 0-1.52v-.08c0-.04.01-.08.02-.12 0-.05.01-.11.02-.16 0-.04.02-.07.03-.11.02-.07.04-.13.07-.2 0-.02.02-.03.03-.05.04-.08.08-.15.13-.22.27-.39.71-.65 1.22-.66.68-.02 1.26.4 1.49 1v.02c.04.08.06.17.08.25 0 .03 0 .06.01.09 0 .05.02.1.02.15v.11c.02.46 0 .93 0 1.49.53 0 1.02-.02 1.5 0h.08c.07 0 .15.01.22.03h.03c.09.02.18.05.26.08.01 0 .02 0 .03.01.08.03.16.07.23.12a.896.896 0 0 1 .23.17c.02.01.03.03.05.04.05.05.1.11.15.17.02.02.04.04.05.07.04.05.07.11.1.17.02.03.04.06.05.1.02.05.04.11.06.16.01.04.03.09.04.13.01.05.01.1.02.15 0 .04.02.08.02.13v.07c0 .03 0 .06-.01.09 0 .07-.01.14-.02.2 0 .03-.02.06-.02.09-.02.07-.04.14-.07.21 0 .02-.02.04-.03.06-.03.07-.07.14-.12.21 0 .01-.02.02-.03.04-.05.07-.11.13-.17.2l-.02.02c-.07.06-.14.12-.21.17h-.02c-.08.06-.16.1-.25.14h-.02c-.09.04-.18.07-.28.09h-.02a.78.78 0 0 1-.22.03h-.08c-.47.02-.93 0-1.52 0 0 .52.01 1 0 1.48V16.74c0 .07-.02.13-.03.2 0 .03-.02.07-.03.1-.02.07-.04.13-.07.19-.01.03-.03.06-.04.08-.03.06-.07.12-.11.18-.02.02-.03.04-.05.06-.05.06-.1.12-.16.17-.02.01-.03.03-.05.04-.06.05-.13.1-.19.14-.02.01-.03.02-.05.03-.07.04-.14.07-.22.1-.02 0-.04.01-.06.02l-.23.06c-.02 0-.05 0-.07.01-.04 0-.07.01-.11.02H65.35c-.08 0-.16-.02-.24-.04-.02 0-.04-.01-.06-.02-.08-.02-.15-.05-.22-.08-.02-.01-.05-.02-.07-.03a.707.707 0 0 1-.18-.12c-.02-.02-.05-.03-.07-.05-.05-.04-.1-.09-.15-.14l-.07-.07c-.04-.05-.08-.1-.11-.15-.02-.03-.04-.07-.06-.1a.774.774 0 0 1-.07-.16c-.02-.04-.03-.09-.05-.13-.01-.05-.03-.1-.04-.15l-.03-.17v-.24c-.01-.46 0-.92 0-1.46-.56 0-1.05.02-1.54 0h-.1c-.1 0-.19-.02-.28-.04-.01 0-.03 0-.04-.01-.08-.02-.17-.05-.24-.08-.02 0-.04-.02-.06-.03-.07-.03-.13-.07-.2-.11-.03-.02-.05-.04-.07-.06-.05-.04-.1-.08-.15-.13-.03-.03-.05-.06-.08-.09-.04-.04-.07-.09-.11-.13-.03-.04-.05-.09-.08-.13-.02-.04-.05-.08-.07-.13a3.25 3.25 0 0 0-.06-.17l-.03-.11c-.02-.07-.02-.14-.03-.22V13.44c0-.06.01-.12.02-.18v-.06c.02-.09.04-.17.07-.26v-.03c.05-.09.09-.17.14-.25Zm-3.29 21.13v3.13h20.2c1.59 0 2.08.5 2.08 2.11v5.31c0 1.4-.55 1.94-1.94 1.95h-1.19V75.4c0 1.61-.49 2.1-2.1 2.1H46.8c-1.64 0-2.12-.49-2.12-2.15V46.27c-1.09 0-2.14-.02-3.2.02-.13 0-.29.25-.38.41a4.718 4.718 0 0 1-4.49 2.69h-7.52v3.12h7.62a4.691 4.691 0 0 1 4.85 4.52 4.691 4.691 0 0 1-4.52 4.85H32.19c0 1.11-.03 2.19 0 3.27.08 2.27-.07 3.17-2.86 2.99-.07 0-.14.02-.21.04v3.08h.83c2.32 0 4.64-.02 6.95 0 2.34 0 4.31 1.74 4.62 4.06.03.21.04.41.03.62-.02.86-.73 1.54-1.59 1.53-.76-.02-1.4-.58-1.51-1.34-.25-1.41-.64-1.76-2.07-1.76-2.37 0-4.74 0-7.11.01-.08.02-.15.05-.22.09 0 .45.02.94 0 1.43.03.86-.65 1.58-1.5 1.61-.86.03-1.58-.65-1.61-1.5v-.07c-.02-.49 0-.98 0-1.56h-7.63c-.86-.1-1.65.51-1.75 1.38 0 .06-.01.13-.01.19a1.58 1.58 0 0 1-1.63 1.54h-.08a1.6 1.6 0 0 1-1.41-1.78v-.05a4.677 4.677 0 0 1 4.63-4.4c2.32-.03 4.64 0 6.95 0h.88v-3.12H24.6a1.6 1.6 0 0 1-1.79-1.39c-.02-.13-.02-.26 0-.39-.01-1.46 0-2.91 0-4.47-1.54 0-3.05.07-4.54-.03-.85-.04-1.69-.25-2.45-.63-1.86-1-2.79-3.15-2.23-5.18a4.656 4.656 0 0 1 4.43-3.53c2.6-.03 5.2 0 7.86 0v-3.13h-1.61c-1.82 0-3.65-.05-5.47.01a4.915 4.915 0 0 1-5.11-3.11H6.25v29.04c.01.29 0 .57-.03.86a1.55 1.55 0 0 1-1.77 1.3c-.69-.1-1.22-.65-1.31-1.34-.03-.29-.03-.57-.02-.86V46.28c-1.15-.08-2.48.27-3.13-1.11v-7.19c.41-.78 1.25-1.22 2.12-1.11 3.46.04 6.93.02 10.39.02h.92c0-.92-.01-1.77 0-2.62.04-2.39-.07-4.8.18-7.18.86-6.19 5.71-11.06 11.9-11.94 2.04-.27 4.12-.1 6.1.48.17.05.34.08.57.13V6.03c0-.62-.01-1.25 0-1.88-.06-.85.58-1.58 1.42-1.64h.2c5.08-.01 10.16-.01 15.23 0 .85-.03 1.56.64 1.59 1.49v.08c-.02.87-.74 1.56-1.61 1.54H35.34c-.02.23-.04.4-.04.58 0 3.52-.01 7.03.02 10.55.01.34.16.67.41.9 3.78 2.75 5.96 7.19 5.82 11.86v1.06h35.27V5.63H63.14c-.87 0-1.57-.7-1.58-1.57v-.03c.02-.85.72-1.53 1.57-1.52 1.35-.03 2.71 0 4.06 0h10.86c1.39 0 1.94.55 1.94 1.95v27.33c0 1.43-.54 1.96-2 1.96H57.7Zm-44.34 6.29H3.16v3.03h10.22v-3.03Zm15.65 21.88h-3.04v3.02h3.04v-3.02Zm-1.52-6.3h-3.82c-1.85 0-3.69-.01-5.54.02a1.55 1.55 0 0 0-1.58 1.51v.07c.03.85.72 1.52 1.56 1.53.23.01.47 0 .7 0h16.15c.65 0 1.3.02 1.95-.01.65 0 1.22-.43 1.41-1.05.25-.54.1-1.19-.37-1.56-.41-.3-.9-.46-1.41-.48-3.02-.04-6.03-.02-9.05-.02Zm10.93-11.35c0-5.05.01-10.1 0-15.15 0-6.04-4.91-10.93-10.94-10.92-6.04 0-10.93 4.91-10.92 10.94-.01 5.05 0 10.1 0 15.15 0 1.4.55 1.95 1.93 1.96h17.96c1.44 0 1.98-.54 1.98-1.98Zm3.16-7.45h12.87v-3.03H41.59v3.03Zm32.12 25.1H47.87v12.41h25.84V61.92Zm0-15.62H47.87v12.4h25.84V46.3Zm-32.1-6.27v3.03h35.22v-3.03H41.61ZM4.08 10.26c.03-.8.66-1.45 1.47-1.49a4.795 4.795 0 0 0 4.78-4.76c0-.84.69-1.51 1.52-1.5h.05c.83 0 1.5.66 1.51 1.48a4.795 4.795 0 0 0 4.76 4.78c.84 0 1.51.69 1.5 1.53v.05c0 .82-.66 1.5-1.48 1.51-2.63 0-4.76 2.13-4.78 4.76 0 .84-.69 1.51-1.52 1.51h-.05c-.83 0-1.5-.66-1.51-1.48a4.795 4.795 0 0 0-4.76-4.78 1.55 1.55 0 0 1-1.49-1.6Zm6.43.11 1.3 1.27 1.29-1.27-1.17-1.43-1.41 1.43Zm40.35 8.17c-.06-.05-.12-.1-.18-.14a.3.3 0 0 0-.08-.04l-.18-.09c-.04-.02-.08-.03-.12-.04-.05-.02-.11-.03-.16-.04-.05-.01-.11-.01-.17-.02-.04 0-.07-.01-.11-.01h-.08c-.05 0-.1.01-.15.02-.04 0-.07 0-.11.01l-.22.06c-.02 0-.05.01-.07.02-.08.03-.15.07-.23.12-.01 0-.02.01-.03.02-.08.05-.15.11-.22.17h-.01c-.3.3-.49.72-.47 1.17-.01.48 0 .97 0 1.49-.57 0-1.03-.02-1.5 0h-.08c-.05 0-.1.01-.14.02-.04 0-.08 0-.11.01-.07.01-.14.04-.21.06-.02 0-.05.01-.07.02-.08.03-.15.07-.22.11-.01 0-.03.01-.04.02-.08.05-.15.11-.21.17h-.02c-.07.08-.13.15-.19.23-.19.27-.3.59-.3.94 0 .08.02.16.03.23.02.1.04.2.08.29.03.1.08.18.13.26v.02c.06.07.11.14.17.21 0 .01.02.02.03.03.05.06.11.11.18.16.02.01.04.03.06.04.06.04.12.07.18.1.03.02.06.03.09.05.06.02.11.04.17.06.04.01.08.03.13.04.05.01.1.01.15.02.04 0 .08.02.13.02h.08c.48.02.97 0 1.51 0 0 .56-.02 1.02 0 1.48V26c0 .04.01.08.02.12v.05c.02.09.04.17.07.25l.02.04c.03.08.07.16.11.23 0 .01.02.03.03.04.04.07.09.13.14.19l.05.05c.05.05.1.1.16.15.02.02.05.04.08.05.05.04.11.07.17.1.03.02.07.03.11.05.05.02.11.04.17.06.04.01.09.02.14.03.05.01.11.02.16.02.03 0 .05.01.08.01h.23c.07 0 .14-.02.2-.03.03 0 .06-.02.09-.02.07-.02.14-.05.2-.08.02-.01.05-.02.07-.03.07-.04.14-.08.2-.13.02-.01.03-.02.05-.03.07-.05.13-.11.18-.17l.03-.03c.06-.07.11-.14.16-.22v-.02c.06-.08.1-.16.13-.25v-.03c.04-.08.06-.17.07-.26v-.04s.02-.08.02-.12v-.17c.01-.46 0-.92 0-1.45h1.54c.86.02 1.57-.65 1.6-1.51a1.56 1.56 0 0 0-1.51-1.6h-.08c-.49-.02-.98 0-1.55 0 0-.59.02-1.06 0-1.53 0-.24-.05-.47-.15-.67-.04-.1-.09-.18-.14-.26 0 0-.01-.02-.02-.03-.05-.07-.11-.13-.17-.19a.218.218 0 0 0-.05-.04Zm3.69-14.25s0 .06.01.08c.02.08.04.16.07.23 0 .02.01.04.02.05.03.08.08.16.12.23 0 .01.01.02.02.03.05.08.11.15.17.21l.02.02c.07.07.14.13.22.18h.01c.08.06.16.11.25.15h.01c.09.04.18.07.27.09h.02c.09.02.19.03.28.04h.09c.07 0 .14-.02.21-.03h.05c.08-.02.16-.04.24-.07.02 0 .04-.01.06-.02.07-.03.14-.07.2-.11.02-.01.04-.02.07-.04.06-.04.11-.08.16-.13.02-.02.05-.04.07-.07.04-.04.08-.09.11-.14.03-.03.05-.06.08-.1.03-.04.05-.09.07-.13.02-.04.05-.09.07-.14.02-.04.03-.08.04-.13.02-.06.04-.11.05-.17 0-.04 0-.07.01-.11 0-.05.02-.11.02-.16v-.07c-.04-.84-.74-1.5-1.58-1.5-.84.02-1.52.7-1.53 1.55v.07c0 .06.02.12.02.18Zm1.77 48.2H65.2a1.578 1.578 0 0 0 1.79-1.78c-.12-.86-.92-1.46-1.78-1.34h-8.88a1.578 1.578 0 0 0-1.79 1.78c.12.86.92 1.46 1.78 1.34Zm0 15.63h8.88a1.578 1.578 0 0 0 1.78-1.79c-.13-.86-.93-1.46-1.79-1.33h-8.88a1.578 1.578 0 0 0-1.78 1.79c.13.86.93 1.46 1.79 1.33Z"></path>
      </svg>
    ),
  },
  {
    title: "Integrität und Qualität",
    desc: "Sauber Pro Ma Reinigungsdienste garantiert allen Kunden, dass alle Reinigungstechniker äußerst vertrauenswürdig sind, sodass keine Bedenken hinsichtlich persönlicher Gegenstände bestehen. Darüber hinaus verwenden wir die besten deutschen Materialien, die speziell für Sauber Pro Ma Reinigungsdienste hergestellt und nach höchsten Standards gefertigt werden.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <path d="M78.46 67.99a5.091 5.091 0 0 0 1.36-3.86c-.04-1.02 0-2.05 0-3.07.02-.22.02-.44 0-.66-.18-2.57-2.41-4.52-4.98-4.34h-3V35.1c0-3.71-1.66-5.91-5.32-6.92 0-.78.01-1.53 0-2.27v-.21a2.986 2.986 0 0 0-3.1-2.87c-1.38-.01-2.77 0-4.15 0-2.2 0-3.47 1.19-3.35 3.39a8.88 8.88 0 0 1-1.35 5.59c-.09.14-.14.3-.22.45a9.387 9.387 0 0 0-1.13 4.7c.03 6.07.01 12.13.01 18.2v.92c-2.08 0-4.04-.02-6.01 0-2.54 0-4.6 2.05-4.62 4.59-.02.94.03 1.89-.01 2.83-.24 1.61.24 3.24 1.32 4.46-2.15 2.98-1.17 6.21-1.11 9.34H21.33c0-2.15.01-4.25 0-6.35 0-1.05-.48-1.58-1.49-1.58-4.32-.01-8.64-.01-12.96 0a.97.97 0 0 0-.34 0c-.73.09-1.24.76-1.15 1.49-.02 1.88 0 3.77 0 5.65 0 .27-.02.53-.04.83H3.87q-1.14 0-1.14-1.13V26.86H.06v49.66c0 2.32 1.15 3.47 3.46 3.47h65.61v-2.66H47.65c-1.64 0-2.38-.75-2.38-2.39 0-1.14-.01-2.27 0-3.41a2.006 2.006 0 0 1 2.18-2.18h27.88c1.1.08 1.92 1.03 1.84 2.13.02 1.14 0 2.27 0 3.41 0 1.7-.73 2.43-2.42 2.44H71.9v2.66c1.15 0 2.25.02 3.35 0 2.31.06 4.26-1.68 4.48-3.98.11-2.72.87-5.62-1.25-8.02Zm-59.84 9.3H8.08v-5.21h3.97v2.55h2.6v-2.55h3.98v5.22Zm50.53-21.66c-.01.16-.36.41-.55.41-4.04.03-8.08.03-12.12 0a.753.753 0 0 1-.55-.5c-.07-.68-.03-1.37-.03-2.12h13.28c0 .75.03 1.48-.03 2.21Zm-13.2-4.93v-5.22h13.19v5.22H55.95Zm13.16-16.77c.08 1.15.09 2.3.03 3.45-1.73.17-2.61-.6-2.62-2.28v-4.16a3.53 3.53 0 0 1 2.59 2.99Zm-8.28-8.45c.77 0 1.55.02 2.32 0 .47-.01.73.12.71.65-.03.63 0 1.27 0 1.98h-5.23c-.04-.08-.06-.16-.08-.25q-.09-2.38 2.28-2.38Zm-3.73 7.08c.63-1.37 1.36-1.99 2.9-1.79 1.28.09 2.57.1 3.86.03v1.73c0 .94-.01 1.88 0 2.82v.08a4.648 4.648 0 0 0 4.63 4.67h.65v2.61H55.95c-.03-.2-.05-.4-.06-.6 0-1.41.07-2.83-.02-4.23-.05-1.85.37-3.69 1.23-5.33Zm20.05 31.9c.02.16.02.32 0 .48a2.035 2.035 0 0 1-2.27 1.76H47.74c-1.76 0-2.48-.71-2.48-2.45v-3.24c-.02-.16-.02-.33 0-.49a2.025 2.025 0 0 1 2.24-1.79h27.47a2.004 2.004 0 0 1 2.19 2.16c.01 1.19.01 2.38 0 3.57ZM2.77 18.87h53.09l.06 1.23h2.63V3.69c0-2.32-1.15-3.47-3.46-3.47H3.53C1.22.21.07 1.36.07 3.68v20.43h2.7v-5.25ZM2.71 3.79c0-.74.23-.93.95-.93 17.1.02 34.21.02 51.31 0 .73 0 .95.2.94.93-.03 3.82-.03 7.64 0 11.46 0 .74-.23.93-.95.93-8.55 0-17.1-.01-25.65-.01-8.52 0-17.05-.01-25.57.02-.8 0-1.04-.21-1.03-1.02.04-3.79.04-7.59 0-11.38Zm26.65 25.69c-8.81-.03-15.97 7.09-16 15.9v.13c.05 8.82 7.25 15.92 16.07 15.87 8.74-.06 15.8-7.15 15.83-15.9.03-8.81-7.09-15.97-15.9-16Zm13.26 15.68c.1 5.46-3.14 10.42-8.18 12.53-6.78 2.83-14.57-.37-17.4-7.15-.08-.19-.13-.4-.17-.55 1.34.26 2.64.62 3.97.76 3.6.42 7.21-.69 9.94-3.06.64-.53 1.3-1.03 1.95-1.54 2.58-1.96 5.9-2.63 9.04-1.84.47.09.82.21.84.87Zm-.63-3.58c-2-.33-4.04-.3-6.03.11a13.57 13.57 0 0 0-5.55 2.86c-.63.5-1.27.99-1.89 1.49-3.48 2.6-8.2 2.83-11.91.57a1.44 1.44 0 0 1-.57-.96 13.28 13.28 0 0 1 8.95-12.83c6.93-2.38 14.48 1.31 16.86 8.24.04.13.07.26.13.51Zm4.42 11.29c2.35-5.4 1.99-11.59-.96-16.69a17.9 17.9 0 0 0-9.22-8.01c-9.54-3.79-20.35.87-24.14 10.41-3.79 9.54.87 20.35 10.41 24.14a18.612 18.612 0 0 0 16.76-1.53l1.35 2.12c-6.3 4.5-17.67 5.18-25.75-2.31-8.63-7.96-9.18-21.41-1.22-30.04 7.96-8.63 21.41-9.18 30.04-1.22a21.26 21.26 0 0 1 5.07 24.15l-2.34-1.01ZM62.13 7.44c1.74.67 3.12 2.06 3.76 3.81.01.03.03.05.04.07.67 1.12 1.94 1.2 2.46.03.76-1.79 2.18-3.2 3.97-3.96.36-.13.65-.41.78-.78.23-.66-.12-1.39-.78-1.62a6.88 6.88 0 0 1-3.94-3.97c-.03-.11-.1-.2-.18-.27-.32-.23-.66-.43-1.17-.76-.44.44-.97.76-1.17 1.22a6.298 6.298 0 0 1-3.69 3.65c-.03 0-.05.02-.07.04-.3.43-.84.86-.84 1.28.07.53.38.99.85 1.25Zm5.08-2.01c.25.31.52.6.81.87l-.82.74-.82-.93.84-.68ZM67.06 0Zm5.46 14.48a6.097 6.097 0 0 1-3.73 3.71c-.08.03-.15.08-.22.12-.29.13-.51.36-.64.65-.28.65.01 1.4.66 1.68 1.85.76 3.32 2.22 4.08 4.08.16.38.7.6 1.24 1.02.49-.5 1.03-.81 1.23-1.28a6.282 6.282 0 0 1 3.62-3.61c.61-.17 1.04-.73 1.04-1.36 0-.63-.44-1.19-1.05-1.36a5.91 5.91 0 0 1-3.55-3.55.368.368 0 0 0-.08-.15c-.37-.37-.81-.67-1.29-.88-.63-.14-1.09.34-1.32.92Zm1.31 5.98-.87-.97.96-.81.75.82-.84.96Zm-20.65 3.62h-6.54v-2.56h6.54v2.56Zm-11.59-9.24h11.3c1.19 0 1.66-.47 1.66-1.66V5.87c0-1.19-.47-1.66-1.66-1.66h-11.3c-1.19 0-1.66.46-1.66 1.66v7.31c0 1.19.47 1.66 1.66 1.66Zm1.03-7.93h9.2v5.22h-9.2V6.9ZM5.39 9.02a4.626 4.626 0 0 0 4.48 4.47c1.44.04 2.88.04 4.32 0 2.1-.03 3.9-1.52 4.33-3.58.14-.93.19-1.87.15-2.81.01-1.09-.49-1.57-1.57-1.58H6.89A1.34 1.34 0 0 0 5.4 7.01c-.02.66-.02 1.33 0 1.99Zm2.7-.8h7.82a2.008 2.008 0 0 1-2.11 2.63c-1.13.01-2.27 0-3.4 0-1.69 0-2.44-.84-2.32-2.63Zm21.26 6.62c2.94-.02 5.3-2.42 5.28-5.36a5.318 5.318 0 0 0-5.36-5.28c-2.94.03-5.3 2.43-5.28 5.37a5.307 5.307 0 0 0 5.36 5.26Zm-.03-7.97c1.47 0 2.65 1.2 2.65 2.66s-1.2 2.65-2.66 2.65c-1.46 0-2.63-1.18-2.65-2.64v-.02c0-1.47 1.2-2.65 2.66-2.65ZM36 10.89h2.55v2.57H36v-2.57Zm-15.93.02h2.55v2.57h-2.55v-2.57Zm18.52-2.76H36V5.6h2.59v2.55Zm-15.97-.02h-2.55V5.57h2.55v2.56Zm12.07 40.01h2.56v2.56h-2.56v-2.56ZM22.7 52.13h2.58v2.56H22.7v-2.56Zm7.98 1.34h2.56v2.56h-2.56v-2.56Z"></path>
      </svg>
    ),
  },
];

const Features = ({ locale }) => {
  console.log(locale);
  let featuresX = locale === "en" ? features : featuresDe;
  return (
    <div className=" max-w-[1600px] mx-auto w-full ">
      <div className=" w-full flex flex-col md:flex-row justify-center items-center max-md:gap-16 gap-32">
        {featuresX.map((feature) => {
          return (
            <FeatureCard
              desc={feature.desc}
              icon={feature.icon}
              title={feature.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
