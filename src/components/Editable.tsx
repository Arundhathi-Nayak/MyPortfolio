import type { Editable } from '../types';

/** Renders real text normally, and { todo } entries as a dashed placeholder. */
export function EditableText({ value }: { value: Editable }) {
  if (typeof value === 'string') return <>{value}</>;
  return (
    <span className="todo" title="Placeholder: edit this in src/data">
      {value.todo}
    </span>
  );
}