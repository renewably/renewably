import Link from 'next/link';
import styles from './ProgramItem.module.css';

export const ProgramItem = ({ program, onClick }: any) => {
  const programId = program.id || program.ProgramId;
  const name = program.name || program.Name;
  const implementingSector =
    program.sectorObj?.name || program.ImplementingSectorName;
  const category = program.categoryObj?.name || program.CategoryName;
  const programType = program.typeObj?.name || program.TypeName;
  const state = program.stateObj?.abbreviation || program.StateAbbreviation;
  return (
    <button key={programId} onClick={onClick} className={styles.container}>
      <div>
        {name && <div className={styles.name}>{name}</div>}
        {implementingSector && (
          <div>Implementing Sector: {implementingSector}</div>
        )}
        {category && <div>Category: {category}</div>}
        {programType && <div>Incentive Type: {programType}</div>}
        {state && <div>{state}</div>}
      </div>
    </button>
  );
};
