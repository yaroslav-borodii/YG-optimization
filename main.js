  // Yandex Metrica ID
  const MID = 0000;
  // Google Tag Manager ID
  const GID = '';
  
  function loadMetrica() {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
    ym( MID, "init", {
      clickmap:true, 
      trackLinks:true, 
      accurateTrackBounce:true 
    });
  }

  if ( navigator.userAgent.indexOf( 'YandexMetrika' ) > -1 ) {
    loadMetrica();
  }

  window.onload = function() {
    setTimeout(function() { 
      if ( navigator.userAgent.indexOf( 'YandexMetrika' ) <= -1 ) {
        loadMetrica();
      } 
      const script = document.createElement('script');
      script.type  = 'text/javascript';
      script.async = true;
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        gtag('js', new Date());
        gtag('config', GID);
      };
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GID}`;
      document.head.appendChild(script);
    }, 5500);
}
