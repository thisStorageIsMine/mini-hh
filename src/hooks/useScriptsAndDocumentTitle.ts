import { useEffect, useRef } from "react";
import { IVacancy } from "../interfaces";

// Меняет название вкладки и загружает скрипты из branded_description



const useScriptsAndDocumentTitle = (newDocumentTitle: string, prevDocumentTitle: string) => {
    const descriptionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Меняем название вкладки
        document.title = newDocumentTitle

        // Запускаем скрипты из branded_description
        if (!descriptionRef.current) return;

        const container = descriptionRef.current;
        const $scripts = container.querySelectorAll('script')

        $scripts.forEach(script => {
            const $script = document.createElement('script');
            container.removeChild(script)

            if (script.src) {
                $script.src = script.src
            } else {
                $script.innerHTML = script.innerHTML;
            }

            container.append($script)
        })

        document.dispatchEvent(new Event('DOMContentLoaded'));

        return () => {

            document.title = prevDocumentTitle
        }
    }, [])

    return descriptionRef
}

export { useScriptsAndDocumentTitle }