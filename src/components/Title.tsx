import { TitileProps } from '../interfaces/index';

export const Title = ({styles, title}: TitileProps): JSX.Element => {
  return (
    <h1 className={styles}> { title } </h1>
  )
}
