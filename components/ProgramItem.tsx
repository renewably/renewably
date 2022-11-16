import Link from 'next/link';
import styles from '../styles/ProgramItem.module.css';

export const ProgramItem = ({ program }: any) => {
  const implementingSector = program.sectorObj?.name;
  const sectorSubcategory = program.sectorSubcategory?.name;
  const programType = program.typeObj?.name;
  return (
    <Link href={`/program/${program.id}`}>
      <div className={styles.container}>
        <div className={styles.name}>{program.name}</div>
        {implementingSector && (
          <div>Implementing Sector: {implementingSector}</div>
        )}
        {sectorSubcategory && (
          <div>Sector Subcategory: {sectorSubcategory}</div>
        )}
        {programType && <div>Incentive Type: {programType}</div>}
      </div>
    </Link>
  );
};
