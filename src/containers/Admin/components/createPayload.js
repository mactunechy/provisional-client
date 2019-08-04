export default function({
  includeExample,
  notes_description,
  notes_diagram,
  example_description,
  correctAnswer_description,
  correctAnswer_letter,
  example_diagram,
  A,
  B,
  C,
  topic,
}) {
  const example = {
    description: example_description,
    correctAnswer: {
      letter: correctAnswer_letter,
      description: correctAnswer_description,
    },
    multipleChoice: [
      {
        letter: 'A',
        description: A,
      },
      {
        letter: 'B',
        description: B,
      },
      {
        letter: 'C',
        description: C,
      },
    ],
  };
  if (example_diagram.trim ().length > 0) example.diagram = example_diagram;

  let notes = {
    description: notes_description,
  };
  if (topic.trim ().length > 0) {
    example.topic = topic;
    notes.topic = topic;
  }
  if (notes_diagram.trim ().length > 0) notes.diagram = notes_diagram;
  if (includeExample) return [example, notes];
  return [null, notes];
}
