import classNames from 'classnames';

export interface Props {
  label: string;
  icon?: JSX.Element;
  color: string;
  variant?: string;
  className?: string;
}

const Button = ({
  label,
  icon,
  color,
  variant,
  className
}: Props): JSX.Element => {
  const bgColor = variant === 'outlined' ? '' : 'bg-' + color + '-500';
  const borderStyle =
    variant === 'outlined' ? `border-2 border-color-${color}` : '';

  const classStyle = classNames(
    `flex rounded px-4 py-2 justify-center`,
    bgColor,
    borderStyle,
    className
  );

  return (
    <div className='relative'>
      <button className={`${classStyle}`}>
        {icon && <span className='-mt-1 mx-2'>{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default Button;
