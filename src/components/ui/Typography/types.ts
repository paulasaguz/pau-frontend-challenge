type TagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'strong' | 'li';
type VariantTypes = 'heading' | 'body' | 'subHeading';

export interface TypographyInterface {
  Tag: TagTypes;
  children?: React.ReactNode;
  variant?: VariantTypes;
  className?: string;
}
