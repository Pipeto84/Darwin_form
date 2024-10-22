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
import Styles from './styles/App.module.css'
import { myInput } from "./components/MyInput";
import { myCard } from "./components/MyCard";
import { myHeader } from "./components/MyHeader";

const componentsMetada = rSuiteComponents.map((e) => e.build());

const builderView = new BuilderView([
  ...componentsMetada,
  myInput.build(),
  myCard.build(),
  myHeader.build(),
])
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withTemplates([])
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader);

const emptyForm_1 = `${JSON.stringify(data.forms[0])}`;

const formName_1 = "SampleForm";

async function getFormFn_1(name?: string) {
  if (name === formName_1) return emptyForm_1;
  throw new Error(`El formulario ${name} no se encontro`);
}

const simpleCustomization_1: CustomizationMap = {
  // Header: {
  //   hidden: true,
  // },
  // LeftPanel_Nav: {
  //   hidden: true,
  // },
  // RightPanel: {
  //   hidden: true,
  // },
};

const emptyForm_2 = `${JSON.stringify(data.forms[1])}`;

const formName_2 = "SampleForm";

async function getFormFn_2(name?: string) {
  if (name === formName_2) return emptyForm_2;
  throw new Error(`El formulario ${name} no se encontro`);
}

const simpleCustomization_2: CustomizationMap = {
  // Header: {
  //   hidden: true,
  // },
  // LeftPanel_Nav: {
  //   hidden: true,
  // },
  // RightPanel: {
  //   hidden: true,
  // },
};

function App() {
  return (
    <>
      <FormBuilder
        view={builderView}
        getForm={getFormFn_1}
        formName={formName_1}
        customization={simpleCustomization_1}
      />
      <FormBuilder
        view={builderView}
        getForm={getFormFn_2}
        formName={formName_2}
        customization={simpleCustomization_2}
      />
    </>
  );
}

export default App;
