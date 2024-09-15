import MapEmbed from "../stories/MapEmbed";
import { renderWithProviders } from "./test-utils";

test("Render MapEmbed component", () => {
  Object.defineProperty(URL, "createObjectURL", {
    writable: true,
    value: jest.fn(),
  });

  const component = renderWithProviders(<MapEmbed />);
  expect(component).toBeTruthy(); // This is just to check that the component is rendered but error will be thrown because of the maplibre-gl
});
