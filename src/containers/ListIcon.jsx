import styles from '@styles/ListIcon.module.scss';

import iconItemOne from '@icons/road.png';
import iconItemTwo from '@icons/direction.png';
import iconItemThree from '@icons/progress.png';

import IconItem from '@components/IconItem';

const ListIcon = () => {
  const itemOne = {
    id: 1,
    title: 'Vías seguras',
    description: 'Reporte de incidentes',
    img: iconItemOne,
  };

  const itemTwo = {
    id: 2,
    title: 'Estado víal controlado',
    description: 'Estadisticas y análisis de incidentes',
    img: iconItemTwo,
  };

  const itemThree = {
    id: 3,
    title: 'Campo para mejora',
    description: 'Los usuarios son el centro',
    img: iconItemThree,
  };

  return (
    <section className={styles.ListIcon}>
      <IconItem itemContent={itemOne} key={'item-' + itemOne.id} />
      <IconItem itemContent={itemTwo} key={'item-' + itemTwo.id} />
      <IconItem itemContent={itemThree} key={'item-' + itemThree.id} />
    </section>
  );
};

export default ListIcon;
