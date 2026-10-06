/**
 * Round color indicator for a product color name.
 * "multi" renders a two-tone gradient instead of a solid color.
 */
interface ColorSwatchProps {
  color: string;
  className: string;
}

export default function ColorSwatch({ color, className }: ColorSwatchProps) {
  const isMulti = color.toLowerCase() === 'multi';

  return (
    <div
      className={`rounded-full ${className}`}
      style={{
        backgroundColor: isMulti ? 'transparent' : color.toLowerCase(),
        background: isMulti ? 'linear-gradient(45deg, #f3f4f6 50%, #d1d5db 50%)' : undefined,
      }}
      title={color}
    />
  );
}
