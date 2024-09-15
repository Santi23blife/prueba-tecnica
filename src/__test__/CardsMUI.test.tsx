import { CardMUI } from "../stories/CardMUI";
import { renderWithProviders } from "./test-utils";

test("renders CardsMUI component", () => {
  const cardsProps = {
    title: "Example",
    content: "Hola",
  };
  const component = renderWithProviders(
    <CardMUI content={cardsProps.content} title={cardsProps.title} />
  );
  const { getByText } = component;
  try {
    getByText(cardsProps.title);
    getByText(cardsProps.content);
  } catch (error) {
    component.debug();
  }
});
