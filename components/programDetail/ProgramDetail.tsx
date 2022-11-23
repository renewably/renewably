import styles from './ProgramDetail.module.css';

export const ProgramDetail = ({ program, onClose }: any) => {
  const name = program.name || program.Name;
  const lastUpdated = program.lastUpdated;
  const summary = program.summary;
  const createMarkup = () => {
    return { __html: summary };
  };
  const websiteUrl = program.websiteUrl;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {name && <div className={styles.name}>{name}</div>}
        <button onClick={onClose}>close</button>
      </div>
      {lastUpdated && (
        <div className={styles.lastUpdated}>Last updated at: {lastUpdated}</div>
      )}
      {summary && <div dangerouslySetInnerHTML={createMarkup()} />}
      {websiteUrl && (
        <a href={websiteUrl} target='_blank'>
          {websiteUrl}
        </a>
      )}
    </div>
  );
};
