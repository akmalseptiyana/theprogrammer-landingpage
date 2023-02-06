type HighLightProps = {
  caption: string;
};

export default function HighLight({ caption }: HighLightProps) {
  return <span className="text-primary">{caption}</span>;
}
