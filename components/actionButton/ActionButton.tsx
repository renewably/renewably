import styles from './ActionButton.module.css';

export const ActionButton = (props) => {
  // this blurs focus from button after clicking
  const handleMouseDown = (e) => {
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
