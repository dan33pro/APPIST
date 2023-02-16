import styles from '@styles/IconItem.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';

const IconItem = (props) => {
  const { itemContent } = props;

  useEffect(() => {
    const items = document.querySelectorAll('.' + styles.IconItem);
    items.forEach((item) => {
      let itemId = item.getAttribute('id');
      item.classList.add(styles['icon-item-id-' + itemId]);
    });
  }, []);

  return (
    <article className={styles.IconItem} id={itemContent?.id}>
      <Image className={styles.icon} src={itemContent?.img} alt={'icon-' + itemContent?.title} />
      <h4>{itemContent?.title}</h4>
      <span>{itemContent?.description}</span>
    </article>
  );
};

export default IconItem;
