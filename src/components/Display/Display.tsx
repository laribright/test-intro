interface DisplayProps {
  count: number;
}

function Display({ count }: DisplayProps) {
  return <div data-testid='display-count'>Count: {count}</div>;
}

export default Display;
