interface GTagWindow extends Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}

const w = window as unknown as GTagWindow;

w.dataLayer = w.dataLayer || [];

function gtag(...args: unknown[]) {
  w.dataLayer.push(args);
}

w.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-RBNC0VP6D3');
