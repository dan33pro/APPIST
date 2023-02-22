import styles from '@styles/DocsContainer.module.scss';

import DocCard from '@components/DocCard';

const DocsContainer = (props) => {
  const {docs} = props;

  return (
    <main className={styles.DocsContainer}>
      {docs.map(doc => <DocCard infoDoc={doc} />)}
    </main>
  );
};

export default DocsContainer;
