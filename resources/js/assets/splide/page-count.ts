export default function SlideNumber( Splide: any, Components: any ) {

    const { track } = Components.Elements;
  
    let elm = track.parentElement.querySelector(':scope .splide__page');
  
    function mount() {
      // Stratégie multiple pour l'initialisation
      
      // 1. Essayer immédiatement après un délai
      setTimeout(() => update(), 100);
      
      // 2. Attendre que Splide soit prêt
      Splide.on( 'ready', update );
      
      // 3. Attendre que toutes les slides soient montées
      Splide.on( 'mounted', update );
      
      // 4. Mise à jour lors des mouvements et modifications
      Splide.on( 'move', update );
      Splide.on( 'updated', update );
      Splide.on( 'refresh', update );
      
      // 5. Observer les changements DOM si nécessaire
      if (Splide.length === 0) {
        const observer = new MutationObserver(() => {
          if (Splide.length > 0) {
            update();
            observer.disconnect();
          }
        });
        observer.observe(track, { childList: true, subtree: true });
      }
      
      window.addEventListener('resize', debounce(update, 200));
    }
    
    function unmount(){
      Splide.off( 'ready', update );
      Splide.off( 'mounted', update );
      Splide.off( 'move', update );
      Splide.off( 'updated', update );
      Splide.off( 'refresh', update );
      window.removeEventListener('resize', debounce(update, 200));
    }

    function debounce(func, delay) {
      let timeoutId;
      return function() {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => func(), delay);
      };
    }
  
    function update() {
        // Vérifier que Splide et l'élément existent
        if (!elm) {
            console.warn('SlideNumber: élément .splide__page non trouvé');
            return;
        }
        
        if (!Splide || !Splide.options) {
            console.warn('SlideNumber: Splide ou options non disponibles');
            return;
        }
        
        const perPage = Splide.options.perPage || 1;
        const perMove = Splide.options.perMove || perPage;
        const index = Splide.index || 0;
        const length = Splide.length || 0;
    
        
        // S'assurer qu'on a des valeurs valides
        if (length === 0) {
            console.warn('SlideNumber: aucune slide détectée, forcer la recherche...');
            // Essayer de recompter les slides
            const slides = track.querySelectorAll('.splide__slide');
            const slideCount = slides.length;
            
            if (slideCount > 0) {
                const calculatedPageCount = Math.ceil(slideCount / perPage) || 1;
                elm.textContent = `1/${calculatedPageCount}`;
                console.log('SlideNumber: utilisation du compte manuel des slides:', slideCount);
            } else {
                elm.textContent = '1/1';
            }
            return;
        }
        
        if (perPage === 0) {
            elm.textContent = '1/1';
            return;
        }

        const currentPage = Math.ceil((index + perMove) / perPage);
        const pageCount = Math.ceil(length / perPage) || 1;

        elm.textContent = `${currentPage}/${pageCount}`;
    }
  
    return {
      mount,
      unmount,
    };
}