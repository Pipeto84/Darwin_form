import {
  rSuiteComponents,
  rsErrorMessage,
  rsTooltip,
  RsLocalizationWrapper,
  ltrCssLoader,
  rtlCssLoader,
} from "@react-form-builder/components-rsuite";
import {
  FormBuilder,
  BuilderView,
} from "@react-form-builder/designer";
import { BiDi } from "@react-form-builder/core";
import data from "./Data/data.json";

const componentsMetada = rSuiteComponents.map((e) => e.build());

const builderView = new BuilderView(componentsMetada)
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader);

const emptyForm = `${JSON.stringify(data)}`;

const formName = "SampleForm";

async function getFormFn(name?: string) {
  if (name === formName) return emptyForm;
  throw new Error(`El formulario ${name} no se encontro`);
}
function App() {
  return (
    <FormBuilder view={builderView} getForm={getFormFn} formName={formName} />
  );
}

export default App;
