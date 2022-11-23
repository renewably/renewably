import styles from './ActionButton.module.css';

export const ActionButton = (props: any) => {
  // this blurs focus from button after clicking
  const handleMouseDown = (e: Event) => {
    e.preventDefault();
    props.onMouseDown?.();
  };
  return (
    <button
      className={styles.actionButton}
      {...props}
      onMouseDown={handleMouseDown}
    />
  );
};
