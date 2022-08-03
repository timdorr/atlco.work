import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-cw-red grid place-items-center place-content-center h-screen">
      <a
        href="https://join.slack.com/t/atlcoworkers/shared_invite/zt-1dk58dxzl-8O55PQE0BalEhzeApKJlVw"
        className="block relative h-96 w-96 m-8 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cw-white"
      >
        <svg viewBox="0 0 758.33 758.33" className="fill-cw-white">
          <path d="M728.53 231.57c-19.1-45.15-46.43-85.7-81.25-120.52-34.82-34.82-75.36-62.15-120.52-81.25C480 10.03 430.34 0 379.17 0S278.33 10.03 231.58 29.81c-45.15 19.1-85.7 46.43-120.52 81.25-34.82 34.82-62.15 75.36-81.25 120.52C10.03 278.33 0 327.99 0 379.17s10.03 100.84 29.8 147.59c19.1 45.15 46.43 85.7 81.25 120.52 34.82 34.82 75.36 62.15 120.52 81.25 46.76 19.78 96.42 29.8 147.59 29.8S480 748.3 526.75 728.53c45.15-19.1 85.7-46.43 120.52-81.25 34.82-34.82 62.15-75.36 81.25-120.52 19.78-46.76 29.8-96.42 29.8-147.59s-10.03-100.84-29.8-147.59Zm9.77 142.59h-18.63c-.82-57.27-15.69-112.25-42.98-161l16.05-9.27c28.28 50.48 44.72 108.49 45.56 170.27ZM612.91 612.9c-62.43 62.43-145.45 96.82-233.74 96.82s-171.31-34.38-233.74-96.82c-62.44-62.44-96.82-145.45-96.82-233.74s34.38-171.31 96.82-233.74C207.86 82.99 290.88 48.6 379.17 48.6s171.31 34.38 233.74 96.82c62.43 62.44 96.82 145.45 96.82 233.74s-34.38 171.31-96.82 233.74Zm74.82-417.66-16.04 9.26c-14.27-23.81-31.57-46.02-51.71-66.15-20.13-20.13-42.35-37.44-66.15-51.71l9.26-16.04a360.964 360.964 0 0 1 124.64 124.64ZM554.44 65.59l-9.27 16.05c-48.75-27.29-103.73-42.16-161-42.98V20.04c61.78.84 119.78 17.28 170.27 45.56ZM374.17 20.04v18.63c-57.27.82-112.25 15.69-161 42.98L203.9 65.6c50.48-28.28 108.49-44.72 170.27-45.56ZM195.25 70.61l9.26 16.04c-23.81 14.27-46.02 31.57-66.15 51.71-20.13 20.13-37.44 42.35-51.71 66.15l-16.04-9.26A360.964 360.964 0 0 1 195.25 70.61ZM65.59 203.9l16.05 9.27c-27.29 48.75-42.16 103.73-42.98 161H20.04c.84-61.78 17.28-119.78 45.56-170.27ZM20.04 384.17h18.63c.82 57.27 15.69 112.25 42.98 161l-16.05 9.27c-28.28-50.48-44.72-108.49-45.56-170.27Zm50.57 178.92 16.04-9.26c14.27 23.81 31.57 46.02 51.71 66.15 20.13 20.13 42.35 37.44 66.15 51.71l-9.26 16.04A360.964 360.964 0 0 1 70.61 563.09ZM203.9 692.74l9.27-16.05c48.75 27.29 103.73 42.16 161 42.98v18.63c-61.78-.84-119.78-17.28-170.27-45.56Zm180.27 45.56v-18.63c57.27-.82 112.25-15.69 161-42.98l9.27 16.05c-50.48 28.28-108.49 44.72-170.27 45.56Zm178.92-50.57-9.26-16.04c23.81-14.27 46.02-31.57 66.15-51.71 20.13-20.13 37.44-42.35 51.71-66.15l16.04 9.26a360.964 360.964 0 0 1-124.64 124.64Zm129.65-133.29-16.05-9.27c27.29-48.75 42.16-103.73 42.98-161h18.63c-.84 61.78-17.28 119.78-45.56 170.27Z" />
          <path d="M234.05 546.72h16.59c5.58 0 11.45 1.12 14.36 2.67l-3.93 7.52c-3.64-1.89-8.34-2.67-14.6-2.67h-7.91c-2.52 0-3.4.58-3.4 1.99 0 1.21.87 1.99 3.35 2.04l14.12.19c8.29.1 13.87 4.41 13.87 10.57s-5.63 11.06-15.72 11.06h-12.42c-7.37 0-14.31-1.31-19.6-3.59l5.34-7.76c2.13 2.33 7.57 3.78 13.44 3.78h9.51c3.06 0 4.12-.82 4.12-2.33 0-1.21-1.02-1.99-3.4-2.04l-11.06-.19c-10.87-.19-16.44-3.54-16.44-10.38s5.34-10.87 13.78-10.87Zm102.19 32.88h-48.17v-32.4h15.38v24.93h32.79v7.47Zm18.08 0 20.71-32.4h10.91l21.25 32.4h-17.27l-2.43-3.83h-17.07l-2.38 3.83h-13.73Zm20.66-11.06h8l-3.98-6.35-4.03 6.35Zm94.37 7.72c-5.58 2.72-11.3 3.83-19.26 3.83h-6.45c-13.82 0-21.68-6.55-21.68-16.59s7.86-16.78 21.68-16.78h6.45c8.25 0 13.24 1.16 18.68 3.78l-5.68 8.63c-3.35-2.91-7.66-4.41-14.89-4.41-5.87 0-10.43 2.62-10.43 8.78 0 5.48 4.51 8.54 10.72 8.54 6.79 0 11.35-1.46 14.75-4.32l6.11 8.54Zm45.03-9.17-8.93 7.52v5h-15.38v-32.4h15.38v13.92l16.44-13.92h16.2l-14.31 11.98 15.77 20.42h-15.77l-9.41-12.52Zm-128.12 78.22c5.85-6.52 10.68-13.7 13.52-20.61-6.91 2.84-14.1 7.66-20.61 13.51-6.51-5.86-13.69-10.69-20.62-13.51 2.83 6.92 7.65 14.11 13.51 20.61-5.86 6.51-10.68 13.69-13.51 20.61 6.93-2.83 14.11-7.65 20.62-13.51 6.51 5.85 13.7 10.67 20.61 13.51-2.84-6.91-7.66-14.1-13.52-20.61ZM188.72 416.27c0 25.22 10.45 37.1 28.46 37.1 21.97 0 39.62-12.25 51.51-21.61l27.38 45.03c-15.13 11.53-44.31 25.58-72.77 25.58-59.8 0-98.7-34.94-98.7-100.86v-44.67c0-65.92 38.9-100.86 98.7-100.86 28.46 0 57.64 14.05 72.77 25.58l-27.38 45.03c-11.89-9.37-29.54-21.61-51.51-21.61-18.01 0-28.46 11.89-28.46 37.1v74.21Z" />
          <path d="M284.68 353.23h64.12v46.11h-64.12v-46.11Zm292.5 146.25h-54.75l-30.62-130.4h-1.44l-30.26 130.4h-54.75l-55.84-240.63h61.24l24.5 135.08h1.44l29.18-135.08h58.36l27.38 135.08h1.44l28.46-135.08h52.23l-56.56 240.63ZM218.77 198.22l38.51-60.25h20.29l39.5 60.25h-32.11l-4.51-7.12H248.7l-4.42 7.12h-25.52Zm38.42-20.56h14.88l-7.4-11.81-7.49 11.81Zm73.74-39.69h90.28v13.89h-30.84v46.36h-28.59v-46.36h-30.84v-13.89Zm208.63 60.25H450v-60.25h28.59v46.36h60.97v13.89Z" />
        </svg>
      </a>

      <a
        href="https://join.slack.com/t/atlcoworkers/shared_invite/zt-1dk58dxzl-8O55PQE0BalEhzeApKJlVw"
        className="items-center px-4 py-2 border border-cw-white shadow-sm text-lg font-medium rounded text-cw-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cw-white"
      >
        Join Our Slack
      </a>
    </div>
  )
}

export default Home
