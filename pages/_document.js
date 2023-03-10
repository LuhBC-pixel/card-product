import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600&display=swap'
        rel='stylesheet'
      />
      <script
        type='module'
        src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
      ></script>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
