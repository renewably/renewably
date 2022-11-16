import Link from 'next/link';
import styles from '../styles/ProgramItem.module.css';

export const ProgramItem = ({ program }: any) => {
  const programId = program.id || program.ProgramId;
  const name = program.name || program.Name;
  const implementingSector =
    program.sectorObj?.name || program.ImplementingSectorName;
  const category = program.CategoryName;
  const programType = program.typeObj?.name || program.TypeName;
  return (
    <Link href={`/program/${programId}`} key={programId}>
      <a className={styles.container}>
        {name && <div className={styles.name}>{name}</div>}
        {implementingSector && (
          <div>Implementing Sector: {implementingSector}</div>
        )}
        {category && <div>Category: {category}</div>}
        {programType && <div>Incentive Type: {programType}</div>}
      </a>
    </Link>
  );
};
