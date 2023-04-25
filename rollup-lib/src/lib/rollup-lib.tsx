import styles from './rollup-lib.module.css';

/* eslint-disable-next-line */
export interface RollupLibProps {}

export function RollupLib(props: RollupLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RollupLib!</h1>
    </div>
  );
}

export default RollupLib;
