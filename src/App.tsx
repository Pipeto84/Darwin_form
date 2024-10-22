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
  type CustomizationMap,
} from "@react-form-builder/designer";
import { BiDi } from "@react-form-builder/core";
import data from "./Data/data.json";
import { myInput } from "./components/MyInput";

const componentsMetada = rSuiteComponents.map((e) => e.build());

const builderView = new BuilderView([...componentsMetada, myInput.build()])
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withTemplates([])
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader);

const emptyForm = `${JSON.stringify(data)}`;

const formName = "SampleForm";

async function getFormFn(name?: string) {
  if (name === formName) return emptyForm;
  throw new Error(`El formulario ${name} no se encontro`);
}

const simpleCustomization: CustomizationMap = {
  Header: {
    hidden: true,
  },
  LeftPanel_Nav: {
    hidden: true,
  },
  RightPanel: {
    hidden: true,
  },
};

function App() {
  return (
    <FormBuilder
      view={builderView}
      getForm={getFormFn}
      formName={formName}
      customization={simpleCustomization}
    />
  );
}

export default App;
