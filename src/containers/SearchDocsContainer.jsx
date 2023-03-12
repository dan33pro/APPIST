import styles from '@styles/SearchDocsContainer.module.scss';
import DocCard from '@components/DocCard';
import Image from 'next/image';
import { useState } from 'react';
const removeAccents = require('remove-accents');

import iconLupa from '@icons/lupa.png';

const SearchDocsContainer = (props) => {
    const { docs } = props;
    const [myDocs, setMydocs] = useState(docs);

    function searchDocs () {
        const classNameI = '.'+styles['input-search'];
        const input = document.querySelector(classNameI);

        const value = removeAccents(input.value.toLowerCase());
        if ( value ) {
            const rs = docs.filter( doc => {
                const rValue = removeAccents(doc.nombre.toLowerCase());
                if (rValue.includes(value)) {
                    return doc;
                }
            });
            setMydocs(rs);
        } else {
            setMydocs(docs);
        }
    }

    function docFocus() {
        const classNameA = '.'+styles['container-docs'];
        const article = document.querySelector(classNameA);
        article.classList.add(styles.isView);
    }

    function docBlur() {
        const classNameA = '.'+styles['container-docs'];
        const article = document.querySelector(classNameA);
        setTimeout(() => {
            article.classList.remove(styles.isView);
        }, 200);
        
    }

    return (
        <section className={styles.SearchDocsContainer}>
            <div className={styles.Search}>
                <input type={'text'} className={styles['input-search']} placeholder={'Ingresa parametros'} onKeyUp={searchDocs} onFocus={docFocus} onBlur={docBlur} />
                <Image src={iconLupa} alt={'icono de lupa'} onClick={searchDocs} onKeyDown={searchDocs} />
            </div>
            <article className={styles['container-docs']}>
                {myDocs.map(doc => <DocCard infoDoc={doc} key={'SCard-'+doc.id+'-'+doc.nombre} />)}
            </article>
        </section>
    );
};

export default SearchDocsContainer;