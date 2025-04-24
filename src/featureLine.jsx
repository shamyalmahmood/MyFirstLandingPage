import React, { useEffect, useRef } from 'react';

function FeatureLine() {
const initTranslateLTR = -48 * 4;
const initTranslateRTL = 36 * 4;

    const line4Ref = useRef(null);

    useEffect(() => {
        function setupIntersectionObserver(element, isLTR, speed) {
            function scrollHandler() {
                const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
                let totalTranslate = 0;
                
                if (isLTR) {
                    totalTranslate = translateX + initTranslateLTR;
                } else {
                    totalTranslate = -(translateX + initTranslateRTL);
                }
                
                element.style.transform = `translateX(${totalTranslate}px)`;
            }

            const intersectionCallback = (entries) => {
                const isIntersecting = entries[0].isIntersecting;
                if (isIntersecting) {
                    window.addEventListener('scroll', scrollHandler);
                } else {
                    window.removeEventListener('scroll', scrollHandler);
                }
            };

            const intersectionObserver = new IntersectionObserver(intersectionCallback);
            intersectionObserver.observe(element);

            return () => {
                intersectionObserver.unobserve(element);
                window.removeEventListener('scroll', scrollHandler);
            };
        }

        const line4 = line4Ref.current;
       
        if (line4) setupIntersectionObserver(line4, true, 0.8);

        return () => {
            if (line4) window.removeEventListener('scroll', () => {});
        };
    }, []);

    return(
        <div id="feature-line" className="container mt-4">
            <div className="border rounded-lg overflow-hidden flex justify-center p-4 ">
                <div ref={line4Ref} id="line4" className="flex gap-8 p-6">
                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Download Analytics</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Multi-window support</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Trays</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Deep linking</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Menus</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Nav bars</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Global Hotkeys</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Custom menus</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Launch at startup</h3>
                    <span>●</span>

                    <h3 className="whitespace-nowrap my-0 mx-2 font-semibold text-2xl">Download Analytics</h3>
                    <span>●</span>
                </div>
            </div>
        </div>
    );
}
export default FeatureLine