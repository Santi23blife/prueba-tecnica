import { PropsWithChildren } from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "../redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadState,
    store = setupStore(preloadState),
    ...renderOptions
  } = extendedOptions;
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
